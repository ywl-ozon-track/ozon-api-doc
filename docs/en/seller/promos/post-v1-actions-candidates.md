---
title: "Список доступных для акции товаров"
description: "Список доступных для акции товаров"
---

# Список доступных для акции товаров

<Badge type="tip" text="POST" /> `/v1/actions/candidates`

## 接口概览

- **所属模块**：🎁 Promotions & Discounts
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/candidates`
- **详细说明**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsCandidates">/v2/actions/candidates</a>.
> </aside>
> 
> Метод для получения списка товаров, которые могут участвовать в акции, по её идентификатору.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "action_id": 63337,
  "limit": 10,
  "last_id": "bnVсbA==123123das"
}
```

## 返回响应 (Responses)

### HTTP 200 - Список товаров

```json
{
  "result": {
    "products": [
      {
        "id": 226,
        "price": 250,
        "action_price": 10,
        "alert_max_action_price_failed": true,
        "alert_max_action_price": 31,
        "max_action_price": 175,
        "add_mode": "NOT_SET",
        "stock": 2,
        "min_stock": 1,
        "current_boost": 3,
        "price_min_elastic": 150,
        "price_max_elastic": 300,
        "min_boost": 12,
        "max_boost": 15
      }
    ],
    "total": 2,
    "last_id": "bnVсbA=="
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/actions/candidates" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/candidates"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/candidates", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
