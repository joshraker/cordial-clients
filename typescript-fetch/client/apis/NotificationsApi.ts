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
  PublicKeyResponse,
  Subscription,
  UnsubscribeProps,
} from '../models';
import {
    PublicKeyResponseFromJSON,
    PublicKeyResponseToJSON,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    UnsubscribePropsFromJSON,
    UnsubscribePropsToJSON,
} from '../models';

export interface SubscribeRequest {
    subscription?: Subscription;
}

export interface UnsubscribeRequest {
    unsubscribeProps?: UnsubscribeProps;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * Get VAPID public key.
     */
    async getPublicKeyRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublicKeyResponse>> {
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
            path: `/notifications/key`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PublicKeyResponseFromJSON(jsonValue));
    }

    /**
     * Get VAPID public key.
     */
    async getPublicKey(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublicKeyResponse> {
        const response = await this.getPublicKeyRaw(initOverrides);
        return await response.value();
    }

    /**
     * Subscribe to WebPush notifications.
     */
    async subscribeRaw(requestParameters: SubscribeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
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
            path: `/notifications/subscribe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionToJSON(requestParameters.subscription),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Subscribe to WebPush notifications.
     */
    async subscribe(requestParameters: SubscribeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.subscribeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unsubscribe from WebPush notifications.
     */
    async unsubscribeRaw(requestParameters: UnsubscribeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
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
            path: `/notifications/unsubscribe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UnsubscribePropsToJSON(requestParameters.unsubscribeProps),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Unsubscribe from WebPush notifications.
     */
    async unsubscribe(requestParameters: UnsubscribeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.unsubscribeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
