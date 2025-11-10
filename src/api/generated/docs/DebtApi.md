# DebtApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1EventsEventIdDebtsDebtIdConfirmPost**](#apiv1eventseventiddebtsdebtidconfirmpost) | **POST** /api/v1/events/{eventId}/debts/{debtId}/confirm | Оплатить долг|
|[**apiV1EventsEventIdDebtsDebtIdGet**](#apiv1eventseventiddebtsdebtidget) | **GET** /api/v1/events/{eventId}/debts/{debtId} | Получение информации о долге|
|[**apiV1EventsEventIdDebtsDebtIdSendPost**](#apiv1eventseventiddebtsdebtidsendpost) | **POST** /api/v1/events/{eventId}/debts/{debtId}/send | Оплатить долг|
|[**apiV1EventsEventIdDebtsGet**](#apiv1eventseventiddebtsget) | **GET** /api/v1/events/{eventId}/debts | Получение списка долгов|

# **apiV1EventsEventIdDebtsDebtIdConfirmPost**
> apiV1EventsEventIdDebtsDebtIdConfirmPost()


### Example

```typescript
import {
    DebtApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DebtApi(configuration);

let eventId: string; //Id ивента (события) (default to undefined)
let debtId: string; //Id пользователя - должника (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdDebtsDebtIdConfirmPost(
    eventId,
    debtId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] | Id ивента (события) | defaults to undefined|
| **debtId** | [**string**] | Id пользователя - должника | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdDebtsDebtIdGet**
> GetDebtEntry apiV1EventsEventIdDebtsDebtIdGet()


### Example

```typescript
import {
    DebtApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DebtApi(configuration);

let eventId: string; //Id ивента (события) (default to undefined)
let debtId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdDebtsDebtIdGet(
    eventId,
    debtId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] | Id ивента (события) | defaults to undefined|
| **debtId** | [**string**] |  | defaults to undefined|


### Return type

**GetDebtEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdDebtsDebtIdSendPost**
> apiV1EventsEventIdDebtsDebtIdSendPost()


### Example

```typescript
import {
    DebtApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DebtApi(configuration);

let eventId: string; //Id ивента (события) (default to undefined)
let debtId: string; //Id пользователя - должника (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdDebtsDebtIdSendPost(
    eventId,
    debtId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] | Id ивента (события) | defaults to undefined|
| **debtId** | [**string**] | Id пользователя - должника | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdDebtsGet**
> GetDebtEntryResponse apiV1EventsEventIdDebtsGet()


### Example

```typescript
import {
    DebtApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DebtApi(configuration);

let eventId: string; //Id ивента (события) (default to undefined)
let offset: number; //Кол-во элементов которые необходимо пропустить (optional) (default to 0)
let limit: number; //Кол-во элементов на 1 странице (optional) (default to 10)

const { status, data } = await apiInstance.apiV1EventsEventIdDebtsGet(
    eventId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] | Id ивента (события) | defaults to undefined|
| **offset** | [**number**] | Кол-во элементов которые необходимо пропустить | (optional) defaults to 0|
| **limit** | [**number**] | Кол-во элементов на 1 странице | (optional) defaults to 10|


### Return type

**GetDebtEntryResponse**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

