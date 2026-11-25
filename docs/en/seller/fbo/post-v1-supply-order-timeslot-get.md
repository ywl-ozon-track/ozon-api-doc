---
title: "Интервалы поставки"
description: "Интервалы поставки"
---

# Интервалы поставки

<Badge type="tip" text="POST" /> `/v1/supply-order/timeslot/get`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/supply-order/timeslot/get`
- **详细说明**：

> <aside class="warning"> Метод устаревает и будет отключён 19 августа 2026 года. Переключитесь на <a href="#operation/SupplyOrderTimeslotList">/v2/supply-order/timeslot/list</a>. </aside>


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "supply_order_id": 84882285
}
```

## 返回响应 (Responses)

### HTTP 200 - Список интервалов поставки

```json
{
  "timeslots": [
    {
      "from": "2019-08-24T14:15:22Z",
      "to": "2019-08-24T14:15:22Z"
    }
  ],
  "timezone": [
    {
      "iana_name": "MSK",
      "offset": "+3"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/timeslot/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/timeslot/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/timeslot/get", {
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
