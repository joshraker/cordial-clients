# \NotificationsApi

All URIs are relative to *https://cordial-api.joshraker.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPublicKey**](NotificationsApi.md#GetPublicKey) | **Get** /notifications/key | 
[**Subscribe**](NotificationsApi.md#Subscribe) | **Post** /notifications/subscribe | 
[**Unsubscribe**](NotificationsApi.md#Unsubscribe) | **Post** /notifications/unsubscribe | 



## GetPublicKey

> PublicKeyResponse GetPublicKey(ctx).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsApi.GetPublicKey(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NotificationsApi.GetPublicKey``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPublicKey`: PublicKeyResponse
    fmt.Fprintf(os.Stdout, "Response from `NotificationsApi.GetPublicKey`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetPublicKeyRequest struct via the builder pattern


### Return type

[**PublicKeyResponse**](PublicKeyResponse.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Subscribe

> map[string]interface{} Subscribe(ctx).Subscription(subscription).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    subscription := *openapiclient.NewSubscription() // Subscription |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsApi.Subscribe(context.Background()).Subscription(subscription).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NotificationsApi.Subscribe``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Subscribe`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `NotificationsApi.Subscribe`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubscribeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription** | [**Subscription**](Subscription.md) |  | 

### Return type

**map[string]interface{}**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Unsubscribe

> map[string]interface{} Unsubscribe(ctx).UnsubscribeProps(unsubscribeProps).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    unsubscribeProps := *openapiclient.NewUnsubscribeProps() // UnsubscribeProps |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.NotificationsApi.Unsubscribe(context.Background()).UnsubscribeProps(unsubscribeProps).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `NotificationsApi.Unsubscribe``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `Unsubscribe`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `NotificationsApi.Unsubscribe`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUnsubscribeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unsubscribeProps** | [**UnsubscribeProps**](UnsubscribeProps.md) |  | 

### Return type

**map[string]interface{}**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

