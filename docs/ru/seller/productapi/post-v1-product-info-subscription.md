---
title: "Количество подписавшихся на товар пользователей"
description: "Количество подписавшихся на товар пользователей"
---

# Количество подписавшихся на товар пользователей

<Badge type="tip" text="POST" /> `/v1/product/info/subscription`

## 接口概览

- **所属模块**：📦 Загрузка и обновление товаров
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/subscription`
- **详细说明**：

> Метод для получения количества пользователей, которые нажали **Узнать о поступлении** на странице товара.
> 
> Вы можете передать несколько товаров в запросе.
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
  "skus": [
    "889283932",
    "123456789",
    "987654321"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Количество подписавшихся пользователей

```json
{
  "result": [
    {
      "count": 3,
      "sku": 889283932
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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/subscription" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/subscription"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/subscription", {
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
