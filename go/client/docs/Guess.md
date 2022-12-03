# Guess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**DiscardedAt** | Pointer to **NullableTime** |  | [optional] 
**Word** | Pointer to **string** |  | [optional] 
**GameId** | Pointer to **int64** |  | [optional] 
**Comparison** | Pointer to **[]int32** |  | [optional] 

## Methods

### NewGuess

`func NewGuess() *Guess`

NewGuess instantiates a new Guess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuessWithDefaults

`func NewGuessWithDefaults() *Guess`

NewGuessWithDefaults instantiates a new Guess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Guess) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Guess) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Guess) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Guess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDiscardedAt

`func (o *Guess) GetDiscardedAt() time.Time`

GetDiscardedAt returns the DiscardedAt field if non-nil, zero value otherwise.

### GetDiscardedAtOk

`func (o *Guess) GetDiscardedAtOk() (*time.Time, bool)`

GetDiscardedAtOk returns a tuple with the DiscardedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscardedAt

`func (o *Guess) SetDiscardedAt(v time.Time)`

SetDiscardedAt sets DiscardedAt field to given value.

### HasDiscardedAt

`func (o *Guess) HasDiscardedAt() bool`

HasDiscardedAt returns a boolean if a field has been set.

### SetDiscardedAtNil

`func (o *Guess) SetDiscardedAtNil(b bool)`

 SetDiscardedAtNil sets the value for DiscardedAt to be an explicit nil

### UnsetDiscardedAt
`func (o *Guess) UnsetDiscardedAt()`

UnsetDiscardedAt ensures that no value is present for DiscardedAt, not even an explicit nil
### GetWord

`func (o *Guess) GetWord() string`

GetWord returns the Word field if non-nil, zero value otherwise.

### GetWordOk

`func (o *Guess) GetWordOk() (*string, bool)`

GetWordOk returns a tuple with the Word field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWord

`func (o *Guess) SetWord(v string)`

SetWord sets Word field to given value.

### HasWord

`func (o *Guess) HasWord() bool`

HasWord returns a boolean if a field has been set.

### GetGameId

`func (o *Guess) GetGameId() int64`

GetGameId returns the GameId field if non-nil, zero value otherwise.

### GetGameIdOk

`func (o *Guess) GetGameIdOk() (*int64, bool)`

GetGameIdOk returns a tuple with the GameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGameId

`func (o *Guess) SetGameId(v int64)`

SetGameId sets GameId field to given value.

### HasGameId

`func (o *Guess) HasGameId() bool`

HasGameId returns a boolean if a field has been set.

### GetComparison

`func (o *Guess) GetComparison() []int32`

GetComparison returns the Comparison field if non-nil, zero value otherwise.

### GetComparisonOk

`func (o *Guess) GetComparisonOk() (*[]int32, bool)`

GetComparisonOk returns a tuple with the Comparison field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComparison

`func (o *Guess) SetComparison(v []int32)`

SetComparison sets Comparison field to given value.

### HasComparison

`func (o *Guess) HasComparison() bool`

HasComparison returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


