---
title: "Обновить цену"
description: "Обновить цену"
---

# Обновить цену

<Badge type="tip" text="POST" /> `/v1/product/import/prices`

## 接口概览

- **所属模块**：💰 Prices & Stocks
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/import/prices`
- **详细说明**：

> Позволяет изменить цену одного или нескольких товаров.
> Цену каждого товара можно обновлять не больше 10 раз в час.
> Чтобы сбросить `old_price`, поставьте `0` у этого параметра. 
> 
> Если у товара установлена минимальная цена и включено автоприменение в акции, отключите его и обновите 
> минимальную цену. Иначе вернётся ошибка `action_price_enabled_min_price_missing`.
> 
> Если запрос содержит оба параметра — `offer_id` и `product_id`, изменения применятся к товару с `offer_id`. Для избежания неоднозначности используйте только один из параметров.
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
  "prices": [
    {
      "auto_action_enabled": "UNKNOWN",
      "auto_add_to_ozon_actions_list_enabled": "UNKNOWN",
      "currency_code": "RUB",
      "declared_price": "1000",
      "manage_elastic_boosting_through_price": true,
      "min_price": "800",
      "min_price_for_auto_actions_enabled": true,
      "net_price": "650",
      "offer_id": "",
      "old_price": "0",
      "price": "1448",
      "price_strategy_enabled": "UNKNOWN",
      "product_id": 1386,
      "quant_size": 1,
      "vat": "0.1"
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Цена обновлена

```json
{
  "result": [
    {
      "product_id": 1386,
      "offer_id": "PH8865",
      "updated": true,
      "errors": []
    }
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
curl -X POST "https://api-seller.ozon.ru/v1/product/import/prices" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/import/prices"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/import/prices", {
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
