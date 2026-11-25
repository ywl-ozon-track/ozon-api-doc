---
title: "CertificateProductsList"
description: "Список товаров, привязанных к сертификату"
---

# CertificateProductsList

<Badge type="tip" text="POST" /> `/v1/product/certificate/products/list`

## Endpoint Overview

- **Category**：📜 Quality Certificates
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/certificate/products/list`

::: details View Official Description (Russian)
> <aside class="warning"> 28 сентября 2026 года отключим параметры <code>page</code> и <code>page_size</code> в запросе метода. Используйте параметры <code>last_id</code> и <code>limit</code>. </aside>
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
  "certificate_id": 624047,
  "product_status_code": "approved",
  "limit": 1000
}
```

## Responses

### HTTP 200 - Список товаров

```json
{
  "result": {
    "items": [
      {
        "product_id": 53110101,
        "sku": 0,
        "product_status_code": "approved"
      }
    ],
    "count": 1
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/products/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/products/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/products/list", {
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
