---
title: "ExternalCampaign BatchDisableProducts"
description: "Отключить продвижение товара в оплате за заказ"
---

# ExternalCampaign BatchDisableProducts

<Badge type="tip" text="POST" /> `/api/client/search_promo/product/disable`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/search_promo/product/disable`

::: details View Official Description (Russian)
> 
> В одном запросе можно передать максимум 1000 товаров.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignBatchDisableProductsRequest"
}
```
:::

## Responses

### HTTP 200 - Продвижение товара отключено

::: details View Schema Definition
```json
{
  "type": "object"
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
curl -X POST "https://api-performance.ozon.ru/api/client/search_promo/product/disable" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/search_promo/product/disable"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/search_promo/product/disable", {
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
