# Cordial::AuthApi

All URIs are relative to *https://cordial-api.joshraker.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**login**](AuthApi.md#login) | **POST** /login |  |
| [**logout**](AuthApi.md#logout) | **POST** /logout |  |


## login

> <Token> login(opts)



Log in with the provided username and password.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::AuthApi.new
opts = {
  login_props: Cordial::LoginProps.new({email: 'email_example', password: 'password_example'}) # LoginProps | 
}

begin
  
  result = api_instance.login(opts)
  p result
rescue Cordial::ApiError => e
  puts "Error when calling AuthApi->login: #{e}"
end
```

#### Using the login_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Token>, Integer, Hash)> login_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.login_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Token>
rescue Cordial::ApiError => e
  puts "Error when calling AuthApi->login_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **login_props** | [**LoginProps**](LoginProps.md) |  | [optional] |

### Return type

[**Token**](Token.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logout

> logout



Log out of the current acount.

### Examples

```ruby
require 'time'
require 'cordial'
# setup authorization
Cordial.configure do |config|
  # Configure Bearer authorization (Bearer $TOKEN): token
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = Cordial::AuthApi.new

begin
  
  api_instance.logout
rescue Cordial::ApiError => e
  puts "Error when calling AuthApi->logout: #{e}"
end
```

#### Using the logout_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> logout_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.logout_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Cordial::ApiError => e
  puts "Error when calling AuthApi->logout_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

