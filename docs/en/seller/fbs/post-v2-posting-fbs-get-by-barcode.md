---
title: "PostingAPI GetFbsPostingByBarcode"
description: "Получить информацию об отправлении по штрихкоду"
---

# PostingAPI GetFbsPostingByBarcode

<Badge type="tip" text="POST" /> `/v2/posting/fbs/get-by-barcode`

## Endpoint Overview

- **Category**：📌 FBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/posting/fbs/get-by-barcode`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "barcode": "20325804886000"
}
```

## Responses

### HTTP 200 - Информация об отправлении

```json
{
  "result": {
    "order_id": 47558522075,
    "order_number": "2130415463-0013",
    "posting_number": "2130415463-0013-1",
    "status": "delivered",
    "cancel_reason_id": 0,
    "created_at": "2025-01-29T08:58:07Z",
    "in_process_at": "2025-01-29T08:59:40Z",
    "shipment_date": "2025-01-29T18:00:00Z",
    "products": [
      {
        "sku": 498274975,
        "name": "Стульчик для кормления ребенка",
        "quantity": 1,
        "offer_id": "6460551001",
        "price": "2300.0000"
      }
    ],
    "barcodes": {
      "upper_barcode": "%101%10293145035",
      "lower_barcode": "201864523528000"
    }
  }
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/get-by-barcode" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/get-by-barcode"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/get-by-barcode", {
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
