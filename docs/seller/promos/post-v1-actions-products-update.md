---
title: "Добавить или обновить товар в акции"
description: "Добавить или обновить товар в акции"
---

# Добавить или обновить товар в акции

<Badge type="tip" text="POST" /> `/v1/actions/products/update`

## 接口概览

- **所属模块**：🎁 官方促销与营销活动
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/products/update`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosProductsActivate">/v1/actions/products/activate</a>, изменить цену на карточке товара с помощью метода не получится.
> </aside>
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

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

## 返回响应

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

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details 查看数据结构定义 (Schema)
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
