---
title: "SupplyOrderList"
description: "Список заявок на поставку на склад Ozon"
---

# SupplyOrderList

<Badge type="tip" text="POST" /> `/v3/supply-order/list`

## Endpoint Overview

- **Category**：📌 FBO
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v3/supply-order/list`

::: details View Official Description (Russian)
> Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "filter": {
    "states": [
      "COMPLETED"
    ]
  },
  "last_id": "null",
  "limit": 1,
  "sort_by": "ORDER_CREATION",
  "sort_dir": "DESC"
}
```

## Responses

### HTTP 200 - Список заявок на поставку

```json
{
  "order_ids": [
    3424231244
  ],
  "last_id": "string"
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
curl -X POST "https://api-seller.ozon.ru/v3/supply-order/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/supply-order/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/supply-order/list", {
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
