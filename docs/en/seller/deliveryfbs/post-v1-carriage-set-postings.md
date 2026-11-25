---
title: "CarriageAPI SetPostings"
description: "Изменение состава отгрузки"
---

# CarriageAPI SetPostings

<Badge type="tip" text="POST" /> `/v1/carriage/set-postings`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/carriage/set-postings`

::: details View Official Description (Russian)
> 
> <aside class="warning">
> Метод недоступен для продавцов из СНГ. <br>
> 
> Полностью перезаписывает список заказов в отгрузке. Передавайте только те заказы, которые находятся в статусе <code>Ожидает отгрузки</code>, и вы готовы их отгрузить.    
> 
> Менять состав можно только у отгрузок со статусом `new`.
> </aside>
> 
> <br>
> 
> <aside class="notice">
> Чтобы вернуться к списку заказов, удалите отгрузку с помощью метода <a href="#operation/CarriageAPI_CarriageCancel">/v1/carriage/cancel</a>, и создайте новую.
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
  "$ref": "#/components/schemas/v1SetPostingsRequest"
}
```
:::

## Responses

### HTTP 200 - Информация об отправлении

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1SetPostingsResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/set-postings" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/set-postings"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/set-postings", {
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
