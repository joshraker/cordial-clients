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
 * @interface LoginProps
 */
export interface LoginProps {
    /**
     * 
     * @type {string}
     * @memberof LoginProps
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof LoginProps
     */
    password: string;
}

/**
 * Check if a given object implements the LoginProps interface.
 */
export function instanceOfLoginProps(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;

    return isInstance;
}

export function LoginPropsFromJSON(json: any): LoginProps {
    return LoginPropsFromJSONTyped(json, false);
}

export function LoginPropsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginProps {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function LoginPropsToJSON(value?: LoginProps | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}

// CUSTOM_CODE_HOOK