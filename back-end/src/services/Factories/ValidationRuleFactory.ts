import { TypeValidationRuleStrategy } from "../../constants/TypeValidationRuleStrategy";
import EnumWithoutMaxLengthRule from "../ValidationRuleStrategy/EnumWithoutMaxLengthRule";
import IValidationRuleStrategy from "../ValidationRuleStrategy/IValidationRuleStrategy";
import StringWithMaxLengthRule from "../ValidationRuleStrategy/StringWithMaxLengthRule";

export default class ValidationRuleFactory{


    public  static GetValidationRuleDictionary() {
        let dicValidationRuleStrategy : { [id : number] : IValidationRuleStrategy; } = {};
        dicValidationRuleStrategy[TypeValidationRuleStrategy.stringWithMaxLengthRule] = new StringWithMaxLengthRule();
        dicValidationRuleStrategy[TypeValidationRuleStrategy.enumWithoutMaxLengthRule] = new EnumWithoutMaxLengthRule();

        return dicValidationRuleStrategy;
    }

    public  static GetValidationRuleByType(type: TypeValidationRuleStrategy):IValidationRuleStrategy {
        return this.GetValidationRuleDictionary()[type];
    }
}