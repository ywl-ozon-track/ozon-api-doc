---
title: "ListCampaignObjects"
description: "Список продвигаемых объектов в кампании"
---

# ListCampaignObjects

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/objects`

## Endpoint Overview

- **Category**：📢 Campaigns & Objects
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects`

::: details View Official Description (Russian)
> 
> Метод для получения списка продвигаемых объектов в кампаниях «Оплата за клик», «Баннеры» и «Видеобаннеры».
> 
> Чтобы получить товары в кампании «Оплата за заказ», используйте [POST /campaign/search_promo/v2/products](#operation/ExternalCampaign_ListSearchPromoProductsV2).
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | Идентификатор кампании. |

## Responses

### HTTP 200 - Список рекламируемых объектов в кампании

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignObjectsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects", {
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
