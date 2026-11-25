---
title: "DeleteProducts"
description: "Удалить товары из кампании"
---

# DeleteProducts

<Badge type="tip" text="POST" /> `/api/client/campaign/{campaignId}/products/delete`

## Endpoint Overview

- **Category**：🛒 CPC Promoted Products
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | - |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignDeleteProductsRequest"
}
```
:::

## Responses

### HTTP 200 - Товар удалён из кампании

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete", {
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
