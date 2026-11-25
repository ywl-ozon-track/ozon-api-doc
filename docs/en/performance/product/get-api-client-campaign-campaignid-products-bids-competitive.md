---
title: "Конкурентные ставки для товара"
description: "Конкурентные ставки для товара"
---

# Конкурентные ставки для товара

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/products/bids/competitive`

## 接口概览

- **所属模块**：🛒 CPC Promoted Products
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive`
- **详细说明**：

> 
> Если товар не добавлен в кампанию, в параметре `bid` будет значение `0`.
> В одном запросе вы можете передать до 200 товаров.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | Идентификатор кампании. |
| `skus` | `query` | 否 (No) | Список SKU товаров. |

## 返回响应 (Responses)

### HTTP 200 - Конкурентные ставки

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsCompetitiveBidsResponse"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
