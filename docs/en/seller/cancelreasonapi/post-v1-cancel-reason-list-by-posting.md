---
title: "CancelReasonAPI CancelReasonListByPosting"
description: "Причины отмены отправления"
---

# CancelReasonAPI CancelReasonListByPosting

<Badge type="tip" text="POST" /> `/v1/cancel-reason/list-by-posting`

## Endpoint Overview

- **Category**：❌ Cancellation Reasons
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting`

::: details View Official Description (Russian)
> Возвращает возможные причины отмены для отправления.
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
  "$ref": "#/components/schemas/v1CancelReasonListByPostingRequest"
}
```
:::

## Responses

### HTTP 200 - Причины отмены отправления

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CancelReasonListByPostingResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting", {
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
