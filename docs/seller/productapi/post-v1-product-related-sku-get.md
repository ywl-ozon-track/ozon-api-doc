---
title: "获取связанные SKU"
description: "Получить связанные SKU"
---

# 获取связанные SKU

<Badge type="tip" text="POST" /> `/v1/product/related-sku/get`

## 接口概览

- **所属模块**：📦 商品管理与创建更新
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/related-sku/get`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения единого SKU по старым идентификаторам SKU FBS и SKU FBO. 
> В ответе будут все SKU, связанные с переданными.
> 
> Метод может обработать любые SKU, даже скрытые или удалённые.
> 
> Передавайте до 200 SKU в одном запросе.
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "sku": [
    "88997766"
  ]
}
```

## 返回响应

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
