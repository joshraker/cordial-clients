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

// LoginProps struct for LoginProps
type LoginProps struct {
	Email string `json:"email"`
	Password string `json:"password"`
}

// NewLoginProps instantiates a new LoginProps object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewLoginProps(email string, password string) *LoginProps {
	this := LoginProps{}
	this.Email = email
	this.Password = password
	return &this
}

// NewLoginPropsWithDefaults instantiates a new LoginProps object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewLoginPropsWithDefaults() *LoginProps {
	this := LoginProps{}
	return &this
}

// GetEmail returns the Email field value
func (o *LoginProps) GetEmail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *LoginProps) GetEmailOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *LoginProps) SetEmail(v string) {
	o.Email = v
}

// GetPassword returns the Password field value
func (o *LoginProps) GetPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Password
}

// GetPasswordOk returns a tuple with the Password field value
// and a boolean to check if the value has been set.
func (o *LoginProps) GetPasswordOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Password, true
}

// SetPassword sets field value
func (o *LoginProps) SetPassword(v string) {
	o.Password = v
}

func (o LoginProps) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	if true {
		toSerialize["password"] = o.Password
	}
	return json.Marshal(toSerialize)
}

type NullableLoginProps struct {
	value *LoginProps
	isSet bool
}

func (v NullableLoginProps) Get() *LoginProps {
	return v.value
}

func (v *NullableLoginProps) Set(val *LoginProps) {
	v.value = val
	v.isSet = true
}

func (v NullableLoginProps) IsSet() bool {
	return v.isSet
}

func (v *NullableLoginProps) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLoginProps(val *LoginProps) *NullableLoginProps {
	return &NullableLoginProps{value: val, isSet: true}
}

func (v NullableLoginProps) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLoginProps) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


