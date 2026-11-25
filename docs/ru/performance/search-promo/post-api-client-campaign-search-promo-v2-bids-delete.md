---
title: "Удалить товар из продвижения в оплате за заказ"
description: "Удалить товар из продвижения в оплате за заказ"
---

# Удалить товар из продвижения в оплате за заказ

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/v2/bids/delete`

## 接口概览

- **所属模块**：🔍 Оплата за заказ
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete`
- **详细说明**：

> 
> В одном запросе можно передать максимум 1000 товаров.
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
  "$ref": "#/components/schemas/extcampaignDeleteSearchPromoBidsRequestV2"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Товар удалён

::: details 查看 Response Schema 定义
```json
{
  "type": "object"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete", {
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
