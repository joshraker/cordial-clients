/*
Cordial

A cooperative word puzzle game!

API version: 0.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cordial

import (
	"encoding/json"
)

// SubscriptionKeys struct for SubscriptionKeys
type SubscriptionKeys struct {
	Auth string `json:"auth"`
	P256dh string `json:"p256dh"`
}

// NewSubscriptionKeys instantiates a new SubscriptionKeys object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubscriptionKeys(auth string, p256dh string) *SubscriptionKeys {
	this := SubscriptionKeys{}
	this.Auth = auth
	this.P256dh = p256dh
	return &this
}

// NewSubscriptionKeysWithDefaults instantiates a new SubscriptionKeys object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubscriptionKeysWithDefaults() *SubscriptionKeys {
	this := SubscriptionKeys{}
	return &this
}

// GetAuth returns the Auth field value
func (o *SubscriptionKeys) GetAuth() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Auth
}

// GetAuthOk returns a tuple with the Auth field value
// and a boolean to check if the value has been set.
func (o *SubscriptionKeys) GetAuthOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Auth, true
}

// SetAuth sets field value
func (o *SubscriptionKeys) SetAuth(v string) {
	o.Auth = v
}

// GetP256dh returns the P256dh field value
func (o *SubscriptionKeys) GetP256dh() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.P256dh
}

// GetP256dhOk returns a tuple with the P256dh field value
// and a boolean to check if the value has been set.
func (o *SubscriptionKeys) GetP256dhOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.P256dh, true
}

// SetP256dh sets field value
func (o *SubscriptionKeys) SetP256dh(v string) {
	o.P256dh = v
}

func (o SubscriptionKeys) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["auth"] = o.Auth
	}
	if true {
		toSerialize["p256dh"] = o.P256dh
	}
	return json.Marshal(toSerialize)
}

type NullableSubscriptionKeys struct {
	value *SubscriptionKeys
	isSet bool
}

func (v NullableSubscriptionKeys) Get() *SubscriptionKeys {
	return v.value
}

func (v *NullableSubscriptionKeys) Set(val *SubscriptionKeys) {
	v.value = val
	v.isSet = true
}

func (v NullableSubscriptionKeys) IsSet() bool {
	return v.isSet
}

func (v *NullableSubscriptionKeys) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubscriptionKeys(val *SubscriptionKeys) *NullableSubscriptionKeys {
	return &NullableSubscriptionKeys{value: val, isSet: true}
}

func (v NullableSubscriptionKeys) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubscriptionKeys) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

// CUSTOM_CODE_HOOK
