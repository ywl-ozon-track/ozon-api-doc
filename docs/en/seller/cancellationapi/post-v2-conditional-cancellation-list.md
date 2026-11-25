---
title: "Получить список заявок на отмену rFBS"
description: "Получить список заявок на отмену rFBS"
---

# Получить список заявок на отмену rFBS

<Badge type="tip" text="POST" /> `/v2/conditional-cancellation/list`

## 接口概览

- **所属模块**：📌 CancellationAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/conditional-cancellation/list`
- **详细说明**：

> Метод для получения списка заявок на отмену rFBS-заказов.


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filters": {
    "cancellation_initiator": [
      "CLIENT"
    ],
    "posting_number": [
      "34009011-0094-1"
    ],
    "state": "ALL"
  },
  "limit": 500,
  "last_id": 0,
  "with": {
    "counter": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список заявок на отмену

```json
{
  "result": [
    {
      "approve_comment": "string",
      "approve_date": "2024-11-27T12:31:43.621Z",
      "auto_approve_date": "2024-11-27T12:31:43.621Z",
      "cancellation_id": 0,
      "cancellation_initiator": "OZON",
      "cancellation_reason": {
        "id": 0,
        "name": "string"
      },
      "cancellation_reason_message": "string",
      "cancelled_at": "2024-11-27T12:31:43.621Z",
      "order_date": "2024-11-27T12:31:43.621Z",
      "posting_number": "string",
      "state": {
        "id": 0,
        "name": "string",
        "state": "ALL"
      },
      "tpl_integration_type": "string"
    }
  ],
  "counter": "1",
  "last_id": 283784254
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
curl -X POST "https://api-seller.ozon.ru/v2/conditional-cancellation/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/conditional-cancellation/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/conditional-cancellation/list", {
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
