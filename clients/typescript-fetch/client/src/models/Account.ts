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
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {Date}
     * @memberof Account
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Account
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    email?: string;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'id': value.id,
        'displayName': value.displayName,
        'email': value.email,
    };
}

// CUSTOM_CODE_HOOK
