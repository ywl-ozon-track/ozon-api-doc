---
title: "PromosProductsDeactivate"
description: "Удалить товары из акции"
---

# PromosProductsDeactivate

<Badge type="tip" text="POST" /> `/v1/actions/products/deactivate`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/actions/products/deactivate`

::: details View Official Description (Russian)
> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsProductsDeactivate">/v2/actions/products/deactivate</a>.
> </aside>
> 
> Метод для удаления товаров из акции.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "action_id": 66011,
  "product_ids": [
    14975
  ]
}
```

## Responses

### HTTP 200 - Товары удалены из акции

```json
{
  "result": {
    "product_ids": [
      14975
    ],
    "rejected": []
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/products/deactivate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/products/deactivate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/products/deactivate", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
