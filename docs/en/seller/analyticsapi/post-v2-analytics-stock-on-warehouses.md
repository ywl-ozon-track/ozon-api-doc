---
title: "AnalyticsAPI AnalyticsGetStockOnWarehousesV2"
description: "Отчёт по остаткам и товарам"
---

# AnalyticsAPI AnalyticsGetStockOnWarehousesV2

<Badge type="tip" text="POST" /> `/v2/analytics/stock_on_warehouses`

## Endpoint Overview

- **Category**：📈 Analytics & Data Reports
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses`

::: details View Official Description (Russian)
> 
> <aside class="warning">
> В будущем метод будет отключён. Переключитесь на <a href="#operation/AnalyticsAPI_AnalyticsStocks">/v1/analytics/stocks</a>.
> </aside>
> 
> Метод для получения отчёта по остаткам и товарам в перемещении по складам Ozon.
> 
> <aside class="warning">
> Отличается от отчёта в разделе <b>Аналитика → Отчёты → Отчёт по остаткам и товарам в пути на склады Ozon</b> в личном кабинете.
> </aside>
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
  "limit": 1000,
  "offset": 0,
  "warehouse_type": "ALL"
}
```

## Responses

### HTTP 200 - Отчёт по остаткам и товарам

```json
{
  "result": {
    "rows": [
      {
        "free_to_sell_amount": 0,
        "item_code": "string",
        "item_name": "string",
        "promised_amount": 0,
        "reserved_amount": 0,
        "sku": 0,
        "warehouse_name": "string"
      }
    ]
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
curl -X POST "https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses", {
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
