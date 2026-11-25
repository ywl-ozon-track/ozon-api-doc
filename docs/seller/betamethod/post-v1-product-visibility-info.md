---
title: "获取商品"
description: "获取商品"
---

# 获取商品

<Badge type="tip" text="POST" /> `/v1/product/visibility/info`

## 接口概览

- **所属模块**：📌 BetaMethod
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/visibility/info`
- **详细说明**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1951-Novyi-metod-upravleniia-vidimostiu-na-vitrinakh/) в сообществе разработчиков Ozon for dev.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/product.v1.ProductVisibilityInfoRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация о видимости товара

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/product.v1.ProductVisibilityInfoResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/product/visibility/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/visibility/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/visibility/info", {
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
