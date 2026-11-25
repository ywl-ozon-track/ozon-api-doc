---
title: "Добавить или обновить товары в автодобавлении в акцию"
description: "Добавить или обновить товары в автодобавлении в акцию"
---

# Добавить или обновить товары в автодобавлении в акцию

<Badge type="tip" text="POST" /> `/v1/actions/auto-add/products/update`

## 接口概览

- **所属模块**：📌 PromosBeta
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/auto-add/products/update`
- **详细说明**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsAutoAddProductsUpdateV2">/v2/actions/auto-add/products/update</a>.
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
  "auto_add_dates": "2035-08-28T14:00:00Z",
  "to_update": [
    {
      "currency": "RUB",
      "product_id": "14914",
      "quantity": 10,
      "action_price": 100
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Товары добавлены или обновлены в автодобавлении

```json
{
  "updated_ids": [
    "14914"
  ],
  "rejected": [],
  "below_min_price": [
    {
      "key": "14914",
      "value": 100
    }
  ],
  "extremely_low_price": [],
  "failed_price": []
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/auto-add/products/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/auto-add/products/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/auto-add/products/update", {
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
