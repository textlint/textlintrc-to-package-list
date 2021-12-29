// LICENSE : MIT
"use strict";

function validRulePackageKey(key) {
    // valid: @scope/name
    if (key.charAt(0) === "@") {
        return key.split("/").length === 2;
    }
    // invalid rule/key
    // just ignore
    return key.split("/").length === 1;
}

export const PackageNamePrefix = {
    config: "textlint-config-",
    rule: "textlint-rule-",
    filterRule: "textlint-filter-rule-",
    rulePreset: "textlint-rule-preset-",
    plugin: "textlint-plugin-"
};
/**
 * Create full package name and return
 * @param {string} prefix
 * @param {string} name
 * @returns {string}
 */
export const createFullPackageName = (prefix, name) => {
    if (name.charAt(0) === "@") {
        const scopedPackageNameRegex = new RegExp(`^${prefix}(-|$)`);
        // if @scope/<name> -> @scope/<prefix><name>
        if (!scopedPackageNameRegex.test(name.split("/")[1])) {
            /*
             * for scoped packages, insert the textlint-rule after the first / unless
             * the path is already @scope/<name> or @scope/textlint-rule-<name>
             */
            return name.replace(/^@([^/]+)\/(.*)$/, (all, scope, name) => {
                // already has prefixed
                if (name.startsWith(prefix)) {
                    return `@${scope}/${name}`
                }
                return `@${scope}/${prefix}${name}`;
            });
        }
    }
    // already has prefixed - do not add prefix
    if (name.startsWith(prefix)) {
        return `${name}`
    }
    return `${prefix}${name}`;
};

export function listPackageNames(configJSON) {
    const plugins = Array.isArray(configJSON["plugins"]) ? configJSON["plugins"] : [];
    const rules = configJSON["rules"] || {};
    const filterRules = configJSON["filters"] || {};
    const pluginsNameList = plugins.map(key => {
        return createFullPackageName(PackageNamePrefix.plugin, key);
    });
    const ruleNameList = Object.keys(rules).filter(validRulePackageKey).map(key => {
        return createFullPackageName(PackageNamePrefix.rule, key);
    });
    const filterRuleNameList = Object.keys(filterRules).filter(validRulePackageKey).map(key => {
        return createFullPackageName(PackageNamePrefix.filterRule, key);
    });
    return [].concat(pluginsNameList, filterRuleNameList, ruleNameList);
}
