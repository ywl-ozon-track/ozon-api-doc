---
title: "PostingFbsProductTraceableAttribute"
description: "Получить список незаполненных атрибутов для прослеживаемых товаров"
---

# PostingFbsProductTraceableAttribute

<Badge type="tip" text="POST" /> `/v1/posting/fbs/product/traceable/attribute`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/posting/fbs/product/traceable/attribute`

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
  "$ref": "#/components/schemas/v1PostingFbsProductTraceableAttributeRequest"
}
```
:::

## Responses

### HTTP 200 - Список незаполненных атрибутов

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1PostingFbsProductTraceableAttributeResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/product/traceable/attribute" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/product/traceable/attribute"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/product/traceable/attribute", {
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
