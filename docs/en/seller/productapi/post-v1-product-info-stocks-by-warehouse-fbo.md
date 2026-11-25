---
title: "GetProductInfoStocksByWarehouseFbo"
description: "Получить информацию о стоках на складах FBO"
---

# GetProductInfoStocksByWarehouseFbo

<Badge type="tip" text="POST" /> `/v1/product/info/stocks-by-warehouse/fbo`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo`

::: details View Official Description (Russian)
> Передайте в запросе `offer_ids` или `skus`.
> 
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/2177-Novyi-metod-dlia-polucheniia-ostatkov-FBO/) в сообществе разработчиков Ozon for dev.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboRequest"
}
```
:::

## Responses

### HTTP 200 - Информация о стоках.

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboResponse"
}
```
:::

### HTTP default - Ошибка.

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo", {
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
