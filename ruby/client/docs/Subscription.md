# Cordial::Subscription

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **push_token** | **String** |  | [optional] |
| **endpoint** | **String** |  | [optional] |
| **keys** | [**SubscriptionKeys**](SubscriptionKeys.md) |  | [optional] |

## Example

```ruby
require 'cordial'

instance = Cordial::Subscription.new(
  push_token: null,
  endpoint: null,
  keys: null
)
```

