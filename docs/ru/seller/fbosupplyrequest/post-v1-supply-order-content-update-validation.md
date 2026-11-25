---
title: "Проверить новый товарный состав"
description: "Проверить новый товарный состав"
---

# Проверить новый товарный состав

<Badge type="tip" text="POST" /> `/v1/supply-order/content/update/validation`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/content/update/validation`
- **Описание**：

> Используйте этот метод, если в [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus) вы получили ошибку `SUPPLY_CONTENT_NOT_VALID`.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1SupplyOrderContentUpdateValidationRequest"
}
```
:::

## Ответы сервера

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

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

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
