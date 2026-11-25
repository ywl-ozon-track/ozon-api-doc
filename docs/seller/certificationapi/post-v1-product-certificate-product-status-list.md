---
title: "获取商品列表"
description: "Список возможных статусов товаров"
---

# 获取商品列表

<Badge type="tip" text="POST" /> `/v1/product/certificate/product_status/list`

## 接口概览

- **所属模块**：📜 商品质量合格证
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/certificate/product_status/list`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения списка возможных статусов товаров при их привязке к сертификату.
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

### HTTP 200 - Список статусов товаров

```json
{
  "result": [
    {
      "code": "approved",
      "name": "Одобрен"
    },
    {
      "code": "declined",
      "name": "Отклонён"
    },
    {
      "code": "awaiting_verification",
      "name": "На проверке"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/product_status/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/product_status/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/product_status/list", {
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
