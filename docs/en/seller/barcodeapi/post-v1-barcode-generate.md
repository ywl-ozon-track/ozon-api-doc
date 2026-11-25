---
title: "generate-barcode"
description: "Создать штрихкод для товара"
---

# generate-barcode

<Badge type="tip" text="POST" /> `/v1/barcode/generate`

## Endpoint Overview

- **Category**：🏷️ Product Barcodes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/barcode/generate`

::: details View Official Description (Russian)
> Если у товара нет штрихкода, вы можете создать его с помощью этого метода.
> Если штрихкод уже есть, но он не указан в системе Ozon, вы можете привязать его через метод [/v1/barcode/add](#operation/add-barcode).
> 
> За один запрос вы можете создать штрихкоды не больше чем для 100 товаров.
> С одного аккаунта продавца можно использовать метод не больше 20 раз в минуту.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "product_ids": [
    "99887766"
  ]
}
```

## Responses

### HTTP 200 - Штрихкод создан

```json
{
  "errors": [
    {
      "code": "123-123",
      "error": "does not exist",
      "barcode": "112772873170",
      "product_id": 9988776612
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
curl -X POST "https://api-seller.ozon.ru/v1/barcode/generate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/barcode/generate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/barcode/generate", {
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
