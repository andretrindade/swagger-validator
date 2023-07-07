import { TypeValidationRuleStrategy } from "../../constants/TypeValidationRuleStrategy";

export default interface  IValidationRuleStrategy {

    isValid(obj: any) : boolean;
    getDescription(): string;
    getCodeEnum():TypeValidationRuleStrategy;
    getNameRule():string;

}