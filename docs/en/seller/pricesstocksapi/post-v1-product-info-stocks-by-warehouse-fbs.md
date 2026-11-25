---
title: "ProductAPI ProductStocksByWarehouseFbs"
description: "Информация об остатках на складах продавца (FBS и rFBS)"
---

# ProductAPI ProductStocksByWarehouseFbs

<Badge type="tip" text="POST" /> `/v1/product/info/stocks-by-warehouse/fbs`

## Endpoint Overview

- **Category**：💰 Prices & Stocks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs`

::: details View Official Description (Russian)
> <aside class="warning">
>   Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на <a href="#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2">/v2/product/info/stocks-by-warehouse/fbs</a>.
> </aside>
> 
> Передайте в запросе `offer_id` или `sku`. Если укажете оба, будет использован только `sku`.
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
  "$ref": "#/components/schemas/productsv1GetProductInfoStocksByWarehouseFbsRequest"
}
```
:::

## Responses

### HTTP 200 - Количество товаров на складах FBS и rFBS

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/productsv1GetProductInfoStocksByWarehouseFbsResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs", {
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
