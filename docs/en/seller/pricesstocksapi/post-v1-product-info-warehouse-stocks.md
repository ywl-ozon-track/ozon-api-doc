---
title: "Получить информацию по остаткам на складе FBS и rFBS"
description: "Получить информацию по остаткам на складе FBS и rFBS"
---

# Получить информацию по остаткам на складе FBS и rFBS

<Badge type="tip" text="POST" /> `/v1/product/info/warehouse/stocks`

## 接口概览

- **所属模块**：💰 Prices & Stocks
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/warehouse/stocks`

## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "cursor": "",
  "limit": 10,
  "warehouse_id": 1020003080073000
}
```

## 返回响应 (Responses)

### HTTP 200 - Количество товара на складе FBS и rFBS

```json
{
  "stocks": [
    {
      "sku": 147035011,
      "product_id": 28743,
      "offer_id": "02105020-35",
      "warehouse_id": 1020003080073000,
      "present": 1000,
      "reserved": 0,
      "free_stock": 1000,
      "updated_at": "2025-09-15T10:36:24.417498Z"
    }
  ],
  "has_next": false,
  "cursor": "147035011"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/warehouse/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/warehouse/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/warehouse/stocks", {
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
