---
title: "AddProducts"
description: "Добавить товары в кампанию"
---

# AddProducts

<Badge type="tip" text="POST" /> `/api/client/campaign/{campaignId}/products`

## Endpoint Overview

- **Category**：🛒 CPC Promoted Products
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`

::: details View Official Description (Russian)
> 
> В кампанию можно добавить не более 500 товаров.
> 
> **Рекомендации по заполнению параметров для разных кампаний**
> 
> - Для добавления в кампанию товаров передайте значения параметров `sku` и `bid`. Если параметр `bid` не указан, 
>   автоматически задаётся конкурентная ставка.
> 
> - Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика». 
> 
> - Для кампании с включённой стратегией можно добавлять товары только из категории `autopilot.categoryId`.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | - |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Товары добавлены в кампанию

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
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

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
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
