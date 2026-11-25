---
title: "ProductAPI ProductGetRelatedSKU"
description: "Получить связанные SKU"
---

# ProductAPI ProductGetRelatedSKU

<Badge type="tip" text="POST" /> `/v1/product/related-sku/get`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/related-sku/get`

::: details View Official Description (Russian)
> Метод для получения единого SKU по старым идентификаторам SKU FBS и SKU FBO. 
> В ответе будут все SKU, связанные с переданными.
> 
> Метод может обработать любые SKU, даже скрытые или удалённые.
> 
> Передавайте до 200 SKU в одном запросе.
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
  "sku": [
    "88997766"
  ]
}
```

## Responses

### HTTP 200 - Информация об SKU

```json
{
  "items": [
    {
      "availability": "AVAILABLE",
      "deleted_at": "2019-08-24T14:15:22Z",
      "delivery_schema": "SDS",
      "product_id": "door",
      "sku": "88997766"
    }
  ],
  "errors": [
    {
      "code": "das",
      "sku": "88997766",
      "message": "sku does not exist"
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/product/related-sku/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/related-sku/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/related-sku/get", {
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
