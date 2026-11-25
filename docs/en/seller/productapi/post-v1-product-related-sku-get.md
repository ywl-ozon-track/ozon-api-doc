---
title: "Получить связанные SKU"
description: "Получить связанные SKU"
---

# Получить связанные SKU

<Badge type="tip" text="POST" /> `/v1/product/related-sku/get`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/related-sku/get`
- **详细说明**：

> Метод для получения единого SKU по старым идентификаторам SKU FBS и SKU FBO. 
> В ответе будут все SKU, связанные с переданными.
> 
> Метод может обработать любые SKU, даже скрытые или удалённые.
> 
> Передавайте до 200 SKU в одном запросе.
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
  "sku": [
    "88997766"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Информация об SKU

```json
{
  "items": [
    {
      "availability": "AVAILABLE",
      "deleted_at": "2019-08-24T14:15:22Z",
      "delivery_schema": "SDS",
      "product_id": "door",
      "sku": "88997766"
    }
  ],
  "errors": [
    {
      "code": "das",
      "sku": "88997766",
      "message": "sku does not exist"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/related-sku/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/related-sku/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/related-sku/get", {
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
