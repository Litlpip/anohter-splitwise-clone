# ApiError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorCode** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**messageTemplate** | **string** |  | [optional] [default to undefined]
**args** | **Array&lt;any&gt;** |  | [optional] [default to undefined]
**httpStatus** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ApiError } from './api';

const instance: ApiError = {
    errorCode,
    message,
    messageTemplate,
    args,
    httpStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
