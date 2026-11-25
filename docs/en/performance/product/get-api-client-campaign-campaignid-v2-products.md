---
title: "GetProductsV2"
description: "Список товаров кампании"
---

# GetProductsV2

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/v2/products`

## Endpoint Overview

- **Category**：🛒 CPC Promoted Products
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | Идентификатор кампании. |
| `page` | `query` | No | Номер страницы. |
| `pageSize` | `query` | No | Размер страницы. |

## Responses

### HTTP 200 - Список товаров кампании

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsResponseV2"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
