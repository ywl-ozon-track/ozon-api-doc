---
title: "pricing update"
description: "Обновить стратегию"
---

# pricing update

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/update`

## Endpoint Overview

- **Category**：🎯 Pricing Strategies & Buybox
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/pricing-strategy/update`

::: details View Official Description (Russian)
> Можно обновить все стратегии кроме системной.
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
  "strategy_id": "a3de1826-9c54-40f1-bb6d-1a9e2638b058",
  "strategy_name": "Новая стратегия",
  "competitors": [
    {
      "competitor_id": 1008426,
      "coefficient": 1
    },
    {
      "competitor_id": 204,
      "coefficient": 1
    },
    {
      "competitor_id": 91,
      "coefficient": 1
    },
    {
      "competitor_id": 48,
      "coefficient": 1
    },
    {
      "competitor_id": 45,
      "coefficient": 1
    }
  ]
}
```

## Responses

### HTTP 200 - Стратегия обновлена

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1Empty"
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/update", {
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
