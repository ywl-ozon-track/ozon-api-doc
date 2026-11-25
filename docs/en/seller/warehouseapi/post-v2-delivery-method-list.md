---
title: "WarehouseAPI DeliveryMethodListV2"
description: "Список методов доставки realFBS-склада"
---

# WarehouseAPI DeliveryMethodListV2

<Badge type="tip" text="POST" /> `/v2/delivery-method/list`

## Endpoint Overview

- **Category**：🏭 Warehouses (FBS & rFBS)
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/delivery-method/list`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "cursor": "string",
  "filter": {
    "delivery_method_ids": [
      "string"
    ],
    "provider_ids": [
      "string"
    ],
    "status": [
      "NEW"
    ],
    "warehouse_ids": [
      "string"
    ]
  },
  "limit": 1,
  "sort_dir": "ASC"
}
```

## Responses

### HTTP 200 - Список методов склада

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v2DeliveryMethodListV2Response"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v2/delivery-method/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/delivery-method/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/delivery-method/list", {
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
