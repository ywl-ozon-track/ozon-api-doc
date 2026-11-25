---
title: "WarehouseFbsPickUpHistoryList"
description: "Получить историю отгрузок курьерам"
---

# WarehouseFbsPickUpHistoryList

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/pickup/history/list`

## Endpoint Overview

- **Category**：📌 FBSWarehouseSetup
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/history/list`

::: details View Official Description (Russian)
> [Подробнее об отгрузках курьеру в Базе знаний продавца](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)
> 
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
  "$ref": "#/components/schemas/v1WarehouseFbsPickUpHistoryListRequest"
}
```
:::

## Responses

### HTTP 200 - История отгрузок

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1WarehouseFbsPickUpHistoryListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/history/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/history/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/history/list", {
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
