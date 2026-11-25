---
title: "Удалить товары из кампании"
description: "Удалить товары из кампании"
---

# Удалить товары из кампании

<Badge type="tip" text="POST" /> `/api/client/campaign/{campaignId}/products/delete`

## 接口概览

- **所属模块**：🛒 CPC Promoted Products
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | - |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/extcampaignDeleteProductsRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Товар удалён из кампании

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/delete", {
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
