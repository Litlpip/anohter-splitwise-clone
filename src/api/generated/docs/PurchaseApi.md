# PurchaseApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1EventsEventIdPurchasesGet**](#apiv1eventseventidpurchasesget) | **GET** /api/v1/events/{eventId}/purchases | Получение списка покупок|
|[**apiV1EventsEventIdPurchasesPost**](#apiv1eventseventidpurchasespost) | **POST** /api/v1/events/{eventId}/purchases | Добавление покупки|
|[**apiV1EventsEventIdPurchasesPurchaseIdDelete**](#apiv1eventseventidpurchasespurchaseiddelete) | **DELETE** /api/v1/events/{eventId}/purchases/{purchaseId} | Удаление покупки|
|[**apiV1EventsEventIdPurchasesPurchaseIdGet**](#apiv1eventseventidpurchasespurchaseidget) | **GET** /api/v1/events/{eventId}/purchases/{purchaseId} | Получение данных о покупке по идентификатору|
|[**apiV1EventsEventIdPurchasesPurchaseIdPatch**](#apiv1eventseventidpurchasespurchaseidpatch) | **PATCH** /api/v1/events/{eventId}/purchases/{purchaseId} | Изменение данных о покупке|

# **apiV1EventsEventIdPurchasesGet**
> GetPurchaseEntryResponse apiV1EventsEventIdPurchasesGet()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let eventId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let name: string; // (optional) (default to undefined)
let costMin: number; // (optional) (default to undefined)
let costMax: number; // (optional) (default to undefined)
let purchaseTags: Array<string>; // (optional) (default to undefined)
let unitTypeId: string; // (optional) (default to undefined)
let isComplete: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchasesGet(
    eventId,
    offset,
    limit,
    name,
    costMin,
    costMax,
    purchaseTags,
    unitTypeId,
    isComplete
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **costMin** | [**number**] |  | (optional) defaults to undefined|
| **costMax** | [**number**] |  | (optional) defaults to undefined|
| **purchaseTags** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|
| **unitTypeId** | [**string**] |  | (optional) defaults to undefined|
| **isComplete** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**GetPurchaseEntryResponse**

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

# **apiV1EventsEventIdPurchasesPost**
> PurchaseShortEntry apiV1EventsEventIdPurchasesPost()


### Example

```typescript
import {
    PurchaseApi,
    Configuration,
    AddPurchaseEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let eventId: string; // (default to undefined)
let addPurchaseEntry: AddPurchaseEntry; // (optional)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchasesPost(
    eventId,
    addPurchaseEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addPurchaseEntry** | **AddPurchaseEntry**|  | |
| **eventId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseShortEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdPurchasesPurchaseIdDelete**
> apiV1EventsEventIdPurchasesPurchaseIdDelete()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let eventId: string; // (default to undefined)
let purchaseId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchasesPurchaseIdDelete(
    eventId,
    purchaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseId** | [**string**] |  | defaults to undefined|


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
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdPurchasesPurchaseIdGet**
> GetPurchaseEntry apiV1EventsEventIdPurchasesPurchaseIdGet()


### Example

```typescript
import {
    PurchaseApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let eventId: string; // (default to undefined)
let purchaseId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchasesPurchaseIdGet(
    eventId,
    purchaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseId** | [**string**] |  | defaults to undefined|


### Return type

**GetPurchaseEntry**

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

# **apiV1EventsEventIdPurchasesPurchaseIdPatch**
> PurchaseShortEntry apiV1EventsEventIdPurchasesPurchaseIdPatch()


### Example

```typescript
import {
    PurchaseApi,
    Configuration,
    UpdatePurchaseEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseApi(configuration);

let eventId: string; // (default to undefined)
let purchaseId: string; // (default to undefined)
let updatePurchaseEntry: UpdatePurchaseEntry; // (optional)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchasesPurchaseIdPatch(
    eventId,
    purchaseId,
    updatePurchaseEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePurchaseEntry** | **UpdatePurchaseEntry**|  | |
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseShortEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

