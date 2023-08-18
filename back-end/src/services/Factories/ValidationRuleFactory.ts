import { TypeValidationRuleStrategy } from "../../constants/TypeValidationRuleStrategy";
import EnumWithoutMaxLengthRule from "../ValidationRuleStrategy/EnumWithoutMaxLengthRule";
import IValidationRuleStrategy from "../ValidationRuleStrategy/IValidationRuleStrategy";
import StringWithMinLengthRule from "../ValidationRuleStrategy/StringWithMinLengthRule";
import StringWithMaxLengthRule from "../ValidationRuleStrategy/StringWithMaxLengthRule";
import StringWithPatternRule from "../ValidationRuleStrategy/StringWithPatternRule";
import StringWithPatternValidWithExampleRule from "../ValidationRuleStrategy/StringWithPatternValidWithExampleRule";
import ArrayWithMaxItemRule from "../ValidationRuleStrategy/ArrayWithMaxItemRule";
import StringPatternWIthoutNARule from "../ValidationRuleStrategy/StringPatternWIthoutNARule";
import StringWithPatternNotAcceptStringWithTrimPatternRule from "../ValidationRuleStrategy/StringWithPatternNotAcceptStringWithTrimPatternRule";
import ElementsInRequiredWithoutUsedRule from "../ValidationRuleStrategy/ElementsInRequiredWithoutUsedRule";

export default class ValidationRuleFactory{


    public  static GetValidationRuleDictionary() {
        let dicValidationRuleStrategy : { [id : number] : IValidationRuleStrategy; } = {};
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithMaxLengthRule] = new StringWithMaxLengthRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.enumWithoutMaxLengthRule] = new EnumWithoutMaxLengthRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithPatternRule] = new StringWithPatternRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithPatternValidWithExampleRule] = new StringWithPatternValidWithExampleRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.arrayWithMaxItemRule] = new ArrayWithMaxItemRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithMinLengthRule] = new StringWithMinLengthRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringPatternWIthoutNARule] = new StringPatternWIthoutNARule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithPatternNotAcceptStringWithTrimPatternRule] = new StringWithPatternNotAcceptStringWithTrimPatternRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.elementsInRequiredWithoutUsedRule] = new ElementsInRequiredWithoutUsedRule();
        
        
        return dicValidationRuleStrategy;
    }

    public  static GetValidationRuleByType(type: TypeValidationRuleStrategy):IValidationRuleStrategy {
        return this.GetValidationRuleDictionary()[type];
    }
}