---
title: "Состав поставки или заявки на поставку"
description: "Состав поставки или заявки на поставку"
---

# Состав поставки или заявки на поставку

<Badge type="tip" text="POST" /> `/v1/supply-order/bundle`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/bundle`
- **Описание**：

> Используйте метод, чтобы получить товарный состав поставки или черновика заявки на поставку.
> Одним вызовом метода можно получить состав одной поставки или черновика заявки.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "bundle_ids": [
    "bundle_123456789",
    "bundle_987654321"
  ],
  "is_asc": true,
  "item_tags_calculation": {
    "dropoff_warehouse_id": 17717042026000,
    "storage_warehouse_ids": [
      "17717042026001",
      "17717042026002"
    ]
  },
  "last_id": "item_555123456789",
  "limit": 100,
  "query": "книга Хайям",
  "sort_field": "NAME"
}
```

## Ответы сервера

### HTTP 200 - Состав поставки

```json
{
  "items": [
    {
      "icon_path": "https://example.com/icons/book_icon_12345.png",
      "sku": 160249683,
      "name": "Так говорил Омар Хайям. Жизнеописание. Афоризмы и рубайят",
      "offer_id": "978-5-906864-56-7",
      "quantity": 5,
      "barcode": "9785906864567",
      "product_id": 160249683,
      "quant": 5,
      "is_quant_editable": true,
      "volume_in_litres": 0.5,
      "total_volume_in_litres": 2.5,
      "contractor_item_code": "CONTRACT_56789",
      "sfbo_attribute": "ITEM_SFBO_ATTRIBUTE_STANDARD",
      "shipment_type": "BUNDLE_ITEM_SHIPMENT_TYPE_PICKUP",
      "tags": [
        "EVSD_REQUIRED",
        "FRAGILE"
      ],
      "placement_zone": "ZONE_A"
    },
    {
      "icon_path": "https://example.com/icons/toy_icon_67890.png",
      "sku": 123456789,
      "name": "Конструктор LEGO Classic 11019",
      "offer_id": "LEGO_11019",
      "quantity": 10,
      "barcode": "5702017115689",
      "product_id": 123456789,
      "quant": 10,
      "is_quant_editable": true,
      "volume_in_litres": 1.2,
      "total_volume_in_litres": 12,
      "contractor_item_code": "CONTRACT_12345",
      "sfbo_attribute": "ITEM_SFBO_ATTRIBUTE_LARGE",
      "shipment_type": "BUNDLE_ITEM_SHIPMENT_TYPE_DELIVERY",
      "tags": [
        "EVSD_REQUIRED"
      ],
      "placement_zone": "SORT"
    }
  ],
  "total_count": 2,
  "has_next": false,
  "last_id": "item_123456789"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/bundle" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/bundle"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/bundle", {
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
