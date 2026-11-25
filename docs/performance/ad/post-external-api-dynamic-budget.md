---
title: "智能测算广告推广计划所需的最低日预算与出价推荐"
description: "Рассчитать минимальный бюджет кампании"
---

# 智能测算广告推广计划所需的最低日预算与出价推荐

<Badge type="tip" text="POST" /> `/external/api/dynamic_budget`

## 接口概览

- **所属模块**：🖱️ CPC按点击付费推广
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/external/api/dynamic_budget`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> 1 сентября 2025 года метод будет отключён. Теперь минимальный бюджет рассчитывается по формуле: <b>2&nbsp;000 рублей × 1 SKU</b>.
> </aside>
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetRequest"
}
```
:::

## 返回响应

### HTTP 200 - Результат запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetResponse"
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
curl -X POST "https://api-performance.ozon.ru/external/api/dynamic_budget" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/external/api/dynamic_budget"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/external/api/dynamic_budget", {
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
