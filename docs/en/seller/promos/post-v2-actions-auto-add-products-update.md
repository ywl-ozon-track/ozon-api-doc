---
title: "ActionsAutoAddProductsUpdateV2"
description: "Добавить или обновить товары в автодобавлении в акцию"
---

# ActionsAutoAddProductsUpdateV2

<Badge type="tip" text="POST" /> `/v2/actions/auto-add/products/update`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/actions/auto-add/products/update`

::: details View Official Description (Russian)
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/ActionsAutoAddProductsUpdate">/v1/actions/auto-add/products/update</a>, изменить цену на карточке товара с помощью метода не получится.
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
  "action_id": 250204,
  "auto_add_date": "2026-09-22T11:37:38.940Z",
  "products": [
    {
      "action_price": {
        "amount": "1000",
        "currency": "RUB"
      },
      "id": 88888,
      "stock": 10
    }
  ]
}
```

## Responses

### HTTP 200 - Товары добавлены или обновлены в автодобавлении

```json
{
  "product_ids": [
    "    88888  "
  ],
  "deactivated_ids": [
    0
  ],
  "rejected": [
    {
      "product_id": 0,
      "reason": ""
    }
  ],
  "warnings": [
    {
      "product_id": 0,
      "reason": ""
    }
  ],
  "below_min_price": {
    "key": 0,
    "value": ""
  },
  "extremely_low_price": {
    "key": 0,
    "value": ""
  },
  "failed_price": {
    "key": 0,
    "value": ""
  }
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
curl -X POST "https://api-seller.ozon.ru/v2/actions/auto-add/products/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/auto-add/products/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/auto-add/products/update", {
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
