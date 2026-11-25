---
title: "ActionsProductsDeactivate"
description: "Удалить товары из акции «Промокоды»"
---

# ActionsProductsDeactivate

<Badge type="tip" text="POST" /> `/v2/actions/products/deactivate`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/actions/products/deactivate`

::: details View Official Description (Russian)
> Чтобы удалить товары из акций «Эластичный бустинг» или «Максимальный бустинг», используйте метод [/v1/actions/products/update](#operation/ActionsProductsUpdate) и измените цену товара `action_price` на значение больше или равное лимиту акции.
> 
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosProductsDeactivate">/v1/actions/products/deactivate</a>.
> </aside>
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "action_id": 213139,
  "product_ids": [
    999999
  ]
}
```

## Responses

### HTTP 200 - Товары удалены из акции

```json
{
  "product_ids": [
    999999
  ]
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/actions/products/deactivate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/products/deactivate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/products/deactivate", {
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
