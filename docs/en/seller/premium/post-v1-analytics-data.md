---
title: "AnalyticsAPI AnalyticsGetData"
description: "Данные аналитики"
---

# AnalyticsAPI AnalyticsGetData

<Badge type="tip" text="POST" /> `/v1/analytics/data`

## Endpoint Overview

- **Category**：💎 Premium Features & Chat
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/analytics/data`

::: details View Official Description (Russian)
> Уĸажите период и метриĸи, ĸоторые нужно посчитать. В ответе будет аналитиĸа, сгруппированная по параметру `dimensions`.
> 
> Для продавцов без подписки [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus):
> - доступны данные за последние 3 месяца;
> - есть ограничения по способам группировки данных и метрикам;
> - есть лимит на 50 запросов в сутки.
> 
> Для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) ограничений нет.
> 
> Метод можно использовать не больше 1 раза в минуту.
> Соответствует разделу **Аналитика → Продажи моих товаров** в личном кабинете.
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
  "date_from": "2020-09-01",
  "date_to": "2021-10-15",
  "metrics": [
    "hits_view_search"
  ],
  "dimension": [
    "sku",
    "day"
  ],
  "filters": [],
  "sort": [
    {
      "key": "hits_view_search",
      "order": "DESC"
    }
  ],
  "limit": 1000,
  "offset": 0
}
```

## Responses

### HTTP 200 - Данные аналитики

```json
{
  "result": {
    "data": [],
    "totals": [
      0
    ]
  },
  "timestamp": "2021-11-25 15:19:21"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/data" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/data"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/data", {
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
