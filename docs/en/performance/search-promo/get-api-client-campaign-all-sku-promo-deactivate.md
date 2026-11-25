---
title: "DeactivateAllSkuPromoCampaign"
description: "Выключить продвижение в оплате за заказ — все товары"
---

# DeactivateAllSkuPromoCampaign

<Badge type="info" text="GET" /> `/api/client/campaign/all_sku_promo/deactivate`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/deactivate`

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Responses

### HTTP 200 - Продвижение выключено

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/deactivate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/deactivate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/deactivate", {
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
