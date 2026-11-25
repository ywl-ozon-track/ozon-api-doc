---
title: "查询стратегии详情"
description: "查询стратегии详情"
---

# 查询стратегии详情

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/info`

## 接口概览

- **所属模块**：🎯 智能定价策略与竞品盯价
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/pricing-strategy/info`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "strategy_id": "2fb3e6a3-3db5-4bb4-8430-b2de39fc3265"
}
```

## 返回响应 (Responses)

### HTTP 200 - Информация о стратегии

```json
{
  "result": {
    "strategy_name": "стратегия_от_CID7",
    "enabled": true,
    "update_type": "strategyItemsListChanged",
    "type": "COMP_PRICE",
    "competitors": [
      {
        "competitor_id": 204,
        "coefficient": 1
      },
      {
        "competitor_id": 1008426,
        "coefficient": 1
      }
    ]
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/info", {
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
