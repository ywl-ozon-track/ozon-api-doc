---
title: "获取发货包裹"
description: "获取发货包裹"
---

# 获取发货包裹

<Badge type="tip" text="POST" /> `/v4/posting/fbs/list`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v4/posting/fbs/list`
- **详细说明**：

> Возвращает список отправлений за указанный период времени — он должен быть не больше одного года.
> 
>  Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
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
    "order_numbers": [
      "12345-1"
    ],
    "delivery_method_ids": [
      123456789
    ],
    "integration_type_flow": [
      "ozon"
    ],
    "is_blr_traceable": false,
    "last_changed_status_date": {
      "from": "2026-04-01T19:47:39.878Z",
      "to": "2026-04-02T11:47:39.878Z"
    },
    "order_id": 123456,
    "since": "2026-04-01T19:47:39.878Z",
    "to": "2026-04-02T11:47:39.878Z",
    "statuses": [
      "awaiting_packaging",
      "awaiting_deliver",
      "delivering",
      "delivered"
    ],
    "provider_ids": [
      123
    ],
    "warehouse_ids": [
      3092889984
    ]
  },
  "limit": 100,
  "cursor": "",
  "with": {
    "analytics_data": true,
    "barcodes": true,
    "financial_data": true,
    "legal_info": true,
    "translit": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список отправлений

```json
{
  "cursor": "eyJmaWVsZHMiOlt7Im5hbWUiOiJvc3AuaW5fcHJvY2Vzc19hdCIsImRpciI6ImFzYyIsInZhbCI6IjIwMjYtMDEtMTVUMTA6MzA6MDBaIn0seyJuYW1lIjoib3NwLmlkIiwiZGlyIjoiYXNjIiwidmFsIjoiMTIzNDU2Nzg5MCJ9XX0=",
  "has_next": false,
  "postings": [
    {
      "addressee": {
        "name": "Иван Петров"
      },
      "analytics_data": {
        "city": "Москва",
        "client_delivery_date_begin": "2026-05-20T08:00:00.000Z",
        "client_delivery_date_end": "2026-05-22T20:00:00.000Z",
        "delivery_date_begin": "2026-05-18T08:00:00.000Z",
        "delivery_date_end": "2026-05-19T20:00:00.000Z",
        "delivery_type": "PVZ",
        "is_legal": false,
        "is_premium": true,
        "payment_type_group_name": "Банковская карта",
        "region": "Московская область",
        "tpl_provider": "Доставка Ozon",
        "tpl_provider_id": 24,
        "warehouse": "Софьино",
        "warehouse_id": 17023
      },
      "available_actions": [
        "pack",
        "ship",
        "cancel"
      ],
      "barcodes": {
        "lower_barcode": "601302481800001",
        "upper_barcode": "601302481800001"
      },
      "cancellation": {
        "affect_cancellation_rating": false,
        "cancel_reason": "",
        "cancel_reason_id": 0,
        "cancellation_initiator": "",
        "cancellation_type": "",
        "cancelled_after_ship": false
      },
      "container": {
        "cargo_type": "BOX",
        "container_date": "2026-05-14",
        "container_id": 100500,
        "container_number": 42
      },
      "container_sort_type": "standard",
      "customer": {
        "address": {
          "address_tail": "д. 15, кв. 78",
          "city": "Москва",
          "comment": "Домофон не работает",
          "country": "Россия",
          "district": "ЦАО",
          "latitude": 55.7558,
          "longitude": 37.6176,
          "provider_pvz_code": "PVZ123",
          "pvz_code": 456,
          "region": "Москва",
          "zip_code": "101000"
        },
        "customer_email": "ivan.petrov@example.com",
        "customer_id": 12345678,
        "name": "Иван Петров",
        "phone": "+79031234567"
      },
      "delivering_date": "2026-05-19T15:30:00.000Z",
      "delivery_method": {
        "id": 20605650762000,
        "name": "Доставка Ozon самостоятельно, Софьино",
        "tpl_provider": "Доставка Ozon",
        "tpl_provider_id": 24,
        "warehouse": "17023",
        "warehouse_id": 20605650762000
      },
      "delivery_schema": "fbs",
      "destination_place_id": 500,
      "destination_place_name": "ПВЗ №123 на Тверской",
      "external_order": {
        "is_external": false,
        "platform_name": ""
      },
      "financial_data": {
        "cluster_from": "Москва",
        "cluster_to": "Казань",
        "products": [
          {
            "actions": [
              "Округление"
            ],
            "commission": {
              "amount": 120,
              "currency": "RUB",
              "percent": 10
            },
            "customer_price": {
              "amount": "2500.00",
              "currency": "RUB"
            },
            "old_price": 3000,
            "payout": 2100,
            "price": 2500,
            "product_id": 1904686181,
            "quantity": 2,
            "total_discount_percent": 16.67,
            "total_discount_value": 500
          }
        ]
      },
      "in_process_at": "2026-05-14T08:00:00.000Z",
      "integration_type_flow": "ozon",
      "is_click_and_collect": false,
      "is_express": false,
      "is_multibox": false,
      "is_presortable": true,
      "legal_info": {
        "company_name": "ООО Ромашка",
        "inn": "7701234567",
        "kpp": "770101001"
      },
      "multi_box_qty": 1,
      "optional": {
        "products_with_possible_mandatory_mark": []
      },
      "order_id": 33301885134,
      "order_number": "0208245774-0029",
      "parent_posting_number": "",
      "pickup_code_verified_at": null,
      "posting_number": "0208245774-0029-1",
      "products": [
        {
          "imei": [],
          "is_blr_traceable": false,
          "is_marketplace_buyout": true,
          "name": "Смартфон Xiaomi Note 12",
          "offer_id": "b4408110",
          "price": {
            "amount": "12990.00",
            "currency": "RUB"
          },
          "product_color": "чёрный",
          "quantity": 1,
          "sku": 1904686181,
          "weight": 0.42
        },
        {
          "imei": [
            "123456789012345",
            "987654321098765"
          ],
          "is_blr_traceable": false,
          "is_marketplace_buyout": false,
          "name": "Наушники Bluetooth",
          "offer_id": "h667722",
          "price": {
            "amount": "3490.00",
            "currency": "RUB"
          },
          "product_color": "белый",
          "quantity": 2,
          "sku": 1904686182,
          "weight": 0.15
        }
      ],
      "prr_option": "standard",
      "quantum_id": 98765,
      "require_blr_traceable_attrs": false,
      "requirements": {
        "products_requiring_change_country": [],
        "products_requiring_country": [],
        "products_requiring_gtd": [
          "1904686181"
        ],
        "products_requiring_imei": [],
        "products_requiring_jw_uin": [],
        "products_requiring_mandatory_mark": [],
        "products_requiring_rnpt": []
      },
      "scanit": "ii30525117479",
      "shipment_date": "2026-05-18T12:00:00.000Z",
      "shipment_date_without_delay": "2026-05-18T12:00:00.000Z",
      "sorting_center": null,
      "status": "awaiting_packaging",
      "substatus": "posting_created",
      "tariffication": {
        "current_tariff_charge": {
          "amount": "100.00",
          "currency": "RUB"
        },
        "current_tariff_min_charge": {
          "amount": "50.00",
          "currency": "RUB"
        },
        "current_tariff_rate": 2,
        "current_tariff_type": "commission",
        "next_tariff_charge": {
          "amount": "150.00",
          "currency": "RUB"
        },
        "next_tariff_min_charge": {
          "amount": "100.00",
          "currency": "RUB"
        },
        "next_tariff_rate": 2.5,
        "next_tariff_starts_at": "2026-05-20T00:00:00.000Z",
        "next_tariff_type": "commission"
      },
      "tariffication_steps": [
        {
          "min_charge": {
            "amount": "24.00",
            "currency": "RUB"
          },
          "tariff_charge": {
            "amount": "24.00",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-05-15T23:59:59.000Z",
          "tariff_rate": 2,
          "tariff_type": "discount"
        }
      ],
      "tpl_integration_type": "ozon",
      "tracking_number": "TRK1234567890",
      "volume_weight": 1.2
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
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/list", {
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
