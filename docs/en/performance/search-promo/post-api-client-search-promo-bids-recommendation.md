---
title: "Рекомендованные ставки для товаров"
description: "Рекомендованные ставки для товаров"
---

# Рекомендованные ставки для товаров

<Badge type="tip" text="POST" /> `/api/client/search_promo/bids/recommendation`

## 接口概览

- **所属模块**：🔍 Search Promotion (CPO)
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/search_promo/bids/recommendation`
- **详细说明**：

> 
> За один запрос вы можете передать до 200 SKU.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsRecommendedBidsRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Рекомендованные ставки

```json
{
  "recommendedBids": {
    "sku1": "string",
    "sku2": "string"
  }
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
curl -X POST "https://api-performance.ozon.ru/api/client/search_promo/bids/recommendation" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/search_promo/bids/recommendation"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/search_promo/bids/recommendation", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
