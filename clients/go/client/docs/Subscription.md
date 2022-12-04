# Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PushToken** | Pointer to **string** |  | [optional] 
**Endpoint** | Pointer to **string** |  | [optional] 
**Keys** | Pointer to [**SubscriptionKeys**](SubscriptionKeys.md) |  | [optional] 

## Methods

### NewSubscription

`func NewSubscription() *Subscription`

NewSubscription instantiates a new Subscription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionWithDefaults

`func NewSubscriptionWithDefaults() *Subscription`

NewSubscriptionWithDefaults instantiates a new Subscription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPushToken

`func (o *Subscription) GetPushToken() string`

GetPushToken returns the PushToken field if non-nil, zero value otherwise.

### GetPushTokenOk

`func (o *Subscription) GetPushTokenOk() (*string, bool)`

GetPushTokenOk returns a tuple with the PushToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPushToken

`func (o *Subscription) SetPushToken(v string)`

SetPushToken sets PushToken field to given value.

### HasPushToken

`func (o *Subscription) HasPushToken() bool`

HasPushToken returns a boolean if a field has been set.

### GetEndpoint

`func (o *Subscription) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *Subscription) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *Subscription) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *Subscription) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetKeys

`func (o *Subscription) GetKeys() SubscriptionKeys`

GetKeys returns the Keys field if non-nil, zero value otherwise.

### GetKeysOk

`func (o *Subscription) GetKeysOk() (*SubscriptionKeys, bool)`

GetKeysOk returns a tuple with the Keys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeys

`func (o *Subscription) SetKeys(v SubscriptionKeys)`

SetKeys sets Keys field to given value.

### HasKeys

`func (o *Subscription) HasKeys() bool`

HasKeys returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


