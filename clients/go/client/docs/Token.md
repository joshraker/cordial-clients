# Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**DiscardedAt** | Pointer to **NullableTime** |  | [optional] 
**AccessToken** | Pointer to **string** |  | [optional] 

## Methods

### NewToken

`func NewToken() *Token`

NewToken instantiates a new Token object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenWithDefaults

`func NewTokenWithDefaults() *Token`

NewTokenWithDefaults instantiates a new Token object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Token) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Token) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Token) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Token) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDiscardedAt

`func (o *Token) GetDiscardedAt() time.Time`

GetDiscardedAt returns the DiscardedAt field if non-nil, zero value otherwise.

### GetDiscardedAtOk

`func (o *Token) GetDiscardedAtOk() (*time.Time, bool)`

GetDiscardedAtOk returns a tuple with the DiscardedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscardedAt

`func (o *Token) SetDiscardedAt(v time.Time)`

SetDiscardedAt sets DiscardedAt field to given value.

### HasDiscardedAt

`func (o *Token) HasDiscardedAt() bool`

HasDiscardedAt returns a boolean if a field has been set.

### SetDiscardedAtNil

`func (o *Token) SetDiscardedAtNil(b bool)`

 SetDiscardedAtNil sets the value for DiscardedAt to be an explicit nil

### UnsetDiscardedAt
`func (o *Token) UnsetDiscardedAt()`

UnsetDiscardedAt ensures that no value is present for DiscardedAt, not even an explicit nil
### GetAccessToken

`func (o *Token) GetAccessToken() string`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *Token) GetAccessTokenOk() (*string, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *Token) SetAccessToken(v string)`

SetAccessToken sets AccessToken field to given value.

### HasAccessToken

`func (o *Token) HasAccessToken() bool`

HasAccessToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


