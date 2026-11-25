---
title: "Добавить товары в кампанию"
description: "Добавить товары в кампанию"
---

# Добавить товары в кампанию

<Badge type="tip" text="POST" /> `/api/client/campaign/{campaignId}/products`

## 接口概览

- **所属模块**：🛒 CPC Promoted Products
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`
- **详细说明**：

> 
> В кампанию можно добавить не более 500 товаров.
> 
> **Рекомендации по заполнению параметров для разных кампаний**
> 
> - Для добавления в кампанию товаров передайте значения параметров `sku` и `bid`. Если параметр `bid` не указан, 
>   автоматически задаётся конкурентная ставка.
> 
> - Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика». 
> 
> - Для кампании с включённой стратегией можно добавлять товары только из категории `autopilot.categoryId`.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | - |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Товары добавлены в кампанию

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
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
