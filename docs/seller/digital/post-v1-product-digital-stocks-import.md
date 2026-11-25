---
title: "更新商品"
description: "Обновить количество цифровых товаров"
---

# 更新商品

<Badge type="tip" text="POST" /> `/v1/product/digital/stocks/import`

## 接口概览

- **所属模块**：📌 Digital
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/digital/stocks/import`

::: details 查看官方详细说明 (Официальное описание)
> Метод доступен только продавцам, работающим с цифровыми товарами. 
> 
> Используйте метод, чтобы изменить информацию о количестве товара в наличии.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "stocks": [
    {
      "stock": "2",
      "offer_id": "Мяч желтый 543561"
    }
  ]
}
```

## 返回响应

### HTTP 200 - Количество товаров обновлено

```json
{
  "status": [
    {
      "errors": [],
      "offer_id": "Мяч желтый 543561",
      "updated": true,
      "product_id": "29235761",
      "sku": "425291243"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/digital/stocks/import" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/digital/stocks/import"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/digital/stocks/import", {
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
