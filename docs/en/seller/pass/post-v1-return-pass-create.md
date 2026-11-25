---
title: "returnPassCreate"
description: "Создать пропуск для возврата"
---

# returnPassCreate

<Badge type="tip" text="POST" /> `/v1/return/pass/create`

## Endpoint Overview

- **Category**：🎫 Warehouse Gate Passes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/return/pass/create`

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "arrival_passes": [
    {
      "arrival_time": "2026-03-17T10:00:00Z",
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "dropoff_point_id": 7000123456,
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT",
      "warehouse_id": 3000007863
    }
  ]
}
```

## Responses

### HTTP 200 - Пропуск создан

```json
{
  "arrival_pass_ids": [
    6000123456
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/return/pass/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/pass/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/pass/create", {
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
