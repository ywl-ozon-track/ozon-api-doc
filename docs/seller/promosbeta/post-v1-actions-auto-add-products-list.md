---
title: "获取商品"
description: "获取商品"
---

# 获取商品

<Badge type="tip" text="POST" /> `/v1/actions/auto-add/products/list`

## 接口概览

- **所属模块**：📌 PromosBeta
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/auto-add/products/list`
- **详细说明**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsAutoAddProductsListV2">/v2/actions/auto-add/products/list</a>.
> </aside>
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2009-Novye-metody-dlia-upravleniia-avtodobavleniem-tovarov-v-aktsii/) в сообществе разработчиков Ozon for dev.
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
  "action_id": "250204",
  "auto_add_date": "2035-08-28T14:00:00Z",
  "limit": "1",
  "offset": "0"
}
```

## 返回响应 (Responses)

### HTTP 200 - Список товаров с автодобавлением

```json
{
  "products": [
    {
      "produсt_id": "14903",
      "offer_id": "PS0007",
      "sku": "146279508",
      "name": "Ароматизатор / Масло для бани / Эфирное масло \"Пихта\", 250 мл",
      "price": 114,
      "max_discount_price": 79,
      "min_seller_price:": 50,
      "marketplace_seller_price": 59,
      "action_price_to_auto_add": 79,
      "min_action_quantity": "0",
      "quantity_to_auto_add": "10",
      "currency": "RUB",
      "add_mode": "MANUAL"
    }
  ],
  "total": "443"
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/auto-add/products/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/auto-add/products/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/auto-add/products/list", {
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
