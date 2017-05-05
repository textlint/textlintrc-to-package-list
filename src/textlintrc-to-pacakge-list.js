// LICENSE : MIT
"use strict";
function validRulePackageKey(key) {
    if (key.indexOf("/") !== -1) {
        return false;
    }
    return true;
}
export default function listPackageName(configJSON) {
    const plugins = Array.isArray(configJSON["plugins"]) ? configJSON["plugins"] : [];
    const rules = configJSON["rules"] || {};
    const filterRules = configJSON["filters"] || {};
    const pluginsNameList = plugins.map(key => {
        return `textlint-plugin-${key.replace(/^textlint-plugin-/, "")}`;
    });
    const ruleNameList = Object.keys(rules).filter(validRulePackageKey).map(key => {
        return `textlint-rule-${key.replace(/textlint-rule-/, "")}`;
    });
    const filterRuleNameList = Object.keys(filterRules).filter(validRulePackageKey).map(key => {
        return `textlint-filter-rule-${key.replace(/^textlint-filter-rule-/, "")}`;
    });
    return [].concat(pluginsNameList, filterRuleNameList, ruleNameList);
}