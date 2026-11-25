---
title: "ReportAPI CreateStockByWarehouseReport"
description: "Отчёт об остатках на FBS-складе"
---

# ReportAPI CreateStockByWarehouseReport

<Badge type="tip" text="POST" /> `/v1/report/warehouse/stock`

## Endpoint Overview

- **Category**：📌 ReportAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/warehouse/stock`

::: details View Official Description (Russian)
> 
> Отчёт с информацией о количестве доступных и зарезервированных единиц товара на складе.
> Соответствует разделу **FBS → Управление логистикой → Управление остатками → Скачать в XLS** в личном кабинете.
> 
> В результате запроса будет не сам отчёт, а его уникальный идентификатор. 
> Чтобы получить отчёт, отправьте идентификатор в запросе метода [/v1/report/info](#operation/ReportAPI_ReportInfo).
> 
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
  "language": "DEFAULT",
  "warehouseId": [
    "1020002425123000"
  ]
}
```

## Responses

### HTTP 200 - Результат запроса

```json
{
  "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69"
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
curl -X POST "https://api-seller.ozon.ru/v1/report/warehouse/stock" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/warehouse/stock"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/warehouse/stock", {
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
