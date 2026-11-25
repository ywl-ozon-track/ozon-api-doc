---
title: "CarriageAPI CarriageDeliveryList"
description: "Список методов доставки и отгрузок"
---

# CarriageAPI CarriageDeliveryList

<Badge type="tip" text="POST" /> `/v1/carriage/delivery/list`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/carriage/delivery/list`

::: details View Official Description (Russian)
> <aside class="warning">
>   Метод не возвращает информацию по методам доставки, у которых нет отправлений.
> </aside>
> 
> Используйте метод, чтобы получить список созданных отгрузок для метода доставки и их статусы.  
> 
> <aside class="warning">
>   20 марта 2026 года отключим метод. Переключитесь на <a href="#operation/CarriageAPI_CarriageDeliveryListV2">/v2/carriage/delivery/list</a>.
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

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CarriageDeliveryListRequest"
}
```
:::

## Responses

### HTTP 200 - Список методов и отгрузок

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CarriageDeliveryListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/delivery/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/delivery/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/delivery/list", {
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
