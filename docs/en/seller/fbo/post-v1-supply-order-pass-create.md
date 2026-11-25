---
title: "SupplyOrderAPI SupplyOrderPassCreate"
description: "Указать данные о водителе и автомобиле"
---

# SupplyOrderAPI SupplyOrderPassCreate

<Badge type="tip" text="POST" /> `/v1/supply-order/pass/create`

## Endpoint Overview

- **Category**：📌 FBO
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/pass/create`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "supply_order_id": 1001,
  "vehicle": {
    "driver_name": "Иван Петров",
    "driver_phone": "+7 (999) 123-45-67",
    "vehicle_model": "ГАЗель NEXT",
    "vehicle_number": "А 123 ВВ 799"
  }
}
```

## Responses

### HTTP 200 - Данные указаны

```json
{
  "error_reasons": [
    "SET_VEHICLE_ERROR_UNSPECIFIED"
  ],
  "operation_id": "550e8400-e29b-41d4-a716-446655440000"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/pass/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/pass/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/pass/create", {
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
