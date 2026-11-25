---
title: "WarehouseListV2"
description: "Список складов"
---

# WarehouseListV2

<Badge type="tip" text="POST" /> `/v2/warehouse/list`

## Endpoint Overview

- **Category**：🏭 Warehouses (FBS & rFBS)
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/warehouse/list`

::: details View Official Description (Russian)
> Метод возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/warehouse/fbo/list](#operation/SupplyDraftAPI_DraftGetWarehouseFboList).
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
  "cursor": "string",
  "limit": 0,
  "warehouse_ids": [
    20605650762000
  ]
}
```

## Responses

### HTTP 200 - Список складов

```json
{
  "cursor": "string",
  "warehouses": [
    {
      "address_info": {
        "address": "Россия, Московская Область, Софьино, промзона ССТ, к2, 2",
        "latitude": 55.495093,
        "longitude": 38.172731,
        "utc": "UTC+03:00"
      },
      "carriage_label_type": "BIG",
      "courier_comment": "",
      "courier_phones": [
        "+7(999)999-99-99"
      ],
      "created_at": "2025-03-11T11:57:51.811Z",
      "first_mile": {
        "type": "PICK_UP",
        "dropoff_point_id": "1020002075314000",
        "timeslot_from": "20:59",
        "timeslot_id": 287231,
        "timeslot_to": "21:00",
        "first_mile_is_changing": false
      },
      "has_entrusted_acceptance": true,
      "has_postings_limit": false,
      "is_auto_assembly": true,
      "is_kgt": true,
      "is_rfbs": true,
      "is_waybill_enabled": true,
      "min_postings_limit": 2,
      "is_comfort": true,
      "is_express": true,
      "warehouse_type": "string",
      "cut_in_time": 0,
      "name": "17023",
      "phone": "+7(999)999-99-99",
      "postings_limit": -1,
      "sla_cut_in": 2939,
      "status": "created",
      "timetable": {
        "timetable_from": "2025-03-11T11:57:51.811Z",
        "timetable_to": "2025-03-11T11:57:51.811Z",
        "working_hours": [
          {
            "time_from": "2025-03-11T11:57:51.811Z",
            "time_to": "2025-03-11T11:57:51.811Z"
          }
        ]
      },
      "updated_at": "2025-03-11T11:57:51.811Z",
      "warehouse_id": 20605650762000,
      "with_item_list": true,
      "working_days": [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY"
      ]
    }
  ],
  "has_next": "string"
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v2/warehouse/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/warehouse/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/warehouse/list", {
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
