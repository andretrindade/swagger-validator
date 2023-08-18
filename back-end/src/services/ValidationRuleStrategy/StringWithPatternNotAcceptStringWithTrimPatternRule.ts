import { TypeValidationRuleStrategy } from "../../constants/TypeValidationRuleStrategy";
import IValidationRuleStrategy from "./IValidationRuleStrategy";

export default class StringWithPatternNotAcceptStringWithTrimPatternRule implements IValidationRuleStrategy {

    pattern: string = `[\\w\\w\\s]*`;

    isValid(obj: any): boolean {

        let isValid = true;
        let properties = Object.getOwnPropertyNames(obj).map(x=> x.toLocaleLowerCase());
        if(properties.includes("pattern")
            ){
        console.log("1 - "+ obj.pattern.toLocaleLowerCase());
        console.log("2 - "+this.pattern);

                isValid = obj.pattern.toLocaleLowerCase() != this.pattern;
                console.log("3 - "+isValid);
        
            }

        return isValid;
    }

    getDescription(): string {
        return "";
    }

    getCodeEnum():TypeValidationRuleStrategy{
        return TypeValidationRuleStrategy.stringWithPatternNotAcceptStringWithTrimPatternRule;
    }

    getNameRule():string{
        return `Campo contem propriedade 'pattern' igual ${this.pattern}` ;
    }

}