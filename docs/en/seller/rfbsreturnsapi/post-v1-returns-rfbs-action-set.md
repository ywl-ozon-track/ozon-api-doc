---
title: "ReturnsAPI ReturnsRfbsActionSet"
description: "Передать доступные действия для rFBS возвратов"
---

# ReturnsAPI ReturnsRfbsActionSet

<Badge type="tip" text="POST" /> `/v1/returns/rfbs/action/set`

## Endpoint Overview

- **Category**：📌 RFBSReturnsAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/returns/rfbs/action/set`

::: details View Official Description (Russian)
> Метод для передачи действий для возврата rFBS.
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
  "$ref": "#/components/schemas/v1ReturnsRfbsActionSetRequest"
}
```
:::

## Responses

### HTTP 200 - Действие передано

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
curl -X POST "https://api-seller.ozon.ru/v1/returns/rfbs/action/set" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/returns/rfbs/action/set"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/returns/rfbs/action/set", {
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
