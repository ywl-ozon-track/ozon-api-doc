---
title: "Информация о количестве товаров"
description: "Информация о количестве товаров"
---

# Информация о количестве товаров

<Badge type="tip" text="POST" /> `/v4/product/info/stocks`

## Обзор метода

- **Категория**：💰 Цены и остатки товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v4/product/info/stocks`
- **Описание**：

> <aside class="warning">
>   23 ноября 2026 года отключим параметр <code>total</code> в ответе метода. Переключитесь на <code>total_items</code>.
> </aside> 
> 
> Возвращает информацию о ĸоличестве товаров по схемам FBO, FBS, rFBS и FBP:
>   - сĸольĸо единиц есть в наличии,
>   - сĸольĸо зарезервировано поĸупателями.
> 
> Чтобы получить аналитику по остаткам по схеме FBO, используйте метод [/v1/analytics/stocks](#operation/AnalyticsAPI_AnalyticsStocks).
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "cursor": "",
  "filter": {
    "offer_id": [
      "1233213232"
    ],
    "product_id": [
      "313455276"
    ],
    "visibility": "ALL",
    "with_quant": {
      "created": true,
      "exists": true
    }
  },
  "limit": 100
}
```

## Ответы сервера

### HTTP 200 - Количество товара

```json
{
  "items": [
    {
      "offer_id": "test-offer-123456",
      "product_id": 1000123456,
      "stocks": [
        {
          "sku": 1000123456,
          "type": "fbs",
          "present": 150,
          "reserved": 25,
          "shipment_type": "SHIPMENT_TYPE_GENERAL"
        },
        {
          "sku": 1000123456,
          "type": "fbo",
          "present": 75,
          "reserved": 10,
          "shipment_type": "SHIPMENT_TYPE_GENERAL"
        }
      ]
    },
    {
      "offer_id": "test-offer-123457",
      "product_id": 1000123457,
      "stocks": [
        {
          "sku": 1000123457,
          "type": "fbs",
          "present": 45,
          "reserved": 5,
          "shipment_type": "SHIPMENT_TYPE_BOX"
        }
      ]
    }
  ],
  "cursor": "next-cursor-12345",
  "total": 2,
  "total_items": 2
}
```

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v4/product/info/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/product/info/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/product/info/stocks", {
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
