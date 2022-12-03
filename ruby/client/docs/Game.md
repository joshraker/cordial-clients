# Cordial::Game

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  | [optional] |
| **discarded_at** | **Time** |  | [optional] |
| **word** | **String** |  | [optional] |
| **requester_id** | **String** |  | [optional] |
| **requester** | [**User**](User.md) |  | [optional] |
| **acceptor_id** | **String** |  | [optional] |
| **acceptor** | [**User**](User.md) |  | [optional] |
| **current_user_id** | **String** |  | [optional] |
| **current_user** | [**User**](User.md) |  | [optional] |
| **is_won** | **Boolean** |  | [optional] |
| **guesses** | [**Array&lt;Guess&gt;**](Guess.md) |  | [optional] |

## Example

```ruby
require 'cordial'

instance = Cordial::Game.new(
  id: null,
  discarded_at: null,
  word: null,
  requester_id: null,
  requester: null,
  acceptor_id: null,
  acceptor: null,
  current_user_id: null,
  current_user: null,
  is_won: null,
  guesses: null
)
```

