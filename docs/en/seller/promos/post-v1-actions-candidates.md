---
title: "PromosCandidates"
description: "Список доступных для акции товаров"
---

# PromosCandidates

<Badge type="tip" text="POST" /> `/v1/actions/candidates`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/actions/candidates`

::: details View Official Description (Russian)
> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsCandidates">/v2/actions/candidates</a>.
> </aside>
> 
> Метод для получения списка товаров, которые могут участвовать в акции, по её идентификатору.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "action_id": 63337,
  "limit": 10,
  "last_id": "bnVсbA==123123das"
}
```

## Responses

### HTTP 200 - Список товаров

```json
{
  "result": {
    "products": [
      {
        "id": 226,
        "price": 250,
        "action_price": 10,
        "alert_max_action_price_failed": true,
        "alert_max_action_price": 31,
        "max_action_price": 175,
        "add_mode": "NOT_SET",
        "stock": 2,
        "min_stock": 1,
        "current_boost": 3,
        "price_min_elastic": 150,
        "price_max_elastic": 300,
        "min_boost": 12,
        "max_boost": 15
      }
    ],
    "total": 2,
    "last_id": "bnVсbA=="
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/actions/candidates" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/candidates"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/candidates", {
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
