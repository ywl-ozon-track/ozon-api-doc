---
title: "创建 CPC 按点击计费的商品推广计划"
description: "创建 CPC 按点击计费的商品推广计划"
---

# 创建 CPC 按点击计费的商品推广计划

<Badge type="tip" text="POST" /> `/api/client/campaign/cpc/v2/product`

## 接口概览

- **所属模块**：🖱️ CPC按点击付费推广
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product`
- **详细说明**：

> Метод для создания товарной рекламной кампании с оплатой за клики.
> 
> При успешном выполнении запроса в поле `campaignId` ответа будет идентификатор созданной кампании.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Кампания создана

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product", {
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
