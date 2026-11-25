---
title: "WarehouseFbsCreatePickUpTimeslotList"
description: "Получить список таймслотов для создания склада с отгрузкой pick-up"
---

# WarehouseFbsCreatePickUpTimeslotList

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/create/pick-up/timeslot/list`

## Endpoint Overview

- **Category**：📌 FBSWarehouseSetup
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "is_kgt": true,
  "address_coordinates": {
    "latitude": 55.7558,
    "longitude": 37.6173
  }
}
```

## Responses

### HTTP 200 - Список таймслотов

```json
{
  "is_pickup_supported": true,
  "timeslots": [
    {
      "id": 123456789,
      "from": "00:00",
      "to": "00:00"
    },
    {
      "id": 987654321,
      "from": "00:00",
      "to": "00:00"
    }
  ]
}
```

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list", {
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
