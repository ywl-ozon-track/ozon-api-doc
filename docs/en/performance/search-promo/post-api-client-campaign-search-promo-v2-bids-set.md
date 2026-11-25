---
title: "Установить ставку на товар"
description: "Установить ставку на товар"
---

# Установить ставку на товар

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/v2/bids/set`

## 接口概览

- **所属模块**：🔍 Search Promotion (CPO)
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set`
- **详细说明**：

> 
> Если товар ещё не добавлен в продвижение, система добавит его автоматически.
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
  "$ref": "#/components/schemas/extcampaignSetSearchPromoBidsRequestV2"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Ставка установлена

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignSetSearchPromoBidsResponseV2extcampaignSetSearchPromoBidsResponseV2"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/set", {
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
