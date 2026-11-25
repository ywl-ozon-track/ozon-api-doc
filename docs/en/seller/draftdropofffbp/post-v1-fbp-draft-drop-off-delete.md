---
title: "FbpDraftDropOffDelete"
description: "Удалить черновик для доставки в drop-off пункт"
---

# FbpDraftDropOffDelete

<Badge type="tip" text="POST" /> `/v1/fbp/draft/drop-off/delete`

## Endpoint Overview

- **Category**：📌 DraftDropOffFBP
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete`

::: details View Official Description (Russian)
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1FbpDraftDropOffDeleteRequest"
}
```
:::

## Responses

### HTTP 200 - Черновик удалён

```json
{
  "cancellation_state": {
    "cancellation_error": {
      "error_code": "NO_RESPONSE_FROM_3PF",
      "message": "string"
    },
    "cancellation_status": "CONFIRMATION"
  },
  "row_version": 0
}
```

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
