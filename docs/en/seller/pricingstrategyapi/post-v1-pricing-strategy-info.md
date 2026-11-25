---
title: "pricing info"
description: "Информация о стратегии"
---

# pricing info

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/info`

## Endpoint Overview

- **Category**：🎯 Pricing Strategies & Buybox
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/pricing-strategy/info`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "strategy_id": "2fb3e6a3-3db5-4bb4-8430-b2de39fc3265"
}
```

## Responses

### HTTP 200 - Информация о стратегии

```json
{
  "result": {
    "strategy_name": "стратегия_от_CID7",
    "enabled": true,
    "update_type": "strategyItemsListChanged",
    "type": "COMP_PRICE",
    "competitors": [
      {
        "competitor_id": 204,
        "coefficient": 1
      },
      {
        "competitor_id": 1008426,
        "coefficient": 1
      }
    ]
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/info", {
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
