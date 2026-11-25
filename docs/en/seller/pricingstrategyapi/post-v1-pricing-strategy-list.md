---
title: "pricing list"
description: "Список стратегий"
---

# pricing list

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/list`

## Endpoint Overview

- **Category**：🎯 Pricing Strategies & Buybox
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/pricing-strategy/list`

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "page": 1,
  "limit": 20
}
```

## Responses

### HTTP 200 - Список стратегий

```json
{
  "strategies": [
    {
      "id": "2fb3e6a3-3db5-4bb4-8430-b2de39fc3265",
      "name": "стратегия_от_CID7",
      "type": "COMP_PRICE",
      "update_type": "strategyEnabled",
      "updated_at": "2024-05-02 14:47:02.594774+00",
      "products_count": 1,
      "competitors_count": 1,
      "enabled": true
    }
  ],
  "total": 5
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/list", {
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
