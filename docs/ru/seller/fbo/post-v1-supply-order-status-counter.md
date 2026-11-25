---
title: "Количество заявок по статусам"
description: "Количество заявок по статусам"
---

# Количество заявок по статусам

<Badge type="tip" text="POST" /> `/v1/supply-order/status/counter`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/supply-order/status/counter`
- **详细说明**：

> Возвращает количество заявок в конкретном статусе.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 返回响应 (Responses)

### HTTP 200 - Статус заявки и количество заявок в этом статусе

```json
{
  "items": [
    {
      "count": 1,
      "order_state": "ORDER_STATE_UNSPECIFIED"
    }
  ]
}
```

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/status/counter" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/status/counter"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/status/counter", {
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
