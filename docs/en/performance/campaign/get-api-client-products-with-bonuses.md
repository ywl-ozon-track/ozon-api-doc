---
title: "ExternalCampaign ListProductsWithBonuses2"
description: "Список товаров с бонусами"
---

# ExternalCampaign ListProductsWithBonuses2

<Badge type="info" text="GET" /> `/api/client/products_with_bonuses`

## Endpoint Overview

- **Category**：📢 Campaigns & Objects
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/products_with_bonuses`

::: details View Official Description (Russian)
> Возвращает список SKU товаров, на которые начислены бонусы. 
> 
> За клик на товар в первую очередь тратятся начисленные на него бонусы. Если бонусы кончились, тратится общий бюджет кампании.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Responses

### HTTP 200 - Список товаров с бонусами

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignListProductsWithBonusesResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/products_with_bonuses" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/products_with_bonuses"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/products_with_bonuses", {
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
