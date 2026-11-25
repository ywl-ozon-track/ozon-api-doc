---
title: "ProductAPI GetProductList"
description: "Список товаров"
---

# ProductAPI GetProductList

<Badge type="tip" text="POST" /> `/v3/product/list`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v3/product/list`

::: details View Official Description (Russian)
> <aside class="warning">
>   23 ноября 2026 года отключим параметр <code>result.total</code> в ответе метода. Переключитесь на <code>result.total_items</code>.
> </aside> 
> 
> Метод для получения списка всех товаров.
> 
> Если вы используете фильтр по идентификатору `offer_id` или `product_id`, остальные параметры заполнять не обязательно.
> Вернутся все товары с указанными идентификаторами, независимо от видимости.
> За один раз вы можете использовать только одну группу идентификаторов, не больше 1000 товаров.
> 
> Если вы не используете для отображения идентификаторы, укажите `limit` и `last_id` в следующих запросах.
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
  "filter": {
    "offer_id": [
      "136748"
    ],
    "product_id": [
      "223681945"
    ],
    "skus": [
      "179737222"
    ],
    "visibility": "ALL"
  },
  "last_id": "",
  "limit": 100
}
```

## Responses

### HTTP 200 - Список товаров

```json
{
  "result": {
    "items": [
      {
        "product_id": 3397917680,
        "offer_id": "2026-01-13 16:56:03 PDF",
        "sku": 987654321,
        "has_fbo_stocks": false,
        "has_fbs_stocks": false,
        "archived": false,
        "is_discounted": false,
        "quants": []
      }
    ],
    "total": 1,
    "total_items": 1,
    "last_id": "WzMzOTc5MTc2ODAsMzM5NzkxNzY4MF0="
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
curl -X POST "https://api-seller.ozon.ru/v3/product/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/product/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/product/list", {
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
