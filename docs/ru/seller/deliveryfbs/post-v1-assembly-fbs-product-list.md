---
title: "Получить список товаров в отправлениях"
description: "Получить список товаров в отправлениях"
---

# Получить список товаров в отправлениях

<Badge type="tip" text="POST" /> `/v1/assembly/fbs/product/list`

## Обзор метода

- **Категория**：📌 DeliveryFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/assembly/fbs/product/list`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "filter": {
    "cutoff_from": "2019-08-24T14:15:22Z",
    "cutoff_to": "2019-08-24T14:15:22Z",
    "delivery_method_id": 0
  },
  "limit": 0,
  "offset": 0,
  "sort_dir": "ASC"
}
```

## Ответы сервера

### HTTP 200 - Список товаров в отправлениях

```json
{
  "products": [
    {
      "sku": 1000123456,
      "offer_id": "test-offer-123456",
      "product_name": "Тестовый товар 1",
      "picture_url": "https://test-example.com/images/product-123456.jpg",
      "quantity": 15,
      "postings": [
        {
          "posting_number": "789456123-0002-3",
          "quantity": 2
        },
        {
          "posting_number": "123456789-0001-1",
          "quantity": 3
        },
        {
          "posting_number": "456123789-0003-5",
          "quantity": 1
        }
      ]
    },
    {
      "sku": 1000123457,
      "offer_id": "test-offer-123457",
      "product_name": "Тестовый товар 2",
      "picture_url": "https://test-example.com/images/product-123457.jpg",
      "quantity": 8,
      "postings": [
        {
          "posting_number": "321654987-0004-2",
          "quantity": 2
        },
        {
          "posting_number": "987321654-0005-7",
          "quantity": 1
        },
        {
          "posting_number": "789456123-0006-8",
          "quantity": 3
        },
        {
          "posting_number": "123456789-0007-9",
          "quantity": 2
        }
      ]
    },
    {
      "sku": 1000123458,
      "offer_id": "test-offer-123458",
      "product_name": "Тестовый товар 3",
      "picture_url": "https://test-example.com/images/product-123458.jpg",
      "quantity": 23,
      "postings": [
        {
          "posting_number": "456123789-0008-1",
          "quantity": 5
        },
        {
          "posting_number": "321654987-0009-3",
          "quantity": 4
        },
        {
          "posting_number": "987321654-0010-2",
          "quantity": 3
        },
        {
          "posting_number": "789456123-0011-4",
          "quantity": 6
        },
        {
          "posting_number": "123456789-0012-6",
          "quantity": 5
        }
      ]
    },
    {
      "sku": 1000123459,
      "offer_id": "test-offer-123459",
      "product_name": "Тестовый товар 4",
      "picture_url": "https://test-example.com/images/product-123459.jpg",
      "quantity": 5,
      "postings": [
        {
          "posting_number": "456123789-0013-8",
          "quantity": 2
        },
        {
          "posting_number": "321654987-0014-1",
          "quantity": 3
        }
      ]
    },
    {
      "sku": 1000123460,
      "offer_id": "test-offer-123460",
      "product_name": "Тестовый товар 5",
      "picture_url": "https://test-example.com/images/product-123460.jpg",
      "quantity": 12,
      "postings": [
        {
          "posting_number": "987321654-0015-3",
          "quantity": 4
        },
        {
          "posting_number": "789456123-0016-5",
          "quantity": 3
        },
        {
          "posting_number": "123456789-0017-7",
          "quantity": 5
        }
      ]
    }
  ],
  "products_count": 5,
  "has_next": true
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
curl -X POST "https://api-seller.ozon.ru/v1/assembly/fbs/product/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/assembly/fbs/product/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/assembly/fbs/product/list", {
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
