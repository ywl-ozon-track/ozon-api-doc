---
title: "ReportAPI ReportList"
description: "Список отчётов"
---

# ReportAPI ReportList

<Badge type="tip" text="POST" /> `/v1/report/list`

## Endpoint Overview

- **Category**：📌 ReportAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/list`

::: details View Official Description (Russian)
> Возвращает список отчётов, которые были сформированы раньше.
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
  "page": 1,
  "page_size": 1000,
  "report_type": "ALL"
}
```

## Responses

### HTTP 200 - Список отчётов

```json
{
  "result": {
    "reports": [
      {
        "additional_data": [
          {
            "key": "key",
            "value": "value"
          }
        ],
        "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69",
        "status": "success",
        "error": "",
        "expires_at": "2025-11-10T11:35:10.028Z",
        "file": "https://ir.ozone.ru/s3/item-picture-6/f3/ce/f4ceae54b323213d3e61e59c323bd8e5.csvv",
        "report_type": "seller_products",
        "params": {
          "visibility": "3"
        },
        "created_at": "2019-02-06T12:09:47.258062Z"
      },
      {
        "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69",
        "status": "success",
        "error": "",
        "file": "https://ir.ozone.ru/s3/item-picture-6/f3/ce/f4ceae54b323213d3e61e59c323bd8e5.csv",
        "report_type": "seller_products",
        "params": {
          "visibility": "3"
        },
        "created_at": "2019-02-15T08:34:32.267178Z"
      }
    ],
    "total": 2
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
curl -X POST "https://api-seller.ozon.ru/v1/report/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/list", {
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
