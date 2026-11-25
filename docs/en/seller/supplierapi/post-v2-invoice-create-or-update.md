---
title: "InvoiceAPI InvoiceCreateOrUpdateV2"
description: "Создать или изменить счёт-фактуру"
---

# InvoiceAPI InvoiceCreateOrUpdateV2

<Badge type="tip" text="POST" /> `/v2/invoice/create-or-update`

## Endpoint Overview

- **Category**：📌 SupplierAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/invoice/create-or-update`

::: details View Official Description (Russian)
> Создание или изменение таможенного счёта-фактуры для возврата НДС продавцам из Турции. Вы можете создать счёт-фактуру только для отправлений в статусах `awaiting_approve` или `awaiting_packaging`.
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
  "HS_code": [
    {
      "sku": "SKU123",
      "code": "534758761999"
    },
    {
      "sku": "SKU456",
      "code": "534758761000"
    },
    {
      "sku": "SKU789",
      "code": "534758761777"
    }
  ],
  "date": "2023-08-01T12:08:44.342Z",
  "number": "424fdsf234",
  "posting_number": "33920146-0252-1",
  "price": 234.34,
  "price_currency": "RUB",
  "url": "https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/seller-api/earsivfatura_1690960445.pdf"
}
```

## Responses

### HTTP 200 - Счёт-фактура создана или изменена

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v2InvoiceCreateOrUpdateV2Response"
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
curl -X POST "https://api-seller.ozon.ru/v2/invoice/create-or-update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/invoice/create-or-update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/invoice/create-or-update", {
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
