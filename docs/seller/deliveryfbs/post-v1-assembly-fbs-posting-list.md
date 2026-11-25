---
title: "获取发货包裹"
description: "Получить список отправлений"
---

# 获取发货包裹

<Badge type="tip" text="POST" /> `/v1/assembly/fbs/posting/list`

## 接口概览

- **所属模块**：📌 DeliveryFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/assembly/fbs/posting/list`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "filter": {
    "cutoff_from": "2026-03-01T00:00:00Z",
    "cutoff_to": "2026-03-07T23:59:59Z",
    "delivery_method_id": 323123321
  },
  "limit": 50,
  "sort_dir": "ASC",
  "cursor": ""
}
```

## 返回响应

### HTTP 200 - Список отправлений

```json
{
  "cutoff": "2026-03-07T10:00:00Z",
  "postings": [
    {
      "posting_number": "789456123-0002-3",
      "assembly_code": "test-assembly-code-12345",
      "products": [
        {
          "sku": 1000123456,
          "offer_id": "test-offer-123456",
          "product_name": "Тестовый товар 1",
          "picture_url": "https://test-example.com/images/product-123456.jpg",
          "quantity": 2
        },
        {
          "sku": 1000123457,
          "offer_id": "test-offer-123457",
          "product_name": "Тестовый товар 2",
          "picture_url": "https://test-example.com/images/product-123457.jpg",
          "quantity": 1
        }
      ]
    },
    {
      "posting_number": "123456789-0001-1",
      "assembly_code": "test-assembly-code-12346",
      "products": [
        {
          "sku": 1000123458,
          "offer_id": "test-offer-123458",
          "product_name": "Тестовый товар 3",
          "picture_url": "https://test-example.com/images/product-123458.jpg",
          "quantity": 3
        }
      ]
    },
    {
      "posting_number": "456123789-0003-5",
      "assembly_code": "test-assembly-code-12347",
      "products": [
        {
          "sku": 1000123459,
          "offer_id": "test-offer-123459",
          "product_name": "Тестовый товар 4",
          "picture_url": "https://test-example.com/images/product-123459.jpg",
          "quantity": 1
        },
        {
          "sku": 1000123460,
          "offer_id": "test-offer-123460",
          "product_name": "Тестовый товар 5",
          "picture_url": "https://test-example.com/images/product-123460.jpg",
          "quantity": 2
        },
        {
          "sku": 1000123461,
          "offer_id": "test-offer-123461",
          "product_name": "Тестовый товар 6",
          "picture_url": "https://test-example.com/images/product-123461.jpg",
          "quantity": 1
        }
      ]
    }
  ],
  "cursor": "test-cursor-next-page-67890"
}
```

### HTTP default - Ошибка

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/assembly/fbs/posting/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/assembly/fbs/posting/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/assembly/fbs/posting/list", {
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
