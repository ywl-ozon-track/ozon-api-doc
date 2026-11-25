---
title: "获取список таймслотов для создания склада с отгрузкой pick-up"
description: "获取список таймслотов для создания склада с отгрузкой pick-up"
---

# 获取список таймслотов для создания склада с отгрузкой pick-up

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/create/pick-up/timeslot/list`

## 接口概览

- **所属模块**：📌 FBSWarehouseSetup
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "is_kgt": true,
  "address_coordinates": {
    "latitude": 55.7558,
    "longitude": 37.6173
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список таймслотов

```json
{
  "is_pickup_supported": true,
  "timeslots": [
    {
      "id": 123456789,
      "from": "00:00",
      "to": "00:00"
    },
    {
      "id": 987654321,
      "from": "00:00",
      "to": "00:00"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/create/pick-up/timeslot/list", {
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
