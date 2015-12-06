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
    const pluginsNameList = plugins.map(key => {
        return `textlint-plugin-${key}`;
    });
    const ruleNameList = Object.keys(rules).filter(validRulePackageKey).map(key => {
        return `textlint-rule-${key}`;
    });
    return [].concat(pluginsNameList, ruleNameList);
}