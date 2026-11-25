---
title: "CreateProductCampaignCPCV2"
description: "Создать кампанию с оплатой за клики"
---

# CreateProductCampaignCPCV2

<Badge type="tip" text="POST" /> `/api/client/campaign/cpc/v2/product`

## Endpoint Overview

- **Category**：🖱️ Cost-Per-Click (CPC) Ads
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product`

::: details View Official Description (Russian)
> Метод для создания товарной рекламной кампании с оплатой за клики.
> 
> При успешном выполнении запроса в поле `campaignId` ответа будет идентификатор созданной кампании.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Кампания создана

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product", {
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
