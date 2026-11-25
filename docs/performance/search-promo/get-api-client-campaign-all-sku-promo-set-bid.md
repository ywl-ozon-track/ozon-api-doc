---
title: "Установить ставку для продвижения в Оплате за заказ — все товары"
description: "Установить ставку для продвижения в Оплате за заказ — все товары"
---

# Установить ставку для продвижения в Оплате за заказ — все товары

<Badge type="info" text="GET" /> `/api/client/campaign/all_sku_promo/set_bid`

## 接口概览

- **所属模块**：🔍 按成效订单付费广告 (CPO)
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `bid` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Ставка установлена

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/set_bid", {
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
