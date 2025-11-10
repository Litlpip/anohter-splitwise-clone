# AuthorizationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1AuthAccountGet**](#apiv1authaccountget) | **GET** /api/v1/auth/account | Получение данных о пользователе|
|[**apiV1AuthAvatarDelete**](#apiv1authavatardelete) | **DELETE** /api/v1/auth/avatar | Удаление аватара пользователя|
|[**apiV1AuthAvatarPost**](#apiv1authavatarpost) | **POST** /api/v1/auth/avatar | Изменение аватара пользователя|
|[**apiV1AuthEditPatch**](#apiv1autheditpatch) | **PATCH** /api/v1/auth/edit | Изменение данных пользователя|
|[**apiV1AuthEmailConfirmGet**](#apiv1authemailconfirmget) | **GET** /api/v1/auth/email-confirm | Подтверждение почты|
|[**apiV1AuthLoginPost**](#apiv1authloginpost) | **POST** /api/v1/auth/login | Авторизация|
|[**apiV1AuthRegisterPost**](#apiv1authregisterpost) | **POST** /api/v1/auth/register | Регистрация пользователя|
|[**apiV1AuthUsersGet**](#apiv1authusersget) | **GET** /api/v1/auth/users | Список зарегистрированных пользователей|

# **apiV1AuthAccountGet**
> GetUserEntry apiV1AuthAccountGet()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

const { status, data } = await apiInstance.apiV1AuthAccountGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUserEntry**

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

# **apiV1AuthAvatarDelete**
> apiV1AuthAvatarDelete()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

const { status, data } = await apiInstance.apiV1AuthAvatarDelete();
```

### Parameters
This endpoint does not have any parameters.


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
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthAvatarPost**
> apiV1AuthAvatarPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1AuthAvatarPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthEditPatch**
> GetUserEntry apiV1AuthEditPatch()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration,
    UpdateModel
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let updateModel: UpdateModel; //Модель для обновления информации пользователя (optional)

const { status, data } = await apiInstance.apiV1AuthEditPatch(
    updateModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateModel** | **UpdateModel**| Модель для обновления информации пользователя | |


### Return type

**GetUserEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthEmailConfirmGet**
> apiV1AuthEmailConfirmGet()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let login: string; //Логин пользователя (optional) (default to undefined)
let code: string; //Код, отправленный на почту (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1AuthEmailConfirmGet(
    login,
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **login** | [**string**] | Логин пользователя | (optional) defaults to undefined|
| **code** | [**string**] | Код, отправленный на почту | (optional) defaults to undefined|


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
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthLoginPost**
> GetUserEntry apiV1AuthLoginPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration,
    LoginModel
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let loginModel: LoginModel; //Модель для логина (optional)

const { status, data } = await apiInstance.apiV1AuthLoginPost(
    loginModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginModel** | **LoginModel**| Модель для логина | |


### Return type

**GetUserEntry**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**401** | Unauthorized |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthRegisterPost**
> string apiV1AuthRegisterPost()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration,
    RegisterModel
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let registerModel: RegisterModel; //Модель для регистрации (optional)

const { status, data } = await apiInstance.apiV1AuthRegisterPost(
    registerModel
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerModel** | **RegisterModel**| Модель для регистрации | |


### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1AuthUsersGet**
> Array<UserShortEntry> apiV1AuthUsersGet()


### Example

```typescript
import {
    AuthorizationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthorizationApi(configuration);

let userName: string; //Логин пользователя. Опциональное поле. (optional) (default to undefined)

const { status, data } = await apiInstance.apiV1AuthUsersGet(
    userName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userName** | [**string**] | Логин пользователя. Опциональное поле. | (optional) defaults to undefined|


### Return type

**Array<UserShortEntry>**

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

