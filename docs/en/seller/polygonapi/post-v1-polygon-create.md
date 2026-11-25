---
title: "PolygonAPI CreatePolygon"
description: "Создайте полигон доставки"
---

# PolygonAPI CreatePolygon

<Badge type="tip" text="POST" /> `/v1/polygon/create`

## Endpoint Overview

- **Category**：📌 PolygonAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/polygon/create`

::: details View Official Description (Russian)
> Вы можете добавить полигон к методу доставки.
> 
> Создайте полигон, получив его координаты на https://geojson.io: отметьте на карте минимум 3 точки и соедините их линиями.
> 
> <aside class="warning">
> Сервис <a href="https://geojson.io">geojson.io</a> возвращает координаты в формате <code>[[[long lat]]]</code>. Поменяйте местами широту и долготу в запросе метода.
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
  "coordinates": "[[[30.149574279785153,59.86550435303646],[30.21205902099609,59.846884387977326],[30.255661010742184,59.86240174913176],[30.149574279785153,59.86550435303646]]]"
}
```

## Responses

### HTTP 200 - Полигон создан

```json
{
  "polygonId": "1323"
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus_v1PolygonCreate"
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
curl -X POST "https://api-seller.ozon.ru/v1/polygon/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/polygon/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/polygon/create", {
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
