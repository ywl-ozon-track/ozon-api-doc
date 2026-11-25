---
title: "AnalyticsAPI AnalyticsProductQueriesDetails"
description: "Получить детализацию запросов по товару"
---

# AnalyticsAPI AnalyticsProductQueriesDetails

<Badge type="tip" text="POST" /> `/v1/analytics/product-queries/details`

## Endpoint Overview

- **Category**：💎 Premium Features & Chat
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/analytics/product-queries/details`

::: details View Official Description (Russian)
> Используйте метод, чтобы получить данные по запросам на конкретный товар. Полная аналитика доступна с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Без подписки вы можете посмотреть часть показателей. Метод аналогичен просмотру данных по товару на вкладке **Товары в поиске → Запросы моего товара** в личном кабинете.
> 
> Аналитику по запросам можно проверить за определённые даты. Для этого укажите интервал в полях `date_from` и `date_to`. Данные за последний месяц доступны в любом интервале, кроме текущей даты — расчёт происходит в течение 1–2 дней. Аналитика за даты раньше месяца назад доступна только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) и только по неделям — в запросе укажите параметр `date_from`.
> 
> [Подробнее о работе с запросами товара в Базе знаний продавца](https://seller-edu.ozon.ru/analytics-and-metrics/graphs/analitika-po-zaprosu)
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
  "date_from": "2019-08-24T14:15:22Z",
  "date_to": "2019-08-24T14:15:22Z",
  "limit_by_sku": 0,
  "page": 0,
  "page_size": 1000,
  "skus": [
    "string"
  ],
  "sort_by": "BY_SEARCHES",
  "sort_dir": "DESCENDING"
}
```

## Responses

### HTTP 200 - Информация о запросах по конкретному товару

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1AnalyticsProductQueriesDetailsResponse"
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

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/analytics/product-queries/details" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/product-queries/details"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/product-queries/details", {
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
