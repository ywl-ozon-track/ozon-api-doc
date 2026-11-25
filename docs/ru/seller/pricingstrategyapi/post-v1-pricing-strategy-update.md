---
title: "Обновить стратегию"
description: "Обновить стратегию"
---

# Обновить стратегию

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/update`

## 接口概览

- **所属模块**：🎯 Стратегии ценообразования
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/pricing-strategy/update`
- **详细说明**：

> Можно обновить все стратегии кроме системной.


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "strategy_id": "a3de1826-9c54-40f1-bb6d-1a9e2638b058",
  "strategy_name": "Новая стратегия",
  "competitors": [
    {
      "competitor_id": 1008426,
      "coefficient": 1
    },
    {
      "competitor_id": 204,
      "coefficient": 1
    },
    {
      "competitor_id": 91,
      "coefficient": 1
    },
    {
      "competitor_id": 48,
      "coefficient": 1
    },
    {
      "competitor_id": 45,
      "coefficient": 1
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Стратегия обновлена

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1Empty"
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/update", {
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
