---
title: "ExternalCampaign BatchDisableCarrots4"
description: "Отключить продвижение товаров в акции «Морковск»"
---

# ExternalCampaign BatchDisableCarrots4

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/carrots/disable`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable`

::: details View Official Description (Russian)
> Удаляет товары из акции «Морковск».<br>
> [Подробнее об акции](https://seller-edu.ozon.ru/how-to-sell-effectively/advertising-of-goods/morkovsk)
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Продвижение отключено

```json
{
  "skuToInfo": {
    "property1": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": true
    },
    "property2": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": false
    }
  }
}
```

### HTTP default - An unexpected error response.

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable", {
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
