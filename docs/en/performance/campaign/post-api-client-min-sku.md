---
title: "ExternalCampaign BidBySKU"
description: "Минимальная ставка для товаров по SKU"
---

# ExternalCampaign BidBySKU

<Badge type="tip" text="POST" /> `/api/client/min/sku`

## Endpoint Overview

- **Category**：📢 Campaigns & Objects
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/min/sku`

::: details View Official Description (Russian)
> Используйте метод, чтобы узнать минимальную ставку для одного или нескольких товаров по SKU.
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Размер минимальной ставки

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignBidBySKUResponse"
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
curl -X POST "https://api-performance.ozon.ru/api/client/min/sku" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/min/sku"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/min/sku", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
