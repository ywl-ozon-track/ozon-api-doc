---
title: "Получить изображения товаров"
description: "Получить изображения товаров"
---

# Получить изображения товаров

<Badge type="tip" text="POST" /> `/v2/product/pictures/info`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/product/pictures/info`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "product_id": [
    "89898989"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Изображения товаров

```json
{
  "items": [
    {
      "product_id": 100500,
      "primary_photo": [
        "https://test-test.ru/images/products/100500/primary.jpg"
      ],
      "photo": [
        "https://test-test.ru/images/products/100500/photo1.jpg",
        "https://test-test.ru/images/products/100500/photo2.jpg"
      ],
      "color_photo": [
        "https://test-test.ru/images/products/100500/color_red.jpg",
        "https://test-test.ru/images/products/100500/color_blue.jpg"
      ],
      "errors": [
        {
          "message": "Не удалось загрузить дополнительное изображение: превышен размер файла",
          "url": "https://test-test.ru/api/v1/products/100500/errors/12345"
        },
        {
          "message": "Отсутствует описание для цвета 'зелёный'",
          "url": "https://test-test.ru/api/v1/products/100500/errors/12346"
        }
      ]
    }
  ]
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v2/product/pictures/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/pictures/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/pictures/info", {
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
