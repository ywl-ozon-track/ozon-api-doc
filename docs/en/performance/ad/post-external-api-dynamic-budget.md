---
title: "Рассчитать минимальный бюджет кампании"
description: "Рассчитать минимальный бюджет кампании"
---

# Рассчитать минимальный бюджет кампании

<Badge type="tip" text="POST" /> `/external/api/dynamic_budget`

## 接口概览

- **所属模块**：🖱️ Cost-Per-Click (CPC) Ads
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/external/api/dynamic_budget`
- **详细说明**：

> <aside class="warning">
> 1 сентября 2025 года метод будет отключён. Теперь минимальный бюджет рассчитывается по формуле: <b>2&nbsp;000 рублей × 1 SKU</b>.
> </aside>
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
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Результат запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetResponse"
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
