---
title: "DeliveryMap"
description: "Отрисовать точки на карте"
---

# DeliveryMap

<Badge type="tip" text="POST" /> `/v1/delivery/map`

## Endpoint Overview

- **Category**：🛣️ Delivery & Logistics
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/delivery/map`

::: details View Official Description (Russian)
> Возвращает объединённые кластеры точек самовывоза на области из параметра `viewport`. 
> 
> Используйте значения из параметра `clusters.viewport`, чтобы получить список точек или мелких кластеров внутри большого кластера.
> 
> Используйте метод [/v1/delivery/point/info](#operation/DeliveryPointInfo), чтобы получить информацию о конкретной точке самовывоза.
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
  "$ref": "#/components/schemas/v1DeliveryMapRequest"
}
```
:::

## Responses

### HTTP 200 - Успешно

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1DeliveryMapResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery/map" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery/map"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery/map", {
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
