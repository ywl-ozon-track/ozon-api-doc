---
title: "Информация об отправлении"
description: "Информация об отправлении"
---

# Информация об отправлении

<Badge type="tip" text="POST" /> `/v2/posting/fbo/get`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/posting/fbo/get`

::: details 查看官方详细说明 (Официальное описание)
> Возвращает информацию об отправлении по его идентификатору.
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
  "posting_number": "50520644-0012-7",
  "translit": true,
  "with": {
    "analytics_data": true,
    "financial_data": true,
    "legal_info": false
  }
}
```

## 返回响应

### HTTP 200 - Информация об отправлении

```json
{
  "result": {
    "order_id": 354679434,
    "order_number": "50520644-0012",
    "posting_number": "50520644-0012-7",
    "status": "delivered",
    "substatus": "posting_delivered",
    "cancel_reason_id": 0,
    "created_at": "2021-09-01T00:34:56.563Z",
    "external_order": {
      "is_external": false,
      "platform_name": ""
    },
    "fact_delivery_date": "string",
    "in_process_at": "2021-09-01T00:34:56.103Z",
    "legal_info": {
      "company_name": "string",
      "inn": "string",
      "kpp": "string"
    },
    "products": [
      {
        "sku": 254665483,
        "name": "Мочалка натуральная из люфы с деревянной ручкой",
        "quantity": 1,
        "offer_id": "PS1033",
        "price": "137.00",
        "is_marketplace_buyout": true,
        "digital_codes": [],
        "currency_code": "RUB"
      }
    ],
    "analytics_data": {
      "city": "",
      "delivery_type": "Courier",
      "is_premium": false,
      "payment_type_group_name": "Карты оплаты",
      "warehouse_id": 15431806189000,
      "warehouse_name": "ХОРУГВИНО_РФЦ",
      "is_legal": false,
      "client_delivery_date_begin": "2025-11-24T13:32:40.336Z",
      "client_delivery_date_end": "2025-11-24T13:32:40.336Z"
    },
    "financial_data": {
      "products": [
        {
          "commission_amount": 13.7,
          "commission_percent": 10,
          "payout": 123.3,
          "product_id": 254665483,
          "currency_code": "RUB",
          "customer_currency_code": "RUB",
          "old_price": 198,
          "price": 137,
          "total_discount_value": 61,
          "total_discount_percent": 30.81,
          "actions": [
            "Системная виртуальная скидка селлера"
          ],
          "quantity": 0
        }
      ]
    },
    "additional_data": []
  }
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbo/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbo/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbo/get", {
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
