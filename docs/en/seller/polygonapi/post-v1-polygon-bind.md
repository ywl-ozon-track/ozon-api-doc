---
title: "PolygonAPI BindPolygon"
description: "Свяжите метод доставки с полигоном доставки"
---

# PolygonAPI BindPolygon

<Badge type="tip" text="POST" /> `/v1/polygon/bind`

## Endpoint Overview

- **Category**：📌 PolygonAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/polygon/bind`

::: details View Official Description (Russian)
> <aside class="warning">
> Метод устаревает и будет отключён в будущем. Переключитесь на <a href="#operation/PolygonBind">/v2/polygon/bind </a>.
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
  "delivery_method_id": 0,
  "polygons": [
    {
      "polygon_id": "1323",
      "time": "30"
    }
  ],
  "warehouse_location": {
    "lat": "58.52391272075821",
    "lon": "31.236791610717773"
  }
}
```

## Responses

### HTTP 200 - Успешно

```json
{}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus_v1PolygonBind"
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
curl -X POST "https://api-seller.ozon.ru/v1/polygon/bind" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/polygon/bind"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/polygon/bind", {
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
