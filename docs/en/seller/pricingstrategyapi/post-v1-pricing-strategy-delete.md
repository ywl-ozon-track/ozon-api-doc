---
title: "pricing delete"
description: "Удалить стратегию"
---

# pricing delete

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/delete`

## Endpoint Overview

- **Category**：🎯 Pricing Strategies & Buybox
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/pricing-strategy/delete`

::: details View Official Description (Russian)
> Можно удалить любую стратегию кроме системной.
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
  "strategy_id": "b7cd30e6-5667-424d-b105-fbec30a52477"
}
```

## Responses

### HTTP 200 - Стратегия удалена

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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/delete", {
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
