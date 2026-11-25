---
title: "PostingAPI FbsPostingLastMile"
description: "Изменить статус на «Последняя миля»"
---

# PostingAPI FbsPostingLastMile

<Badge type="tip" text="POST" /> `/v2/fbs/posting/last-mile`

## Endpoint Overview

- **Category**：📌 DeliveryrFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/fbs/posting/last-mile`

::: details View Official Description (Russian)
> <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>
> 
> Перевести отправление в статус «Последняя миля», если используется сторонняя служба доставки.
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
    "48173252-0033-2"
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
      "posting_number": "48173252-0033-2",
      "result": true
    }
  ]
}
```

### HTTP 400 - Invalid parameter

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Access denied

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Response not found

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Request conflict

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Internal server error

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
curl -X POST "https://api-seller.ozon.ru/v2/fbs/posting/last-mile" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/fbs/posting/last-mile"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/fbs/posting/last-mile", {
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
