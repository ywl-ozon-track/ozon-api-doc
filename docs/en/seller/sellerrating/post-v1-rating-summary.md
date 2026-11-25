---
title: "RatingAPI RatingSummaryV1"
description: "Получить информацию о текущих рейтингах продавца"
---

# RatingAPI RatingSummaryV1

<Badge type="tip" text="POST" /> `/v1/rating/summary`

## Endpoint Overview

- **Category**：📌 SellerRating
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/rating/summary`

::: details View Official Description (Russian)
> Рейтинг продавца по следующим показателям: индекс цен, доставки вовремя, процент отмен, жалобы и другие.
> Соответствует разделу **Рейтинги → Рейтинги продавца** в личном кабинете.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## Responses

### HTTP 200 - Информация о рейтингах

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1RatingSummaryV1Response"
}
```
:::

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/rating/summary" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/rating/summary"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/rating/summary", {
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
