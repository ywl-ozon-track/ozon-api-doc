---
title: "PostingAPI PostingFBSActCreate"
description: "Подтвердить отгрузку и создать документы"
---

# PostingAPI PostingFBSActCreate

<Badge type="tip" text="POST" /> `/v2/posting/fbs/act/create`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/posting/fbs/act/create`

::: details View Official Description (Russian)
> <aside class="warning">
>  Метод устаревает и будет отключён 7 сентября 2026. Переключитесь на <a href="#operation/CarriageAPI_CarriageCreate">/v1/carriage/create</a> и <a href="#operation/CarriageAPI_CarriageApprove">/v1/carriage/approve</a>.
> </aside> 
> Подтверждает отгрузку и запускает формирование транспортной накладной и штрихкода для отгрузки.
> Для продавцов из России также запускается формирование листа отгрузки, а для продавцов из СНГ — акта приёма-передачи.
> 
> Чтобы сформировать и получить документы, переведите отправление в статус `awaiting_deliver`.
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
  "containers_count": 1,
  "delivery_method_id": 230039077005,
  "departure_date": "2022-06-10T11:42:06.444Z"
}
```

## Responses

### HTTP 200 - Отгрузка подтверждена

```json
{
  "result": {
    "id": 5819327210249
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/act/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/act/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/act/create", {
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
