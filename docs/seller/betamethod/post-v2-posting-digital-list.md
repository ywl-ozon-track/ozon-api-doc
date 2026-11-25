---
title: "获取发货包裹"
description: "获取发货包裹"
---

# 获取发货包裹

<Badge type="tip" text="POST" /> `/v2/posting/digital/list`

## 接口概览

- **所属模块**：📌 BetaMethod
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/posting/digital/list`
- **详细说明**：

> Возвращает список отправлений, по которым нужно загрузить коды цифровых товаров. Метод доступен только продавцам, которые работают с цифровыми товарами. 
> 
> Чтобы получить список отправлений в любом статусе, используйте метод [/v3/posting/fbo/list](#operation/PostingFboList).
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2050-Novyi-beta-metod-dlia-postingov-s-zagruzkoi-kodov-tsifrovykh-tovarov-v-Seller-API/) в сообществе разработчиков Ozon for dev.
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
  "sort_dir": "asc",
  "filter": {
    "posting_numbers": [
      "42776709-0200-5"
    ],
    "order_numbers": [
      "12345-1"
    ],
    "since": "2025-05-10T06:49:21.122Z",
    "to": "2025-12-10T06:49:21.122Z"
  },
  "limit": 100,
  "cursor": "",
  "with": {
    "analytics_data": false,
    "financial_data": true,
    "legal_info": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список отправлений

```json
{
  "postings": [
    {
      "order_id": 29137896277,
      "order_number": "42776709-0200",
      "posting_number": "42776709-0200-5",
      "status": "delivered",
      "cancel_reason_id": 0,
      "created_at": "2025-05-10T06:49:31.474Z",
      "in_process_at": "2025-05-10T06:49:29.108Z",
      "legal_info": {
        "company_name": "ООО Покупатель",
        "inn": "770123456789",
        "kpp": "770101001"
      },
      "products": [
        {
          "sku": 1624109204,
          "name": "Слипоны демисезонные для мальчиков",
          "offer_id": "S5257022-30",
          "price": {
            "amount": "1461.00",
            "currency": "RUB"
          },
          "quantity": 1
        }
      ],
      "analytics_data": {
        "city": "",
        "delivery_type": "",
        "is_premium": false,
        "payment_type_group_name": "",
        "warehouse_id": null,
        "warehouse_name": "",
        "is_legal": false
      },
      "financial_data": {
        "products": [
          {
            "product_id": 1624109204,
            "commission": {
              "amount": 0,
              "percent": 0,
              "currency": "RUB"
            },
            "payout": 0,
            "old_price": 1461,
            "price": 1461,
            "total_discount_value": 0,
            "actions": [],
            "quantity": 1
          }
        ],
        "cluster_from": "Екатеринбург",
        "cluster_to": "Екатеринбург"
      },
      "cancellation": {
        "cancellation_type": "Client",
        "cancellation_initiator": "Клиент"
      },
      "external_order": {
        "is_external": false,
        "platform_name": ""
      },
      "additional_data": []
    }
  ],
  "has_next": false,
  "cursor": ""
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/digital/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/digital/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/digital/list", {
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
