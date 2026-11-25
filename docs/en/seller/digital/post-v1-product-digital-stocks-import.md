---
title: "DigitalProductAPI StocksImport"
description: "Обновить количество цифровых товаров"
---

# DigitalProductAPI StocksImport

<Badge type="tip" text="POST" /> `/v1/product/digital/stocks/import`

## Endpoint Overview

- **Category**：📌 Digital
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/digital/stocks/import`

::: details View Official Description (Russian)
> Метод доступен только продавцам, работающим с цифровыми товарами. 
> 
> Используйте метод, чтобы изменить информацию о количестве товара в наличии.
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
  "stocks": [
    {
      "stock": "2",
      "offer_id": "Мяч желтый 543561"
    }
  ]
}
```

## Responses

### HTTP 200 - Количество товаров обновлено

```json
{
  "status": [
    {
      "errors": [],
      "offer_id": "Мяч желтый 543561",
      "updated": true,
      "product_id": "29235761",
      "sku": "425291243"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/digital/stocks/import" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/digital/stocks/import"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/digital/stocks/import", {
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
