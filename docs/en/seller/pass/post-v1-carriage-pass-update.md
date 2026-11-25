---
title: "carriagePassUpdate"
description: "Обновить пропуск"
---

# carriagePassUpdate

<Badge type="tip" text="POST" /> `/v1/carriage/pass/update`

## Endpoint Overview

- **Category**：🎫 Warehouse Gate Passes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/carriage/pass/update`

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "carriage_id": 5000123456,
  "arrival_passes": [
    {
      "id": 6000123456,
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT",
      "with_returns": true
    }
  ]
}
```

## Responses

### HTTP 200 - Пропуск обновлён

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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/pass/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/pass/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/pass/update", {
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
