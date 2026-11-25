---
title: "Добавить или обновить товар в акции"
description: "Добавить или обновить товар в акции"
---

# Добавить или обновить товар в акции

<Badge type="tip" text="POST" /> `/v1/actions/products/update`

## 接口概览

- **所属模块**：🎁 Promotions & Discounts
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/products/update`
- **详细说明**：

> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosProductsActivate">/v1/actions/products/activate</a>, изменить цену на карточке товара с помощью метода не получится.
> </aside>
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "action_id": 258568,
  "products": [
    {
      "action_price": {
        "amount": "88",
        "currency": "RUB"
      },
      "product_id": 88888,
      "stock": "8"
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Товары добавлены или обновлены

```json
{
  "active_product_ids": [
    88888
  ],
  "deactivated_product_ids": [],
  "rejected": [],
  "warnings": []
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/actions/products/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/products/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/products/update", {
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
