/* tslint:disable */
/* eslint-disable */
/**
 * Cordial
 * A cooperative word puzzle game!
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateUserProps
 */
export interface CreateUserProps {
    /**
     * 
     * @type {string}
     * @memberof CreateUserProps
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserProps
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserProps
     */
    displayName: string;
}

/**
 * Check if a given object implements the CreateUserProps interface.
 */
export function instanceOfCreateUserProps(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "displayName" in value;

    return isInstance;
}

export function CreateUserPropsFromJSON(json: any): CreateUserProps {
    return CreateUserPropsFromJSONTyped(json, false);
}

export function CreateUserPropsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserProps {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'displayName': json['displayName'],
    };
}

export function CreateUserPropsToJSON(value?: CreateUserProps | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'displayName': value.displayName,
    };
}

