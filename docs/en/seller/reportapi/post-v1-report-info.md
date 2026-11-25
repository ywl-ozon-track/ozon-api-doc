---
title: "ReportAPI ReportInfo"
description: "Информация об отчёте"
---

# ReportAPI ReportInfo

<Badge type="tip" text="POST" /> `/v1/report/info`

## Endpoint Overview

- **Category**：📌 ReportAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/info`

::: details View Official Description (Russian)
> Возвращает информацию о созданном ранее отчёте по его идентификатору.
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
  "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69"
}
```

## Responses

### HTTP 200 - Информация об отчёте

```json
{
  "result": {
    "additional_data": [
      {
        "key": "key",
        "value": "value"
      }
    ],
    "code": "REPORT_seller_products_924336_1720170405_a9ea2f27",
    "status": "success",
    "error": "",
    "expires_at": "2025-11-10T11:16:00.267Z",
    "file": "https://ir.ozone.ru/s3/item-picture-6/f3/ce/f4ceae54b323213d3e61e59c323bd8e5.csv",
    "report_type": "seller_products",
    "params": {},
    "created_at": "2021-11-25T14:54:55.688260Z"
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
curl -X POST "https://api-seller.ozon.ru/v1/report/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/info", {
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
