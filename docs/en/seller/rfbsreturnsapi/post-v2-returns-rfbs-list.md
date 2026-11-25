---
title: "RFBSReturnsAPI ReturnsRfbsListV2"
description: "Список заявок на возврат"
---

# RFBSReturnsAPI ReturnsRfbsListV2

<Badge type="tip" text="POST" /> `/v2/returns/rfbs/list`

## Endpoint Overview

- **Category**：📌 RFBSReturnsAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/returns/rfbs/list`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "filter": {
    "offer_id": "test-offer-123456",
    "posting_number": "789456123-0002-3",
    "group_state": [
      "New",
      "Approved"
    ],
    "created_at": {
      "from": "2026-02-01T00:00:00Z",
      "to": "2026-03-01T23:59:59Z"
    }
  },
  "last_id": 0,
  "limit": 1000
}
```

## Responses

### HTTP 200 - Список заявок на возврат

```json
{
  "returns": [
    {
      "return_id": 8000123456,
      "return_number": "RET-2026-00123",
      "posting_number": "789456123-0002-3",
      "order_number": "123456789",
      "created_at": "2026-02-15T10:30:00Z",
      "product": {
        "sku": 1000123456,
        "offer_id": "test-offer-123456",
        "name": "Тестовый товар 1",
        "price": 2999,
        "currency_code": "RUB"
      },
      "state": {
        "group_state": "New",
        "state": "ON_APPROVAL",
        "state_name": "На проверке"
      }
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v2/returns/rfbs/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/returns/rfbs/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/returns/rfbs/list", {
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
