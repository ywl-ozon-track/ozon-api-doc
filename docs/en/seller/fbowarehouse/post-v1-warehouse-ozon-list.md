---
title: "WarehouseOZONList"
description: "Получить список складов Ozon"
---

# WarehouseOZONList

<Badge type="tip" text="POST" /> `/v1/warehouse/ozon/list`

## Endpoint Overview

- **Category**：📌 FBOWarehouse
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/ozon/list`

::: details View Official Description (Russian)
> Возвращает список складов Ozon, которые работают по схемам FBO и FBO Fresh, и возвратных складов.
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
  "$ref": "#/components/schemas/v1WarehouseOZONListRequest"
}
```
:::

## Responses

### HTTP 200 - Список складов Ozon

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1WarehouseOZONListResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/ozon/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/ozon/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/ozon/list", {
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
