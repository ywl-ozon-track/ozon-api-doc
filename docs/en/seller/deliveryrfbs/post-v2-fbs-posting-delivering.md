---
title: "PostingAPI FbsPostingDelivering"
description: "Изменить статус на «Доставляется»"
---

# PostingAPI FbsPostingDelivering

<Badge type="tip" text="POST" /> `/v2/fbs/posting/delivering`

## Endpoint Overview

- **Category**：📌 DeliveryrFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/fbs/posting/delivering`

::: details View Official Description (Russian)
> <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>
> 
> Перевести отправление в статус «Доставляется», если используется сторонняя служба доставки.
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
  "posting_number": [
    "33920157-0018-1"
  ]
}
```

## Responses

### HTTP 200 - Статус изменён

```json
{
  "result": [
    {
      "error": [],
      "posting_number": "33920157-0018-1",
      "result": true
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
curl -X POST "https://api-seller.ozon.ru/v2/fbs/posting/delivering" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/fbs/posting/delivering"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/fbs/posting/delivering", {
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
