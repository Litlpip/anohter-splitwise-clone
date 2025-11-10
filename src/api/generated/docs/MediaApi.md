# MediaApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1EventsEventIdMediaFormFilePost**](#apiv1eventseventidmediaformfilepost) | **POST** /api/v1/events/{eventId}/media/form-file | Добавление файла к ивенту|
|[**apiV1EventsEventIdMediaMediaIdDelete**](#apiv1eventseventidmediamediaiddelete) | **DELETE** /api/v1/events/{eventId}/media/{mediaId} | Удаление файла|
|[**apiV1EventsEventIdMediaMediaIdFormFileGet**](#apiv1eventseventidmediamediaidformfileget) | **GET** /api/v1/events/{eventId}/media/{mediaId}/form-file | Получение файла|
|[**apiV1EventsEventIdMediaMediaIdMetadataGet**](#apiv1eventseventidmediamediaidmetadataget) | **GET** /api/v1/events/{eventId}/media/{mediaId}/metadata | Получение метаданных файла|
|[**apiV1EventsEventIdMediaMetadataGet**](#apiv1eventseventidmediametadataget) | **GET** /api/v1/events/{eventId}/media/metadata | Получение списка метаданных файлов|

# **apiV1EventsEventIdMediaFormFilePost**
> MediaShortEntry apiV1EventsEventIdMediaFormFilePost()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let eventId: string; // (default to undefined)
let mediaType: MediaType; // (default to undefined)
let file: File; // (optional) (default to undefined)
let link: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdMediaFormFilePost(
    eventId,
    mediaType,
    file,
    link
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **mediaType** | **MediaType** |  | defaults to undefined|
| **file** | [**File**] |  | (optional) defaults to undefined|
| **link** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MediaShortEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**415** | Client Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdMediaMediaIdDelete**
> apiV1EventsEventIdMediaMediaIdDelete()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let eventId: string; // (default to undefined)
let mediaId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdMediaMediaIdDelete(
    eventId,
    mediaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **mediaId** | [**string**] |  | defaults to undefined|


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

# **apiV1EventsEventIdMediaMediaIdFormFileGet**
> apiV1EventsEventIdMediaMediaIdFormFileGet()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let eventId: string; // (default to undefined)
let mediaId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdMediaMediaIdFormFileGet(
    eventId,
    mediaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **mediaId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: multipart/form-data


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdMediaMediaIdMetadataGet**
> GetMediaEntry apiV1EventsEventIdMediaMediaIdMetadataGet()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let eventId: string; // (default to undefined)
let mediaId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdMediaMediaIdMetadataGet(
    eventId,
    mediaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **mediaId** | [**string**] |  | defaults to undefined|


### Return type

**GetMediaEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1EventsEventIdMediaMetadataGet**
> Array<MediaShortEntry> apiV1EventsEventIdMediaMetadataGet()


### Example

```typescript
import {
    MediaApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MediaApi(configuration);

let eventId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let createdDateStart: string; // (optional) (default to undefined)
let createdDateEnd: string; // (optional) (default to undefined)
let mediaType: MediaType; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdMediaMetadataGet(
    eventId,
    offset,
    limit,
    createdDateStart,
    createdDateEnd,
    mediaType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **createdDateStart** | [**string**] |  | (optional) defaults to undefined|
| **createdDateEnd** | [**string**] |  | (optional) defaults to undefined|
| **mediaType** | **MediaType** |  | (optional) defaults to undefined|


### Return type

**Array<MediaShortEntry>**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**404** | Not Found |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

