---
title: "Обновить количество цифровых товаров"
description: "Обновить количество цифровых товаров"
---

# Обновить количество цифровых товаров

<Badge type="tip" text="POST" /> `/v1/product/digital/stocks/import`

## 接口概览

- **所属模块**：📌 Digital
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/digital/stocks/import`
- **详细说明**：

> Метод доступен только продавцам, работающим с цифровыми товарами. 
> 
> Используйте метод, чтобы изменить информацию о количестве товара в наличии.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

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

## 返回响应 (Responses)

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
