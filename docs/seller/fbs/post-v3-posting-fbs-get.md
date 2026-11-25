---
title: "获取информацию об отправлении по идентификатору"
description: "获取информацию об отправлении по идентификатору"
---

# 获取информацию об отправлении по идентификатору

<Badge type="tip" text="POST" /> `/v3/posting/fbs/get`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/posting/fbs/get`
- **详细说明**：

> Чтобы получать актуальную дату отгрузки, регулярно обновляйте информацию об отправлениях или подключите [пуш-уведомления](#tag/push_start).


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "posting_number": "57195475-0050-3",
  "with": {
    "analytics_data": false,
    "barcodes": false,
    "financial_data": false,
    "legal_info": false,
    "product_exemplars": false,
    "related_postings": true,
    "translit": false
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Информация об отправлении

```json
{
  "result": {
    "posting_number": "0132112277-0101-1",
    "order_id": 35566798085,
    "order_number": "0132112277-0101",
    "status": "awaiting_packaging",
    "external_order": {
      "is_external": false,
      "platform_name": ""
    },
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
    "provider_status": "",
    "delivery_price": "",
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
    "addressee": null,
    "products": [
      {
        "price": "1530.0000",
        "offer_id": "SK-58 (малиновый)",
        "name": "Профессиональная плойка Cronier cr-2013 для афро кудрей 9 мм",
        "sku": 827098843,
        "quantity": 1,
        "dimensions": {
          "height": "150.00",
          "length": "500.00",
          "weight": "550",
          "width": "300.00"
        },
        "currency_code": "RUB",
        "is_blr_traceable": false,
        "is_marketplace_buyout": false,
        "has_imei": false,
        "weight_max": 0.55,
        "weight_min": 0,
        "is_weight_needed": false
      }
    ],
    "barcodes": null,
    "analytics_data": null,
    "financial_data": null,
    "additional_data": [],
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
    "product_exemplars": null,
    "courier": null,
    "parent_posting_number": "",
    "related_postings": null,
    "available_actions": [
      "cancel",
      "has_barcode_for_printing",
      "product_cancel",
      "ship",
      "ship_async"
    ],
    "multi_box_qty": 1,
    "is_multibox": false,
    "scanit": "ii30525117479",
    "substatus": "posting_created",
    "previous_substatus": "posting_split_pending",
    "prr_option": {
      "code": "",
      "price": "",
      "currency_code": "RUB",
      "floor": ""
    },
    "tariffication": {
      "current_tariff_rate": 1,
      "current_tariff_type": "no_discount",
      "current_tariff_charge": "",
      "current_tariff_charge_currency_code": "RUB",
      "next_tariff_rate": 1,
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
    "fact_delivery_date": null,
    "legal_info": {
      "company_name": "",
      "inn": "",
      "kpp": ""
    },
    "related_weight_postings": [],
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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbs/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbs/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbs/get", {
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
