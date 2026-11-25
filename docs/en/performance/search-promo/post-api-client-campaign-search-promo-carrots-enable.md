---
title: "ExternalCampaign BatchEnableCarrots4"
description: "Включить продвижение товаров в акции «Морковск»"
---

# ExternalCampaign BatchEnableCarrots4

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/carrots/enable`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/enable`

::: details View Official Description (Russian)
> Добавляет товары в акцию «Морковск».<br>
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

### HTTP 200 - Продвижение включено

```json
{
  "skuToInfo": {
    "property1": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": false
    },
    "property2": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": true
    }
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/enable" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/enable"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/enable", {
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
