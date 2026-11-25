---
title: "AnalyticsAPI StocksTurnover"
description: "Оборачиваемость товара"
---

# AnalyticsAPI StocksTurnover

<Badge type="tip" text="POST" /> `/v1/analytics/turnover/stocks`

## Endpoint Overview

- **Category**：📈 Analytics & Data Reports
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/analytics/turnover/stocks`

::: details View Official Description (Russian)
> Используйте метод, чтобы узнать оборачиваемость товара и количество дней, на которое хватит текущего остатка. 
> Метод соответствует разделу [**FBO -> Управление остатками**](https://seller.ozon.ru/app/supply/stocks-management) в личном кабинете.
> Вы можете делать не больше 1 запроса в минуту по одному кабинету `Client-Id`.
>     
> Если вы запрашиваете список товаров по `sku`, параметры `limit` и `offset` необязательны.
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
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksRequest"
}
```
:::

## Responses

### HTTP 200 - Информация об оборачиваемости

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/turnover/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/turnover/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/turnover/stocks", {
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
