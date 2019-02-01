/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CreditCard { 
    expirationMonth?: number;
    expirationYear?: number;
    number?: string;
    type?: CreditCard.TypeEnum;
}
export namespace CreditCard {
    export type TypeEnum = 'MASTERCARD' | 'VISA';
    export const TypeEnum = {
        MASTERCARD: 'MASTERCARD' as TypeEnum,
        VISA: 'VISA' as TypeEnum
    };
}