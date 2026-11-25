---
title: "ProductAPI GetProductPlacementZoneInfo"
description: "Получить зоны размещения товаров по SKU перед поставкой"
---

# ProductAPI GetProductPlacementZoneInfo

<Badge type="tip" text="POST" /> `/v1/product/placement-zone/info`

## Endpoint Overview

- **Category**：📂 Categories & Attributes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/placement-zone/info`

::: details View Official Description (Russian)
> Вы можете отправить не больше 10 запросов в секунду.
> 
> [Подробнее о зонах размещения в Базе знаний продавца](https://seller-edu.ozon.ru/libra/fbo/gruzomesta-i-podgotovka-k-otgruzke/k-kakoi-zone-otnositsya-tovar)
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
  "$ref": "#/components/schemas/v1GetProductPlacementZoneInfoRequest"
}
```
:::

## Responses

### HTTP 200 - Информация о зонах размещения

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GetProductPlacementZoneInfoResponse"
}
```
:::

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/product/placement-zone/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/placement-zone/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/placement-zone/info", {
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
