---
title: "AnalyticsAPI AnalyticsStocks"
description: "Получить аналитику по остаткам"
---

# AnalyticsAPI AnalyticsStocks

<Badge type="tip" text="POST" /> `/v1/analytics/stocks`

## Endpoint Overview

- **Category**：📈 Analytics & Data Reports
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/analytics/stocks`

::: details View Official Description (Russian)
> Используйте метод, чтобы получить аналитику по остаткам товаров на складах в реальном времени. Метод соответствует разделу [**FBO → Управление остатками**](https://seller.ozon.ru/app/fbo-stocks/stocks-management/) в личном кабинете. 
> 
> В запросе используйте только одно из полей: `cluster_ids` или `macrolocal_cluster_ids`, иначе вернётся ошибка.
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
  "$ref": "#/components/schemas/v1AnalyticsStocksRequest"
}
```
:::

## Responses

### HTTP 200 - Аналитика по остаткам на складах

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1AnalyticsStocksResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/stocks", {
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
