---
title: "Получить описание характеристик товара"
description: "Получить описание характеристик товара"
---

# Получить описание характеристик товара

<Badge type="tip" text="POST" /> `/v4/product/info/attributes`

## 接口概览

- **所属模块**：📦 Загрузка и обновление товаров
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v4/product/info/attributes`
- **详细说明**：

> Возвращает описание характеристик товаров по идентификатору и видимости. Товар можно искать по `offer_id`, `product_id` или `sku`.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filter": {
    "product_id": [
      "0"
    ],
    "offer_id": [
      "string"
    ],
    "sku": [
      "0"
    ],
    "visibility": "ALL"
  },
  "limit": 100,
  "sort_dir": "ASC"
}
```

## 返回响应 (Responses)

### HTTP 200 - Описание характеристик товара

```json
{
  "result": [
    {
      "id": 213761435,
      "barcode": "",
      "barcodes": [
        "123124123",
        "123342455"
      ],
      "name": "Пленка защитная для Xiaomi Redmi Note 10 Pro 5G",
      "offer_id": "21470",
      "type_id": 124572394,
      "height": 10,
      "depth": 210,
      "width": 140,
      "dimension_unit": "mm",
      "weight": 50,
      "weight_unit": "g",
      "primary_image": "https://ir.ozone.ru/s3/multimedia-4/6804736960.jpg",
      "sku": 423434534,
      "model_info": {
        "model_id": 43445453,
        "count": 4
      },
      "images": [
        "https://ir.ozone.ru/s3/multimedia-4/6804736960.jpg",
        "https://ir.ozone.ru/s3/multimedia-j/6835412647.jpg"
      ],
      "pdf_list": [],
      "attributes": [
        {
          "id": 5219,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 970718176,
              "value": "универсальный"
            }
          ]
        },
        {
          "id": 11051,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 970736931,
              "value": "Прозрачный"
            }
          ]
        },
        {
          "id": 10100,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "false"
            }
          ]
        },
        {
          "id": 11794,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 970860783,
              "value": "safe"
            }
          ]
        },
        {
          "id": 9048,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "Пленка защитная для Xiaomi Redmi Note 10 Pro 5G"
            }
          ]
        },
        {
          "id": 5076,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 39638,
              "value": "Xiaomi"
            }
          ]
        },
        {
          "id": 9024,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "21470"
            }
          ]
        },
        {
          "id": 10015,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "false"
            }
          ]
        },
        {
          "id": 85,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 971034861,
              "value": "Brand"
            }
          ]
        },
        {
          "id": 9461,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 349824787,
              "value": "Защитная пленка для смартфона"
            }
          ]
        },
        {
          "id": 4180,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "Пленка защитная для Xiaomi Redmi Note 10 Pro 5G"
            }
          ]
        },
        {
          "id": 4191,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 0,
              "value": "Пленка предназначена для модели Xiaomi Redmi Note 10 Pro 5G. Защитная гидрогелевая пленка обеспечит защиту вашего смартфона от царапин, пыли, сколов и потертостей."
            }
          ]
        },
        {
          "id": 8229,
          "complex_id": 0,
          "values": [
            {
              "dictionary_value_id": 91521,
              "value": "Защитная пленка"
            }
          ]
        }
      ],
      "attributes_with_defaults": [
        5435,
        3452
      ],
      "complex_attributes": [],
      "color_image": "",
      "description_category_id": 71107562
    }
  ],
  "total": 1,
  "last_id": "onVsfA=="
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
curl -X POST "https://api-seller.ozon.ru/v4/product/info/attributes" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/product/info/attributes"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/product/info/attributes", {
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
