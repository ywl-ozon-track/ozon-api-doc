---
title: "GetProductsCompetitiveBids"
description: "Конкурентные ставки для товара"
---

# GetProductsCompetitiveBids

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/products/bids/competitive`

## Endpoint Overview

- **Category**：🛒 CPC Promoted Products
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive`

::: details View Official Description (Russian)
> 
> Если товар не добавлен в кампанию, в параметре `bid` будет значение `0`.
> В одном запросе вы можете передать до 200 товаров.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | Идентификатор кампании. |
| `skus` | `query` | No | Список SKU товаров. |

## Responses

### HTTP 200 - Конкурентные ставки

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsCompetitiveBidsResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive", {
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
