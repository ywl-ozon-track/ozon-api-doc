---
title: "ExternalCampaign SetSearchPromoBidsV2"
description: "Установить ставку на товар"
---

# ExternalCampaign SetSearchPromoBidsV2

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/v2/bids/set`

## Endpoint Overview

- **Category**：🔍 Search Promotion (CPO)
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set`

::: details View Official Description (Russian)
> 
> Если товар ещё не добавлен в продвижение, система добавит его автоматически.
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
  "$ref": "#/components/schemas/extcampaignSetSearchPromoBidsRequestV2"
}
```
:::

## Responses

### HTTP 200 - Ставка установлена

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignSetSearchPromoBidsResponseV2extcampaignSetSearchPromoBidsResponseV2"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set", {
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
