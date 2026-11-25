---
title: "SetAllSkuPromoCampaignBid2"
description: "Установить ставку для продвижения в Оплате за заказ — все товары"
---

# SetAllSkuPromoCampaignBid2

<Badge type="info" text="GET" /> `/api/client/campaign/all_sku_promo/set_bid`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `bid` | `query` | No | - |

## Responses

### HTTP 200 - Ставка установлена

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid", {
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
