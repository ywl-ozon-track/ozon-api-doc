---
title: "Список товаров с бонусами"
description: "Список товаров с бонусами"
---

# Список товаров с бонусами

<Badge type="info" text="GET" /> `/api/client/products_with_bonuses`

## 接口概览

- **所属模块**：📢 Кампании и рекламируемые объекты
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/products_with_bonuses`
- **详细说明**：

> Возвращает список SKU товаров, на которые начислены бонусы. 
> 
> За клик на товар в первую очередь тратятся начисленные на него бонусы. Если бонусы кончились, тратится общий бюджет кампании.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 返回响应 (Responses)

### HTTP 200 - Список товаров с бонусами

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignListProductsWithBonusesResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/products_with_bonuses" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/products_with_bonuses"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/products_with_bonuses", {
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
