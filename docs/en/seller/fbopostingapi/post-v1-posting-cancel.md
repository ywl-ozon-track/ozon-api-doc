---
title: "PostingAPI PostingCancel"
description: "Отменить отправление из заказа"
---

# PostingAPI PostingCancel

<Badge type="tip" text="POST" /> `/v1/posting/cancel`

## Endpoint Overview

- **Category**：📦 FBO Orders & Postings
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/posting/cancel`

::: details View Official Description (Russian)
> Отменяет отправление из заказа. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-posting](#operation/CancelReasonAPI_CancelReasonListByPosting).
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
  "$ref": "#/components/schemas/v1PostingCancelRequest"
}
```
:::

## Responses

### HTTP 200 - Сообщение со статусом отмены

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1PostingCancelResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/cancel", {
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
