---
title: "CreatePlacementBySuppliesReport"
description: "Получить отчёт о стоимости размещения по поставкам"
---

# CreatePlacementBySuppliesReport

<Badge type="tip" text="POST" /> `/v1/report/placement/by-supplies/create`

## Endpoint Overview

- **Category**：📌 ReportAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/placement/by-supplies/create`

::: details View Official Description (Russian)
> Соответствует разделу **FBO → Стоимость размещения** в личном кабинете.
> 
> Отчёт можно получить не больше 5 раз в день.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CreatePlacementBySuppliesReportRequest"
}
```
:::

## Responses

### HTTP 200 - Отчёт о стоимости размещения

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CreatePlacementBySuppliesReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/report/placement/by-supplies/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/placement/by-supplies/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/placement/by-supplies/create", {
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
