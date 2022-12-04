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


import * as runtime from '../runtime';
import type {
  LoginProps,
  Token,
} from '../models';
import {
    LoginPropsFromJSON,
    LoginPropsToJSON,
    TokenFromJSON,
    TokenToJSON,
} from '../models';

export interface LoginRequest {
    loginProps?: LoginProps;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Log in with the provided username and password.
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginPropsToJSON(requestParameters.loginProps),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     * Log in with the provided username and password.
     */
    async login(requestParameters: LoginRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Log out of the current acount.
     */
    async logoutRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Log out of the current acount.
     */
    async logout(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutRaw(initOverrides);
    }

}