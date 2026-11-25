---
title: "RFBSReturnsAPI ReturnsRfbsGetV2"
description: "Информация о заявке на возврат"
---

# RFBSReturnsAPI ReturnsRfbsGetV2

<Badge type="tip" text="POST" /> `/v2/returns/rfbs/get`

## Endpoint Overview

- **Category**：📌 RFBSReturnsAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/returns/rfbs/get`

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
  "$ref": "#/components/schemas/v2ReturnsRfbsGetRequest"
}
```
:::

## Responses

### HTTP 200 - Информация о заявке

```json
{
  "returns": {
    "available_actions": [
      {
        "action": {
          "id": 0,
          "name": "string"
        }
      }
    ],
    "client_name": "string",
    "client_photo": [
      "string"
    ],
    "client_return_method_type": {
      "id": 0,
      "name": "string"
    },
    "comment": "string",
    "created_at": "2025-09-04T13:49:20.340Z",
    "order_number": "string",
    "posting_number": "string",
    "product": {
      "currency_code": "string",
      "name": "string",
      "offer_id": "string",
      "price": 0,
      "sku": 0
    },
    "rejection_comment": "string",
    "rejection_reason": [
      {
        "hint": "string",
        "id": 0,
        "is_comment_required": true,
        "name": "string"
      }
    ],
    "return_method_description": "string",
    "return_number": "string",
    "return_reason": {
      "id": 0,
      "is_defect": true,
      "name": "string"
    },
    "ru_post_tracking_number": "string",
    "state": {
      "state": "string",
      "state_name": "string"
    },
    "warehouse_id": 0
  }
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/returns/rfbs/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/returns/rfbs/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/returns/rfbs/get", {
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
