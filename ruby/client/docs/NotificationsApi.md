# OpenapiClient::NotificationsApi

All URIs are relative to *https://cordial-api.joshraker.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_public_key**](NotificationsApi.md#get_public_key) | **GET** /notifications/key |  |
| [**subscribe**](NotificationsApi.md#subscribe) | **POST** /notifications/subscribe |  |
| [**unsubscribe**](NotificationsApi.md#unsubscribe) | **POST** /notifications/unsubscribe |  |


## get_public_key

> <PublicKeyResponse> get_public_key



Get VAPID public key.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::NotificationsApi.new

begin
  
  result = api_instance.get_public_key
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->get_public_key: #{e}"
end
```

#### Using the get_public_key_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PublicKeyResponse>, Integer, Hash)> get_public_key_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.get_public_key_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PublicKeyResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->get_public_key_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PublicKeyResponse**](PublicKeyResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribe

> Object subscribe(opts)



Subscribe to WebPush notifications.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::NotificationsApi.new
opts = {
  subscription: OpenapiClient::Subscription.new # Subscription | 
}

begin
  
  result = api_instance.subscribe(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->subscribe: #{e}"
end
```

#### Using the subscribe_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> subscribe_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.subscribe_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->subscribe_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **subscription** | [**Subscription**](Subscription.md) |  | [optional] |

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## unsubscribe

> Object unsubscribe(opts)



Unsubscribe from WebPush notifications.

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::NotificationsApi.new
opts = {
  unsubscribe_props: OpenapiClient::UnsubscribeProps.new # UnsubscribeProps | 
}

begin
  
  result = api_instance.unsubscribe(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->unsubscribe: #{e}"
end
```

#### Using the unsubscribe_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Object, Integer, Hash)> unsubscribe_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.unsubscribe_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Object
rescue OpenapiClient::ApiError => e
  puts "Error when calling NotificationsApi->unsubscribe_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **unsubscribe_props** | [**UnsubscribeProps**](UnsubscribeProps.md) |  | [optional] |

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

