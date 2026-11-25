---
title: "创建 CPC 按点击计费的商品推广计划"
description: "Создать кампанию с оплатой за клики"
---

# 创建 CPC 按点击计费的商品推广计划

<Badge type="tip" text="POST" /> `/api/client/campaign/cpc/v2/product`

## 接口概览

- **所属模块**：🖱️ CPC按点击付费推广
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/cpc/v2/product`

::: details 查看官方详细说明 (Официальное описание)
> Метод для создания товарной рекламной кампании с оплатой за клики.
> 
> При успешном выполнении запроса в поле `campaignId` ответа будет идентификатор созданной кампании.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

## 返回响应

### HTTP 200 - Кампания создана

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
}
```
:::

### HTTP default - Ошибка запроса

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
