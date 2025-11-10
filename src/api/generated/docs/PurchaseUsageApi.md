# PurchaseUsageApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1EventsEventIdPurchaseUsagesGet**](#apiv1eventseventidpurchaseusagesget) | **GET** /api/v1/events/{eventId}/purchase-usages | Получение списка того, какие участники какие продукты используют|
|[**apiV1EventsEventIdPurchaseUsagesPost**](#apiv1eventseventidpurchaseusagespost) | **POST** /api/v1/events/{eventId}/purchase-usages | Добавление использования участником продукта|
|[**apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdDelete**](#apiv1eventseventidpurchaseusagespurchaseusageiddelete) | **DELETE** /api/v1/events/{eventId}/purchase-usages/{purchaseUsageId} | Удаление использования участником продукта|
|[**apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdGet**](#apiv1eventseventidpurchaseusagespurchaseusageidget) | **GET** /api/v1/events/{eventId}/purchase-usages/{purchaseUsageId} | Получение данных об использовании участником продукта по идентификатору|
|[**apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdPatch**](#apiv1eventseventidpurchaseusagespurchaseusageidpatch) | **PATCH** /api/v1/events/{eventId}/purchase-usages/{purchaseUsageId} | Узменение использования участником продукта (а надо ли??)|

# **apiV1EventsEventIdPurchaseUsagesGet**
> PurchaseUsageShortEntryResponse apiV1EventsEventIdPurchaseUsagesGet()


### Example

```typescript
import {
    PurchaseUsageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseUsageApi(configuration);

let eventId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let participantId: string; // (optional) (default to undefined)
let purchaseId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchaseUsagesGet(
    eventId,
    offset,
    limit,
    participantId,
    purchaseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **participantId** | [**string**] |  | (optional) defaults to undefined|
| **purchaseId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PurchaseUsageShortEntryResponse**

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

# **apiV1EventsEventIdPurchaseUsagesPost**
> PurchaseUsageShortEntry apiV1EventsEventIdPurchaseUsagesPost()


### Example

```typescript
import {
    PurchaseUsageApi,
    Configuration,
    UpsertPurchaseUsageEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseUsageApi(configuration);

let eventId: string; // (default to undefined)
let upsertPurchaseUsageEntry: UpsertPurchaseUsageEntry; // (optional)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchaseUsagesPost(
    eventId,
    upsertPurchaseUsageEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertPurchaseUsageEntry** | **UpsertPurchaseUsageEntry**|  | |
| **eventId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseUsageShortEntry**

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

# **apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdDelete**
> apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdDelete()


### Example

```typescript
import {
    PurchaseUsageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseUsageApi(configuration);

let eventId: string; // (default to undefined)
let purchaseUsageId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdDelete(
    eventId,
    purchaseUsageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseUsageId** | [**string**] |  | defaults to undefined|


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

# **apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdGet**
> GetPurchaseUsageEntry apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdGet()


### Example

```typescript
import {
    PurchaseUsageApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseUsageApi(configuration);

let eventId: string; // (default to undefined)
let purchaseUsageId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdGet(
    eventId,
    purchaseUsageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseUsageId** | [**string**] |  | defaults to undefined|


### Return type

**GetPurchaseUsageEntry**

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

# **apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdPatch**
> PurchaseUsageShortEntry apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdPatch()


### Example

```typescript
import {
    PurchaseUsageApi,
    Configuration,
    UpsertPurchaseUsageEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new PurchaseUsageApi(configuration);

let eventId: string; // (default to undefined)
let purchaseUsageId: string; // (default to undefined)
let upsertPurchaseUsageEntry: UpsertPurchaseUsageEntry; // (optional)

const { status, data } = await apiInstance.apiV1EventsEventIdPurchaseUsagesPurchaseUsageIdPatch(
    eventId,
    purchaseUsageId,
    upsertPurchaseUsageEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertPurchaseUsageEntry** | **UpsertPurchaseUsageEntry**|  | |
| **eventId** | [**string**] |  | defaults to undefined|
| **purchaseUsageId** | [**string**] |  | defaults to undefined|


### Return type

**PurchaseUsageShortEntry**

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

