---
title: "PostingFbsUnfulfilledList"
description: "Получить список необработанных отправлений"
---

# PostingFbsUnfulfilledList

<Badge type="tip" text="POST" /> `/v4/posting/fbs/unfulfilled/list`

## Endpoint Overview

- **Category**：📌 FBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v4/posting/fbs/unfulfilled/list`

::: details View Official Description (Russian)
> Возвращает список необработанных отправлений за указанный период времени — он должен быть не больше одного года.
> 
> Возможные статусы отправлений:
> - `awaiting_registration` — ожидает регистрации;
> - `acceptance_in_progress` — идёт приёмка;
> - `awaiting_approve` — ожидает подтверждения;
> - `awaiting_packaging` — ожидает упаковки;
> - `awaiting_deliver` — ожидает отгрузки;
> - `arbitration` — арбитраж;
> - `client_arbitration` — клиентский арбитраж доставки;
> - `delivering` — доставляется;
> - `driver_pickup` — у водителя;
> - `cancelled` — отменено;
> - `not_accepted` — не принято на сортировочном центре.
> 
> Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "sort_dir": "asc",
  "limit": 100,
  "filter": {
    "cutoff_from": "2026-01-21T07:13:56.042Z",
    "cutoff_to": "2026-01-21T07:13:56.042Z",
    "delivery_method_ids": [
      123456
    ],
    "statuses": [
      "awaiting_packaging",
      "awaiting_deliver",
      "delivering"
    ],
    "warehouse_ids": [
      3092889984
    ],
    "provider_ids": [
      57
    ],
    "last_change_status_date": {
      "from": "2026-01-21T07:13:56.042Z",
      "to": "2026-01-21T07:13:56.042Z"
    }
  },
  "cursor": "",
  "with": {
    "barcodes": true,
    "analytics_data": true,
    "financial_data": true,
    "legal_info": true
  }
}
```

## Responses

### HTTP 200 - Список необработанных отправлений

```json
{
  "has_next": true,
  "cursor": "eyJmaWVsZHMiOlt7Im5hbWUiOiJvc3AuY3V0b2ZmIiwiZGlyIjoiYXNjIiwidmFsIjoiMjAyNi0wNS0wNVQwNjo0NDozN1oifSx7Im5hbWUiOiJvc3AuaW5fcHJvY2Vzc19hdCIsImRpciI6ImFzYyIsInZhbCI6IjIwMjYtMDUtMDRUMDY6NDQ6MzdaIn0seyJuYW1lIjoib3NwLmlkIiwiZGlyIjoiYXNjIiwidmFsIjoiMTIwODk3MjIwMiJ9LHsibmFtZSI6Im9zcC5pZCIsImRpciI6ImFzYyIsInZhbCI6IjEyMDg5NzIyMDIifV19",
  "postings": [
    {
      "posting_number": "41517061-0214-1",
      "order_id": 34953320005,
      "order_number": "41517061-0214",
      "pickup_code_verified_at": null,
      "status": "awaiting_deliver",
      "substatus": "posting_in_carriage",
      "delivery_method": {
        "id": 20605650762000,
        "name": "Доставка Ozon самостоятельно, Софьино",
        "warehouse_id": 20605650762000,
        "warehouse": "17023",
        "tpl_provider_id": 24,
        "tpl_provider": "Доставка Ozon"
      },
      "delivery_schema": "fbs",
      "tracking_number": "",
      "tpl_integration_type": "ozon",
      "in_process_at": "2026-05-04T06:44:37Z",
      "integration_type_flow": "ozon",
      "shipment_date": "2026-05-05T06:44:37Z",
      "shipment_date_without_delay": "2026-05-06T04:00:00Z",
      "sorting_center": null,
      "optional": {
        "products_with_possible_mandatory_mark": [
          4116250392
        ]
      },
      "cancellation": {
        "cancel_reason_id": 0,
        "cancel_reason": "",
        "cancellation_type": "",
        "cancelled_after_ship": false,
        "affect_cancellation_rating": false,
        "cancellation_initiator": ""
      },
      "customer": null,
      "products": [
        {
          "is_blr_traceable": false,
          "is_marketplace_buyout": false,
          "offer_id": "S5200657-28",
          "name": "Кроссовки для мальчика демисезонные из натуральной кожи",
          "sku": 4116250392,
          "quantity": 1,
          "imei": [],
          "weight": 0.549,
          "product_color": "темно-синий",
          "price": {
            "amount": "300",
            "currency": "RUB"
          }
        }
      ],
      "addressee": null,
      "barcodes": {
        "upper_barcode": "0",
        "lower_barcode": "0"
      },
      "analytics_data": {
        "region": "",
        "city": "",
        "delivery_type": "PVZ",
        "is_premium": false,
        "payment_type_group_name": "Банковская карта",
        "warehouse_id": 20605650762000,
        "warehouse": "17023",
        "tpl_provider_id": 24,
        "tpl_provider": "Доставка Ozon",
        "delivery_date_begin": "2026-05-05T06:38:10Z",
        "delivery_date_end": "2026-05-06T06:38:10Z",
        "is_legal": true,
        "client_delivery_date_begin": null,
        "client_delivery_date_end": null
      },
      "destination_place_id": 0,
      "destination_place_name": "",
      "financial_data": {
        "products": [
          {
            "payout": 0,
            "product_id": 4116250392,
            "old_price": 300,
            "price": 300,
            "total_discount_value": 0,
            "total_discount_percent": 0,
            "quantity": 1,
            "customer_price": {
              "amount": "300",
              "currency": "RUB"
            },
            "actions": [],
            "commission": {
              "amount": 0,
              "percent": 0,
              "currency": "RUB"
            }
          }
        ],
        "cluster_from": "Москва, МО и Дальние регионы",
        "cluster_to": "Москва, МО и Дальние регионы"
      },
      "is_express": false,
      "legal_info": {
        "company_name": "",
        "inn": "",
        "kpp": ""
      },
      "quantum_id": 0,
      "require_blr_traceable_attrs": false,
      "requirements": {
        "products_requiring_gtd": [
          4116250392
        ],
        "products_requiring_country": [],
        "products_requiring_mandatory_mark": [],
        "products_requiring_rnpt": [],
        "products_requiring_jw_uin": [],
        "products_requiring_change_country": [],
        "products_requiring_imei": [],
        "products_requiring_weight": []
      },
      "scanit": "ii30525117479",
      "tariffication": {
        "current_tariff_rate": 3,
        "current_tariff_type": "commission",
        "current_tariff_charge": {
          "amount": "100",
          "currency": "RUB"
        },
        "current_tariff_min_charge": {
          "amount": "100",
          "currency": "RUB"
        },
        "next_tariff_rate": 0,
        "next_tariff_type": "",
        "next_tariff_charge": null,
        "next_tariff_min_charge": null,
        "next_tariff_starts_at": null
      },
      "external_order": {
        "is_external": false,
        "platform_name": ""
      },
      "volume_weight": 0,
      "is_click_and_collect": false,
      "delivering_date": null,
      "is_multibox": false,
      "multi_box_qty": 1,
      "is_presortable": false,
      "prr_option": "",
      "parent_posting_number": "",
      "available_actions": [
        "add_additional_info",
        "cancel",
        "has_barcode_for_printing",
        "label_download",
        "label_download_small"
      ],
      "tariffication_steps": [
        {
          "min_charge": null,
          "tariff_charge": {
            "amount": "9",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-05-04T18:44:37Z",
          "tariff_rate": 3,
          "tariff_type": "discount"
        },
        {
          "min_charge": null,
          "tariff_charge": {
            "amount": "6",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-05-05T06:44:37Z",
          "tariff_rate": 2,
          "tariff_type": "discount"
        },
        {
          "min_charge": {
            "amount": "50",
            "currency": "RUB"
          },
          "tariff_charge": {
            "amount": "50",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-05-05T18:44:37Z",
          "tariff_rate": 1,
          "tariff_type": "commission"
        },
        {
          "min_charge": {
            "amount": "100",
            "currency": "RUB"
          },
          "tariff_charge": {
            "amount": "100",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-05-06T06:44:37Z",
          "tariff_rate": 2,
          "tariff_type": "commission"
        },
        {
          "min_charge": {
            "amount": "100",
            "currency": "RUB"
          },
          "tariff_charge": {
            "amount": "100",
            "currency": "RUB"
          },
          "tariff_deadline_at": "9999-12-31T23:59:59.999999900Z",
          "tariff_rate": 3,
          "tariff_type": "commission"
        }
      ],
      "container_sort_type": "sort",
      "container": null
    }
  ],
  "count": 2177
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/unfulfilled/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/unfulfilled/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/unfulfilled/list", {
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
