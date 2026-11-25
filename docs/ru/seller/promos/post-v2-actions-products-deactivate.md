---
title: "Удалить товары из акции «Промокоды»"
description: "Удалить товары из акции «Промокоды»"
---

# Удалить товары из акции «Промокоды»

<Badge type="tip" text="POST" /> `/v2/actions/products/deactivate`

## 接口概览

- **所属模块**：🎁 Акции Ozon
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/actions/products/deactivate`
- **详细说明**：

> Чтобы удалить товары из акций «Эластичный бустинг» или «Максимальный бустинг», используйте метод [/v1/actions/products/update](#operation/ActionsProductsUpdate) и измените цену товара `action_price` на значение больше или равное лимиту акции.
> 
> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosProductsDeactivate">/v1/actions/products/deactivate</a>.
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
  "action_id": 213139,
  "product_ids": [
    999999
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Товары удалены из акции

```json
{
  "product_ids": [
    999999
  ]
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
