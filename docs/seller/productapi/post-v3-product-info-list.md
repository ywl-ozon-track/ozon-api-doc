---
title: "获取商品"
description: "获取商品"
---

# 获取商品

<Badge type="tip" text="POST" /> `/v3/product/info/list`

## 接口概览

- **所属模块**：📦 商品管理与创建更新
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/product/info/list`
- **详细说明**：

> 
> Метод для получения информации о товарах по их идентификаторам.
> 
> В теле запроса должен быть массив однотипных идентификаторов, в ответе будет массив `items`.
> 
> В одном запросе вы можете передать не больше 1000 товаров по параметрам `offer_id`, `product_id` и `sku` в сумме.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "offer_id": [
    "2026113PDF"
  ],
  "product_id": [
    "3339791176800"
  ],
  "sku": [
    "33373353831"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Список товаров

```json
{
  "items": [
    {
      "availabilities": [
        {
          "availability": "AVAILABLE",
          "reasons": [
            {
              "human_text": {
                "text": "Товар доступен на складе"
              },
              "id": 12345
            }
          ],
          "sku": 987654321,
          "source": "main_warehouse"
        }
      ],
      "barcodes": [
        "123456789012"
      ],
      "color_image": [
        "https://example.com/color_image_123.jpg"
      ],
      "commissions": [
        {
          "delivery_amount": 150,
          "percent": 10,
          "return_amount": 50,
          "sale_schema": "standard",
          "value": 200
        }
      ],
      "created_at": "2023-01-15T10:30:00Z",
      "currency_code": "RUB",
      "declared_price": {
        "amount": "1000",
        "currency": "RUB"
      },
      "description_category_id": 42,
      "discounted_fbo_stocks": 5,
      "errors": [
        {
          "attribute_id": 101,
          "code": "INVALID_PRICE",
          "field": "price",
          "level": "ERROR",
          "state": "pending",
          "texts": {
            "attribute_name": "Цена",
            "description": "Цена не может быть отрицательной",
            "hint_code": "PRICE_NEGATIVE",
            "message": "Исправьте цену",
            "params": [
              {
                "name": "min_price",
                "value": "100"
              }
            ],
            "short_description": "Ошибка цены"
          }
        }
      ],
      "has_discounted_fbo_item": false,
      "id": 100001,
      "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg"
      ],
      "is_archived": false,
      "is_autoarchived": false,
      "is_discounted": true,
      "is_kgt": false,
      "is_prepayment_allowed": true,
      "is_super": false,
      "min_price": "999.99",
      "model_info": {
        "count": 3,
        "model_id": 777
      },
      "name": "Тестовый товар 123",
      "offer_id": "OFFER_123456789",
      "old_price": "1499.99",
      "price": "1299.99",
      "price_indexes": {
        "color_index": "RED",
        "external_index_data": {
          "minimal_price": "1199.99",
          "minimal_price_currency": "RUB",
          "price_index_value": 85
        },
        "ozon_index_data": {
          "minimal_price": "1250.00",
          "minimal_price_currency": "RUB",
          "price_index_value": 90
        },
        "self_marketplaces_index_data": {
          "minimal_price": "1200.00",
          "minimal_price_currency": "RUB",
          "price_index_value": 88
        }
      },
      "primary_image": [
        "https://example.com/primary_image.jpg"
      ],
      "promotions": [
        {
          "is_enabled": true,
          "type": "DISCOUNT"
        }
      ],
      "sku": 123456789,
      "sources": [
        {
          "created_at": "2023-01-10T09:15:00Z",
          "quant_code": "QUANT_123",
          "shipment_type": "EXPRESS",
          "sku": 123456789,
          "source": "supplier_1"
        }
      ],
      "statuses": {
        "is_created": true,
        "moderate_status": "approved",
        "status": "active",
        "status_description": "Товар доступен для продажи",
        "status_failed": "none",
        "status_name": "Активен",
        "status_tooltip": "Товар прошёл модерацию",
        "status_updated_at": "2023-01-14T11:20:00Z",
        "validation_status": "valid"
      },
      "stocks": {
        "has_stock": true,
        "stocks": [
          {
            "present": 50,
            "reserved": 5,
            "sku": 123456789,
            "source": "main_warehouse"
          }
        ]
      },
      "type_id": 1,
      "updated_at": "2023-01-16T12:45:00Z",
      "vat": "20%",
      "visibility_details": {
        "has_price": true,
        "has_stock": true
      },
      "volume_weight": 1.5
    }
  ]
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v3/product/info/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/product/info/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/product/info/list", {
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
