---
title: "ProductAPI ProductCertificationList"
description: "Список сертифицируемых категорий"
---

# ProductAPI ProductCertificationList

<Badge type="tip" text="POST" /> `/v2/product/certification/list`

## Endpoint Overview

- **Category**：📜 Quality Certificates
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/product/certification/list`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "page": 1,
  "page_size": 100
}
```

## Responses

### HTTP 200 - Список сертифицируемых категорий

```json
{
  "certification": [
    {
      "category_id": 582676,
      "category_name": "Витаминно-минеральные комплексы для взрослых",
      "is_required": true,
      "type_id": 113,
      "type_name": "products"
    }
  ],
  "total": 1
}
```

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/product/certification/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/certification/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/certification/list", {
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
