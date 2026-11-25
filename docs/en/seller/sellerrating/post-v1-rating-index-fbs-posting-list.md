---
title: "RatingAPI ListFBSRatingIndexPostingsV1"
description: "Список отправлений, которые повлияли на индекс ошибок FBS и rFBS"
---

# RatingAPI ListFBSRatingIndexPostingsV1

<Badge type="tip" text="POST" /> `/v1/rating/index/fbs/posting/list`

## Endpoint Overview

- **Category**：📌 SellerRating
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/rating/index/fbs/posting/list`

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
  "$ref": "#/components/schemas/v1ListFBSRatingIndexPostingsV1Request"
}
```
:::

## Responses

### HTTP 200 - Список отправлений

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1ListFBSRatingIndexPostingsV1Response"
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
curl -X POST "https://api-seller.ozon.ru/v1/rating/index/fbs/posting/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/rating/index/fbs/posting/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/rating/index/fbs/posting/list", {
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
