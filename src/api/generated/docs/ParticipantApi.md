# ParticipantApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1EventsEventIdParticipantsGet**](#apiv1eventseventidparticipantsget) | **GET** /api/v1/events/{eventId}/participants | Получение списка участников ивента|
|[**apiV1EventsEventIdParticipantsParticipantIdDelete**](#apiv1eventseventidparticipantsparticipantiddelete) | **DELETE** /api/v1/events/{eventId}/participants/{participantId} | Удаление участника|
|[**apiV1EventsEventIdParticipantsParticipantIdGet**](#apiv1eventseventidparticipantsparticipantidget) | **GET** /api/v1/events/{eventId}/participants/{participantId} | Получение участника ивента по идентификатору|
|[**apiV1EventsEventIdParticipantsPost**](#apiv1eventseventidparticipantspost) | **POST** /api/v1/events/{eventId}/participants | Добавление участника|

# **apiV1EventsEventIdParticipantsGet**
> ParticipantShortEntryResponse apiV1EventsEventIdParticipantsGet()


### Example

```typescript
import {
    ParticipantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ParticipantApi(configuration);

let eventId: string; // (default to undefined)
let offset: number; // (optional) (default to 0)
let limit: number; // (optional) (default to 10)
let userId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdParticipantsGet(
    eventId,
    offset,
    limit,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to 0|
| **limit** | [**number**] |  | (optional) defaults to 10|
| **userId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ParticipantShortEntryResponse**

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

# **apiV1EventsEventIdParticipantsParticipantIdDelete**
> apiV1EventsEventIdParticipantsParticipantIdDelete()


### Example

```typescript
import {
    ParticipantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ParticipantApi(configuration);

let eventId: string; // (default to undefined)
let participantId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdParticipantsParticipantIdDelete(
    eventId,
    participantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **participantId** | [**string**] |  | defaults to undefined|


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

# **apiV1EventsEventIdParticipantsParticipantIdGet**
> GetParticipantEntry apiV1EventsEventIdParticipantsParticipantIdGet()


### Example

```typescript
import {
    ParticipantApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ParticipantApi(configuration);

let eventId: string; // (default to undefined)
let participantId: string; // (default to undefined)

const { status, data } = await apiInstance.apiV1EventsEventIdParticipantsParticipantIdGet(
    eventId,
    participantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventId** | [**string**] |  | defaults to undefined|
| **participantId** | [**string**] |  | defaults to undefined|


### Return type

**GetParticipantEntry**

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

# **apiV1EventsEventIdParticipantsPost**
> ParticipantShortEntry apiV1EventsEventIdParticipantsPost()


### Example

```typescript
import {
    ParticipantApi,
    Configuration,
    UpsertParticipantEntry
} from './api';

const configuration = new Configuration();
const apiInstance = new ParticipantApi(configuration);

let eventId: string; // (default to undefined)
let upsertParticipantEntry: UpsertParticipantEntry; // (optional)

const { status, data } = await apiInstance.apiV1EventsEventIdParticipantsPost(
    eventId,
    upsertParticipantEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertParticipantEntry** | **UpsertParticipantEntry**|  | |
| **eventId** | [**string**] |  | defaults to undefined|


### Return type

**ParticipantShortEntry**

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

