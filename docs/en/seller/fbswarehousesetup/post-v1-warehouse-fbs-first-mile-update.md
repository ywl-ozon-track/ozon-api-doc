---
title: "UpdateWarehouseFBSFirstMile"
description: "Обновить первую милю"
---

# UpdateWarehouseFBSFirstMile

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/first-mile/update`

## Endpoint Overview

- **Category**：📌 FBSWarehouseSetup
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "courier_return_warehouse_info": {
    "comment": "Комментарий",
    "courier_return_warehouse_id": 0,
    "is_courier_return_warehouse_match": false
  },
  "first_mile_type": "DROP_OFF",
  "drop_off_point_id": 0,
  "cut_in_time": 0,
  "timeslot_id": 0,
  "return_point_id": 0,
  "warehouse_id": 0
}
```

## Responses

### HTTP 200 - Первая миля обновлена

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1UpdateWarehouseFBSFirstMileResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update", {
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
