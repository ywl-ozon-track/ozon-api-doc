---
title: "FbpAPI FbpOrderDropOffCancel"
description: "Отменить поставку drop-off"
---

# FbpAPI FbpOrderDropOffCancel

<Badge type="tip" text="POST" /> `/v1/fbp/order/drop-off/cancel`

## Endpoint Overview

- **Category**：🏬 FBP Drop-off Supplies
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/fbp/order/drop-off/cancel`

::: details View Official Description (Russian)
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1FbpOrderDropOffCancelRequest"
}
```
:::

## Responses

### HTTP 200 - Поставка отменена

```json
{
  "error": {
    "order_errors": [
      "ERROR_TYPE_UNSPECIFIED"
    ]
  },
  "is_error": true,
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
curl -X POST "https://api-seller.ozon.ru/v1/fbp/order/drop-off/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/order/drop-off/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/order/drop-off/cancel", {
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
