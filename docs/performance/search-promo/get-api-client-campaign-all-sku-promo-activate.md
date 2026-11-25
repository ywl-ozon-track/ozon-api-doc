---
title: "Включить продвижение в оплате за заказ — все товары"
description: "Включить продвижение в оплате за заказ — все товары"
---

# Включить продвижение в оплате за заказ — все товары

<Badge type="info" text="GET" /> `/api/client/campaign/all_sku_promo/activate`

## 接口概览

- **所属模块**：🔍 按成效订单付费广告 (CPO)
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate`

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 返回响应

### HTTP 200 - Продвижение включено

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignActivateAllSkuPromoCampaignResponse"
}
```
:::

### HTTP default - Ошибка

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate", {
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
