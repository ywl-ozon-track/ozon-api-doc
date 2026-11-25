---
title: "CalculateDynamicBudget"
description: "Рассчитать минимальный бюджет кампании"
---

# CalculateDynamicBudget

<Badge type="tip" text="POST" /> `/external/api/dynamic_budget`

## Endpoint Overview

- **Category**：🖱️ Cost-Per-Click (CPC) Ads
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/external/api/dynamic_budget`

::: details View Official Description (Russian)
> <aside class="warning">
> 1 сентября 2025 года метод будет отключён. Теперь минимальный бюджет рассчитывается по формуле: <b>2&nbsp;000 рублей × 1 SKU</b>.
> </aside>
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetRequest"
}
```
:::

## Responses

### HTTP 200 - Результат запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignCalculateDynamicBudgetResponse"
}
```
:::

### HTTP default - Ошибка запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

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
