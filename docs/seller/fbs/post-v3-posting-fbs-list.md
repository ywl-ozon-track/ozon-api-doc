---
title: "获取发货包裹列表"
description: "获取发货包裹列表"
---

# 获取发货包裹列表

<Badge type="tip" text="POST" /> `/v3/posting/fbs/list`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/posting/fbs/list`
- **详细说明**：

> <aside class="warning">
> С 31 августа 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFbsList">/v4/posting/fbs/list</a>.
> </aside>
> 
> Возвращает список отправлений за указанный период времени — он должен быть не больше одного года.
> 
> `has_next = true` в ответе может значить, что вернули не весь массив отправлений. Чтобы получить информацию об остальных отправлениях, сделайте новый запрос с другим значением `offset`.
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
  "dir": "ASC",
  "filter": {
    "delivery_method_id": [
      "21321684811000"
    ],
    "integration_type_flow": [
      "ozon"
    ],
    "is_blr_traceable": true,
    "is_quantum": false,
    "last_changed_status_date": {
      "from": "2023-11-03T11:47:39.878Z",
      "to": "2023-11-03T11:47:39.878Z"
    },
    "order_id": 0,
    "provider_id": [
      "24"
    ],
    "since": "2023-11-03T11:47:39.878Z",
    "status": "awaiting_packaging",
    "to": "2023-11-03T11:47:39.878Z",
    "warehouse_id": [
      "21321684811000"
    ]
  },
  "limit": 100,
  "offset": 0,
  "with": {
    "analytics_data": true,
    "barcodes": true,
    "financial_data": true,
    "translit": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список отправлений

```json
{
  "result": {
    "postings": [
      {
        "posting_number": "0132112277-0101-1",
        "order_id": 35566798085,
        "order_number": "0132112277-0101",
        "status": "awaiting_packaging",
        "delivery_method": {
          "id": 1020005003107121,
          "name": "Доставка Ozon самостоятельно, Ногинск",
          "warehouse_id": 1020005003107121,
          "warehouse": "FBS LikeSK",
          "tpl_provider_id": 24,
          "tpl_provider": "Доставка Ozon"
        },
        "tracking_number": "",
        "tpl_integration_type": "ozon",
        "in_process_at": "2026-03-30T11:26:00Z",
        "integration_type_flow": "ozon",
        "shipment_date": "2026-03-31T09:00:00Z",
        "delivering_date": null,
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
            "price": "1530.0000",
            "offer_id": "SK-58 (малиновый)",
            "name": "Профессиональная плойка Cronier cr-2013 для афро кудрей 9 мм",
            "sku": 827098843,
            "quantity": 1,
            "currency_code": "RUB",
            "is_blr_traceable": false,
            "is_marketplace_buyout": false,
            "imei": []
          }
        ],
        "addressee": null,
        "barcodes": {
          "upper_barcode": "711008270053000",
          "lower_barcode": "711008270053000"
        },
        "analytics_data": {
          "region": "",
          "city": "",
          "delivery_type": "PVZ",
          "is_premium": false,
          "payment_type_group_name": "Ozon Банк",
          "warehouse_id": 1020005003107121,
          "warehouse": "FBS LikeSK",
          "tpl_provider_id": 24,
          "tpl_provider": "Доставка Ozon",
          "delivery_date_begin": "2026-04-11T15:00:00Z",
          "delivery_date_end": "2026-04-11T16:00:00Z",
          "is_legal": false,
          "client_delivery_date_begin": null,
          "client_delivery_date_end": null
        },
        "financial_data": {
          "products": [
            {
              "commission_amount": 0,
              "commission_percent": 0,
              "payout": 0,
              "product_id": 827098843,
              "old_price": 1530,
              "price": 1530,
              "total_discount_value": 0,
              "total_discount_percent": 0,
              "actions": [
                "Округление"
              ],
              "quantity": 1,
              "currency_code": "RUB",
              "customer_currency_code": "RUB",
              "customer_price": 662.86
            }
          ],
          "cluster_from": "Moskva, MO i Dal`nie regiony`",
          "cluster_to": "Rostov"
        },
        "is_express": false,
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
        "parent_posting_number": "",
        "available_actions": [
          "cancel",
          "has_barcode_for_printing",
          "product_cancel",
          "ship",
          "ship_async"
        ],
        "multi_box_qty": 1,
        "is_multibox": false,
        "substatus": "posting_created",
        "prr_option": "",
        "quantum_id": 0,
        "tariffication": {
          "current_tariff_rate": 0,
          "current_tariff_type": "no_discount",
          "current_tariff_charge": "",
          "current_tariff_charge_currency_code": "RUB",
          "next_tariff_rate": 0,
          "next_tariff_type": "commission",
          "next_tariff_charge": "50",
          "next_tariff_starts_at": "2026-03-31T09:00:01Z",
          "next_tariff_charge_currency_code": "RUB"
        },
        "destination_place_id": 0,
        "destination_place_name": "",
        "is_presortable": false,
        "pickup_code_verified_at": null,
        "optional": {
          "products_with_possible_mandatory_mark": []
        },
        "legal_info": {
          "company_name": "",
          "inn": "",
          "kpp": ""
        },
        "shipment_date_without_delay": "2026-04-04T16:59:00Z",
        "sorting_center": null,
        "require_blr_traceable_attrs": false,
        "is_click_and_collect": false,
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
    "has_next": false
  }
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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbs/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbs/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbs/list", {
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
