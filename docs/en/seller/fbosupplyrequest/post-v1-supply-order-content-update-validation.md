---
title: "SupplyOrderContentUpdateValidation"
description: "Проверить новый товарный состав"
---

# SupplyOrderContentUpdateValidation

<Badge type="tip" text="POST" /> `/v1/supply-order/content/update/validation`

## Endpoint Overview

- **Category**：📌 FboSupplyRequest
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/content/update/validation`

::: details View Official Description (Russian)
> Используйте этот метод, если в [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus) вы получили ошибку `SUPPLY_CONTENT_NOT_VALID`.
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
  "$ref": "#/components/schemas/v1SupplyOrderContentUpdateValidationRequest"
}
```
:::

## Responses

### HTTP 200 - Успешно

```json
{
  "editing_errors": [
    "UNSPECIFIED"
  ],
  "validated_assortment": {
    "approved_items": [
      {
        "barcode": "string",
        "item_link": "string",
        "name": "string",
        "offer_id": "string",
        "origin_quantity": 0,
        "origin_total_volume_in_litres": 0,
        "quant": 0,
        "quantity": 0,
        "sku": 0,
        "sku_quantity_limit": 0,
        "total_volume_in_litres": 0
      }
    ],
    "rejected_items": [
      {
        "barcode": "string",
        "name": "string",
        "offer_id": "string",
        "origin_quantity": 0,
        "origin_total_volume_in_litres": 0,
        "quantity": 0,
        "rejection_reason": [
          "UNSPECIFIED"
        ],
        "restrictions": {
          "reasons_restrictions": [
            "UNKNOWN"
          ],
          "sku_has_no_sales_in_days": 0,
          "sku_quantity_limit": 0
        },
        "sku": 0,
        "total_volume_in_litres": 0
      }
    ],
    "total_approved_item_count": 0,
    "total_approved_quantity": 0,
    "total_approved_volume_in_litres": 0,
    "total_rejected_item_count": 0,
    "total_restricted_item_count": 0
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/content/update/validation" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/content/update/validation"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/content/update/validation", {
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
