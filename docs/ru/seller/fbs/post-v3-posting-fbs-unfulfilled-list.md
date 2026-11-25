---
title: "Список необработанных отправлений"
description: "Список необработанных отправлений"
---

# Список необработанных отправлений

<Badge type="tip" text="POST" /> `/v3/posting/fbs/unfulfilled/list`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/posting/fbs/unfulfilled/list`
- **详细说明**：

> <aside class="warning">
> С 31 августа 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFbsUnfulfilledList">/v4/posting/fbs/unfulfilled/list</a>.
> </aside>
> Возвращает список необработанных отправлений за указанный период времени — он должен быть не больше одного года.
> 
> Возможные статусы отправлений:
> - `awaiting_registration` — ожидает регистрации,
> - `acceptance_in_progress` — идёт приёмка,
> - `awaiting_approve` — ожидает подтверждения,
> - `awaiting_packaging` — ожидает упаковки,
> - `awaiting_deliver` — ожидает отгрузки,
> - `arbitration` — арбитраж,
> - `client_arbitration` — клиентский арбитраж доставки,
> - `delivering` — доставляется,
> - `driver_pickup` — у водителя,
> - `cancelled` — отменено,
> - `not_accepted` — не принят на сортировочном центре.
> 
> Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).
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
  "dir": "ASC",
  "filter": {
    "cutoff_from": "2021-08-24T14:15:22Z",
    "cutoff_to": "2021-08-31T14:15:22Z",
    "delivery_method_id": [],
    "is_quantum": false,
    "provider_id": [],
    "status": "awaiting_packaging",
    "warehouse_id": []
  },
  "limit": 100,
  "offset": 0,
  "with": {
    "analytics_data": true,
    "barcodes": true,
    "financial_data": true,
    "legal_info": false,
    "translit": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список необработанных отправлений

```json
{
  "has_next": true,
  "cursor": "eyJmaWVsZHMiOlt7Im5hbWUiOiJvc3AuY3V0b2ZmIiwiZGlyIjoiYXNjIiwidmFsIjoiMjAyNi0wMy0zMVQwOTowMDowMFoifSx7Im5hbWUiOiJvc3AuaW5fcHJvY2Vzc19hdCIsImRpciI6ImFzYyIsInZhbCI6IjIwMjYtMDMtMzBUMTE6MjY6MDhaIn0seyJuYW1lIjoib3NwLmlkIiwiZGlyIjoiYXNjIiwidmFsIjoiMTIwOTM3NTA2MiJ9LHsibmFtZSI6Im9zcC5pZCIsImRpciI6ImFzYyIsInZhbCI6IjEyMDkzNzUwNjIifV19",
  "postings": [
    {
      "posting_number": "0132112277-0102-1",
      "order_id": 35566808085,
      "order_number": "0132112277-0102",
      "pickup_code_verified_at": null,
      "status": "awaiting_packaging",
      "substatus": "posting_created",
      "delivery_method": {
        "id": 1020005003107121,
        "name": "Доставка Ozon самостоятельно, Ногинск",
        "warehouse_id": 1020005003107121,
        "warehouse": "FBS LikeSK",
        "tpl_provider_id": 24,
        "tpl_provider": "Доставка Ozon"
      },
      "delivery_schema": "fbs",
      "tracking_number": "",
      "tpl_integration_type": "ozon",
      "in_process_at": "2026-03-30T11:26:08Z",
      "integration_type_flow": "ozon",
      "shipment_date": "2026-03-31T09:00:00Z",
      "shipment_date_without_delay": "2026-04-04T16:59:00Z",
      "sorting_center": null,
      "optional": {
        "products_with_possible_mandatory_mark": []
      },
      "cancellation": {
        "cancel_reason_id": 0,
        "cancel_reason": "",
        "cancellation_type": "",
        "cancelled_after_ship": false,
        "affect_cancellation_rating": false,
        "cancellation_initiator": ""
      },
      "container": {
        "cargo_type": "BOX",
        "container_date": "string",
        "container_id": 0,
        "container_number": 0
      },
      "container_sort_type": "string",
      "customer": null,
      "products": [
        {
          "is_blr_traceable": false,
          "is_marketplace_buyout": false,
          "offer_id": "SK-58 (малиновый)",
          "name": "Профессиональная плойка Cronier cr-2013 для афро кудрей 9 мм",
          "sku": 827098843,
          "quantity": 1,
          "imei": [],
          "weight": 0.55,
          "product_color": "малиновый",
          "price": {
            "amount": "1530",
            "currency": "RUB"
          }
        }
      ],
      "addressee": null,
      "barcodes": null,
      "analytics_data": null,
      "destination_place_id": 0,
      "destination_place_name": "",
      "financial_data": null,
      "is_express": false,
      "legal_info": null,
      "quantum_id": 0,
      "require_blr_traceable_attrs": false,
      "requirements": {
        "products_requiring_gtd": [],
        "products_requiring_country": [],
        "products_requiring_mandatory_mark": [],
        "products_requiring_rnpt": [],
        "products_requiring_jw_uin": [],
        "products_requiring_change_country": [],
        "products_requiring_imei": [],
        "products_requiring_weight": []
      },
      "tariffication": {
        "current_tariff_rate": 0,
        "current_tariff_type": "no_discount",
        "current_tariff_charge": {
          "amount": "0",
          "currency": "RUB"
        },
        "current_tariff_min_charge": null,
        "next_tariff_rate": 1,
        "next_tariff_type": "commission",
        "next_tariff_charge": {
          "amount": "50",
          "currency": "RUB"
        },
        "next_tariff_min_charge": {
          "amount": "50",
          "currency": "RUB"
        },
        "next_tariff_starts_at": "2026-03-31T09:00:01Z"
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
        "cancel",
        "has_barcode_for_printing",
        "product_cancel",
        "ship",
        "ship_async"
      ],
      "tariffication_steps": [
        {
          "min_charge": null,
          "tariff_charge": {
            "amount": "0",
            "currency": "RUB"
          },
          "tariff_deadline_at": "2026-03-31T09:00:00Z",
          "tariff_rate": 0,
          "tariff_type": "no_discount"
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
          "tariff_deadline_at": "2026-03-31T21:00:00Z",
          "tariff_rate": 1,
          "tariff_type": "commission"
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
          "tariff_deadline_at": "2026-04-01T09:00:00Z",
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
          "tariff_deadline_at": "2026-04-01T21:00:00Z",
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
          "tariff_deadline_at": "2026-04-02T09:00:00Z",
          "tariff_rate": 2,
          "tariff_type": "commission"
        },
        {
          "min_charge": {
            "amount": "150",
            "currency": "RUB"
          },
          "tariff_charge": {
            "amount": "150",
            "currency": "RUB"
          },
          "tariff_deadline_at": "9999-12-31T23:59:59.999999900Z",
          "tariff_rate": 3,
          "tariff_type": "commission"
        }
      ]
    }
  ],
  "count": 38
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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbs/unfulfilled/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbs/unfulfilled/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbs/unfulfilled/list", {
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
