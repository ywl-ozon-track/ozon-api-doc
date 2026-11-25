---
title: "WarehouseAPI DeliveryMethodList"
description: "Список методов доставки склада"
---

# WarehouseAPI DeliveryMethodList

<Badge type="tip" text="POST" /> `/v1/delivery-method/list`

## Endpoint Overview

- **Category**：🏭 Warehouses (FBS & rFBS)
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/delivery-method/list`

::: details View Official Description (Russian)
> <aside class="warning">
>   Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на <a href="#operation/WarehouseAPI_DeliveryMethodListV2">/v2/delivery-method/list</a>.
> </aside>
> 
:::

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
    "provider_id": 424,
    "status": "ACTIVE",
    "warehouse_id": 15588127982000
  },
  "limit": 100,
  "offset": 0
}
```

## Responses

### HTTP 200 - Список методов склада

```json
{
  "result": [
    {
      "id": 15588127982000,
      "company_id": 1,
      "name": "Ozon Логистика курьеру, Есипово",
      "status": "ACTIVE",
      "cutoff": "13:00",
      "provider_id": 24,
      "template_id": 0,
      "warehouse_id": 15588127982000,
      "created_at": "2019-04-04T15:22:31.048202Z",
      "updated_at": "2021-08-15T10:21:44.854209Z",
      "sla_cut_in": 1440
    }
  ],
  "has_next": false
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery-method/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery-method/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery-method/list", {
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
