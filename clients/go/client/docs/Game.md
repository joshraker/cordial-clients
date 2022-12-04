# Game

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**DiscardedAt** | Pointer to **NullableTime** |  | [optional] 
**Word** | Pointer to **NullableString** |  | [optional] 
**RequesterId** | Pointer to **string** |  | [optional] 
**Requester** | Pointer to [**User**](User.md) |  | [optional] 
**AcceptorId** | Pointer to **string** |  | [optional] 
**Acceptor** | Pointer to [**User**](User.md) |  | [optional] 
**CurrentUserId** | Pointer to **string** |  | [optional] 
**CurrentUser** | Pointer to [**User**](User.md) |  | [optional] 
**IsWon** | Pointer to **NullableBool** |  | [optional] 
**Guesses** | Pointer to [**[]Guess**](Guess.md) |  | [optional] 

## Methods

### NewGame

`func NewGame() *Game`

NewGame instantiates a new Game object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGameWithDefaults

`func NewGameWithDefaults() *Game`

NewGameWithDefaults instantiates a new Game object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Game) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Game) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Game) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *Game) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDiscardedAt

`func (o *Game) GetDiscardedAt() time.Time`

GetDiscardedAt returns the DiscardedAt field if non-nil, zero value otherwise.

### GetDiscardedAtOk

`func (o *Game) GetDiscardedAtOk() (*time.Time, bool)`

GetDiscardedAtOk returns a tuple with the DiscardedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscardedAt

`func (o *Game) SetDiscardedAt(v time.Time)`

SetDiscardedAt sets DiscardedAt field to given value.

### HasDiscardedAt

`func (o *Game) HasDiscardedAt() bool`

HasDiscardedAt returns a boolean if a field has been set.

### SetDiscardedAtNil

`func (o *Game) SetDiscardedAtNil(b bool)`

 SetDiscardedAtNil sets the value for DiscardedAt to be an explicit nil

### UnsetDiscardedAt
`func (o *Game) UnsetDiscardedAt()`

UnsetDiscardedAt ensures that no value is present for DiscardedAt, not even an explicit nil
### GetWord

`func (o *Game) GetWord() string`

GetWord returns the Word field if non-nil, zero value otherwise.

### GetWordOk

`func (o *Game) GetWordOk() (*string, bool)`

GetWordOk returns a tuple with the Word field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWord

`func (o *Game) SetWord(v string)`

SetWord sets Word field to given value.

### HasWord

`func (o *Game) HasWord() bool`

HasWord returns a boolean if a field has been set.

### SetWordNil

`func (o *Game) SetWordNil(b bool)`

 SetWordNil sets the value for Word to be an explicit nil

### UnsetWord
`func (o *Game) UnsetWord()`

UnsetWord ensures that no value is present for Word, not even an explicit nil
### GetRequesterId

`func (o *Game) GetRequesterId() string`

GetRequesterId returns the RequesterId field if non-nil, zero value otherwise.

### GetRequesterIdOk

`func (o *Game) GetRequesterIdOk() (*string, bool)`

GetRequesterIdOk returns a tuple with the RequesterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterId

`func (o *Game) SetRequesterId(v string)`

SetRequesterId sets RequesterId field to given value.

### HasRequesterId

`func (o *Game) HasRequesterId() bool`

HasRequesterId returns a boolean if a field has been set.

### GetRequester

`func (o *Game) GetRequester() User`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Game) GetRequesterOk() (*User, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Game) SetRequester(v User)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Game) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetAcceptorId

`func (o *Game) GetAcceptorId() string`

GetAcceptorId returns the AcceptorId field if non-nil, zero value otherwise.

### GetAcceptorIdOk

`func (o *Game) GetAcceptorIdOk() (*string, bool)`

GetAcceptorIdOk returns a tuple with the AcceptorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcceptorId

`func (o *Game) SetAcceptorId(v string)`

SetAcceptorId sets AcceptorId field to given value.

### HasAcceptorId

`func (o *Game) HasAcceptorId() bool`

HasAcceptorId returns a boolean if a field has been set.

### GetAcceptor

`func (o *Game) GetAcceptor() User`

GetAcceptor returns the Acceptor field if non-nil, zero value otherwise.

### GetAcceptorOk

`func (o *Game) GetAcceptorOk() (*User, bool)`

GetAcceptorOk returns a tuple with the Acceptor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcceptor

`func (o *Game) SetAcceptor(v User)`

SetAcceptor sets Acceptor field to given value.

### HasAcceptor

`func (o *Game) HasAcceptor() bool`

HasAcceptor returns a boolean if a field has been set.

### GetCurrentUserId

`func (o *Game) GetCurrentUserId() string`

GetCurrentUserId returns the CurrentUserId field if non-nil, zero value otherwise.

### GetCurrentUserIdOk

`func (o *Game) GetCurrentUserIdOk() (*string, bool)`

GetCurrentUserIdOk returns a tuple with the CurrentUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentUserId

`func (o *Game) SetCurrentUserId(v string)`

SetCurrentUserId sets CurrentUserId field to given value.

### HasCurrentUserId

`func (o *Game) HasCurrentUserId() bool`

HasCurrentUserId returns a boolean if a field has been set.

### GetCurrentUser

`func (o *Game) GetCurrentUser() User`

GetCurrentUser returns the CurrentUser field if non-nil, zero value otherwise.

### GetCurrentUserOk

`func (o *Game) GetCurrentUserOk() (*User, bool)`

GetCurrentUserOk returns a tuple with the CurrentUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentUser

`func (o *Game) SetCurrentUser(v User)`

SetCurrentUser sets CurrentUser field to given value.

### HasCurrentUser

`func (o *Game) HasCurrentUser() bool`

HasCurrentUser returns a boolean if a field has been set.

### GetIsWon

`func (o *Game) GetIsWon() bool`

GetIsWon returns the IsWon field if non-nil, zero value otherwise.

### GetIsWonOk

`func (o *Game) GetIsWonOk() (*bool, bool)`

GetIsWonOk returns a tuple with the IsWon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsWon

`func (o *Game) SetIsWon(v bool)`

SetIsWon sets IsWon field to given value.

### HasIsWon

`func (o *Game) HasIsWon() bool`

HasIsWon returns a boolean if a field has been set.

### SetIsWonNil

`func (o *Game) SetIsWonNil(b bool)`

 SetIsWonNil sets the value for IsWon to be an explicit nil

### UnsetIsWon
`func (o *Game) UnsetIsWon()`

UnsetIsWon ensures that no value is present for IsWon, not even an explicit nil
### GetGuesses

`func (o *Game) GetGuesses() []Guess`

GetGuesses returns the Guesses field if non-nil, zero value otherwise.

### GetGuessesOk

`func (o *Game) GetGuessesOk() (*[]Guess, bool)`

GetGuessesOk returns a tuple with the Guesses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuesses

`func (o *Game) SetGuesses(v []Guess)`

SetGuesses sets Guesses field to given value.

### HasGuesses

`func (o *Game) HasGuesses() bool`

HasGuesses returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


