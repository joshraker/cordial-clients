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

// CreateUserProps struct for CreateUserProps
type CreateUserProps struct {
	Email string `json:"email"`
	Password string `json:"password"`
	DisplayName string `json:"displayName"`
}

// NewCreateUserProps instantiates a new CreateUserProps object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateUserProps(email string, password string, displayName string) *CreateUserProps {
	this := CreateUserProps{}
	this.Email = email
	this.Password = password
	this.DisplayName = displayName
	return &this
}

// NewCreateUserPropsWithDefaults instantiates a new CreateUserProps object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateUserPropsWithDefaults() *CreateUserProps {
	this := CreateUserProps{}
	return &this
}

// GetEmail returns the Email field value
func (o *CreateUserProps) GetEmail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Email
}

// GetEmailOk returns a tuple with the Email field value
// and a boolean to check if the value has been set.
func (o *CreateUserProps) GetEmailOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Email, true
}

// SetEmail sets field value
func (o *CreateUserProps) SetEmail(v string) {
	o.Email = v
}

// GetPassword returns the Password field value
func (o *CreateUserProps) GetPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Password
}

// GetPasswordOk returns a tuple with the Password field value
// and a boolean to check if the value has been set.
func (o *CreateUserProps) GetPasswordOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Password, true
}

// SetPassword sets field value
func (o *CreateUserProps) SetPassword(v string) {
	o.Password = v
}

// GetDisplayName returns the DisplayName field value
func (o *CreateUserProps) GetDisplayName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.DisplayName
}

// GetDisplayNameOk returns a tuple with the DisplayName field value
// and a boolean to check if the value has been set.
func (o *CreateUserProps) GetDisplayNameOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.DisplayName, true
}

// SetDisplayName sets field value
func (o *CreateUserProps) SetDisplayName(v string) {
	o.DisplayName = v
}

func (o CreateUserProps) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["email"] = o.Email
	}
	if true {
		toSerialize["password"] = o.Password
	}
	if true {
		toSerialize["displayName"] = o.DisplayName
	}
	return json.Marshal(toSerialize)
}

type NullableCreateUserProps struct {
	value *CreateUserProps
	isSet bool
}

func (v NullableCreateUserProps) Get() *CreateUserProps {
	return v.value
}

func (v *NullableCreateUserProps) Set(val *CreateUserProps) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateUserProps) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateUserProps) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateUserProps(val *CreateUserProps) *NullableCreateUserProps {
	return &NullableCreateUserProps{value: val, isSet: true}
}

func (v NullableCreateUserProps) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateUserProps) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

// CUSTOM_CODE_HOOK
