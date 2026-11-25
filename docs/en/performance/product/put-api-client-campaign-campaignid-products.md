---
title: "UpdateProducts"
description: "Обновить ставки товаров"
---

# UpdateProducts

<Badge type="warning" text="PUT" /> `/api/client/campaign/{campaignId}/products`

## Endpoint Overview

- **Category**：🛒 CPC Promoted Products
- **Method**：`PUT`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`

::: details View Official Description (Russian)
> 
> Этот метод перезаписывает список стоп-слов и фразы со ставками. Исходные стоп-слова и фразы со ставками удаляются.
> 
> Чтобы обновить ставки в кампании с размещением в карточке товара, передайте значения параметров `sku` и `bid`.
> 
> Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика».
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | - |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Ставки обновлены

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
curl -X PUT "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.put(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
  method: "PUT",
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
