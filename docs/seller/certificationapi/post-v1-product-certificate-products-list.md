---
title: "获取商品列表"
description: "Список товаров, привязанных к сертификату"
---

# 获取商品列表

<Badge type="tip" text="POST" /> `/v1/product/certificate/products/list`

## 接口概览

- **所属模块**：📜 商品质量合格证
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/certificate/products/list`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning"> 28 сентября 2026 года отключим параметры <code>page</code> и <code>page_size</code> в запросе метода. Используйте параметры <code>last_id</code> и <code>limit</code>. </aside>
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
  "certificate_id": 624047,
  "product_status_code": "approved",
  "limit": 1000
}
```

## 返回响应

### HTTP 200 - Список товаров

```json
{
  "result": {
    "items": [
      {
        "product_id": 53110101,
        "sku": 0,
        "product_status_code": "approved"
      }
    ],
    "count": 1
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/products/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/products/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/products/list", {
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
