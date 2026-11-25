---
title: "Отключить продвижение товаров в акции «Морковск»"
description: "Отключить продвижение товаров в акции «Морковск»"
---

# Отключить продвижение товаров в акции «Морковск»

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/carrots/disable`

## 接口概览

- **所属模块**：🔍 Оплата за заказ
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable`
- **详细说明**：

> Удаляет товары из акции «Морковск».<br>
> [Подробнее об акции](https://seller-edu.ozon.ru/how-to-sell-effectively/advertising-of-goods/morkovsk)
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Продвижение отключено

```json
{
  "skuToInfo": {
    "property1": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": true
    },
    "property2": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": false
    }
  }
}
```

### HTTP default - An unexpected error response.

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable", {
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
