---
title: "Информация о возвратах FBO и FBS"
description: "Информация о возвратах FBO и FBS"
---

# Информация о возвратах FBO и FBS

<Badge type="tip" text="POST" /> `/v1/returns/list`

## 接口概览

- **所属模块**：↩️ Возвраты покупателей
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/returns/list`
- **详细说明**：

> Метод для получения информации о возвратах FBO и FBS.


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filter": {
    "logistic_return_date": {
      "time_from": "2026-02-01T00:00:00Z",
      "time_to": "2026-03-01T23:59:59Z"
    },
    "order_id": "7000123456",
    "posting_numbers": [
      "789456123-0002-3",
      "123456789-0001-1"
    ],
    "product_name": "Тестовый товар",
    "offer_id": "test-offer-123456",
    "visual_status_name": "ArrivedAtReturnPlace",
    "warehouse_id": "3000007863",
    "barcode": "test-barcode-123456789",
    "return_schema": "FBS"
  },
  "limit": 500,
  "last_id": 0
}
```

## 返回响应 (Responses)

### HTTP 200 - Информация по возвратам

```json
{
  "returns": [
    {
      "exemplars": [
        {
          "id": "1019562967545956"
        }
      ],
      "id": "1000015552",
      "company_id": "3058",
      "return_reason_name": "Покупатель отказался при вручении: недоволен качеством товара",
      "type": "FullReturn",
      "schema": "Fbs",
      "order_id": "24540784250",
      "order_number": "58544282-0057",
      "place": {
        "id": "23869688194000",
        "name": "СЦ_Львовский_Возвраты",
        "address": "Россия, обл. Московская, г. Подольск, промышленная зона Львовский, ул. Московская, д. 69, стр. 5"
      },
      "target_place": {
        "id": "23869688194000",
        "name": "СЦ_Львовский_Возвраты",
        "address": "Россия, обл. Московская, г. Подольск, промышленная зона Львовский, ул. Московская, д. 69, стр. 5"
      },
      "storage": {
        "sum": {
          "currency_code": "RUB",
          "price": "1231"
        },
        "tariffication_first_date": "2024-07-30T06:15:48.998146Z",
        "tariffication_start_date": "2024-07-29T06:15:48.998146Z",
        "arrived_moment": "2024-07-29T06:15:48.998146Z",
        "days": "0",
        "utilization_sum": {
          "currency_code": "RUB",
          "price": "1231"
        },
        "utilization_forecast_date": "2024-07-29T06:15:48.998146Z"
      },
      "product": {
        "sku": "1100526203",
        "offer_id": "81451",
        "name": "Кукла Дотти Плачущий младенец Cry Babies Dressy Dotty",
        "price": {
          "currency_code": "RUB",
          "price": "3318"
        },
        "price_without_commission": {
          "currency_code": "RUB",
          "price": "3318"
        },
        "commission_percent": "1.2",
        "commission": {
          "currency_code": "RUB",
          "price": "2312"
        },
        "quantity": 1
      },
      "logistic": {
        "technical_return_moment": "2024-07-29T06:15:48.998146Z",
        "final_moment": "2024-07-29T06:15:48.998146Z",
        "cancelled_with_compensation_moment": "2024-07-29T06:15:48.998146Z",
        "return_date": "2024-07-29T06:15:48.998146Z",
        "barcode": "ii5275210303"
      },
      "visual": {
        "status": {
          "id": 3,
          "display_name": "В пункте выдачи",
          "sys_name": "ArrivedAtReturnPlace"
        },
        "change_moment": "2024-07-29T06:15:48.998146Z"
      },
      "additional_info": {
        "is_opened": true,
        "is_super_econom": false
      },
      "source_id": "90426223",
      "posting_number": "58544282-0057-1",
      "clearing_id": "21190893156000",
      "return_clearing_id": null,
      "compensation_status": {
        "status": {
          "id": 2,
          "display_name": "Вы получили компенсацию",
          "sys_name": "Received"
        },
        "change_moment": "2025-11-06T16:06:56.639Z"
      },
      "courier_delivery": {
        "failed_attempts": 0,
        "total_attempts": 0
      }
    }
  ],
  "has_next": false
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/returns/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/returns/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/returns/list", {
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
