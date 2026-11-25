---
title: "CarriageCourierContactGet"
description: "Получить контактные данные продавца для курьера"
---

# CarriageCourierContactGet

<Badge type="tip" text="POST" /> `/v1/carriage/courier-contact/get`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/carriage/courier-contact/get`

::: details View Official Description (Russian)
> Возвращает контактные данные продавца, которые добавили или обновили методом [/v1/carriage/courier-contact/set](#operation/CarriageCourierContactSet).
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
  "carriage_id": 5435123
}
```

## Responses

### HTTP 200 - Контактные данные продавца для курьера

```json
{
  "contact": [
    {
      "carriage_id": 5435123,
      "phone": "+86(123)4567-8901",
      "wechat_nickname": "string",
      "comment": "string",
      "updated_at": "2026-07-29T10:38:26.004Z"
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/courier-contact/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/courier-contact/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/courier-contact/get", {
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
