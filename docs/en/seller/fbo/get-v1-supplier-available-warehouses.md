---
title: "Загруженность складов Ozon"
description: "Загруженность складов Ozon"
---

# Загруженность складов Ozon

<Badge type="info" text="GET" /> `/v1/supplier/available_warehouses`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`GET`
- **接口地址**：`https://api-seller.ozon.ru/v1/supplier/available_warehouses`
- **详细说明**：

> Метод возвращает список активных складов Ozon с информацией об их средней загруженности на ближайшее время.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 返回响应 (Responses)

### HTTP 200 - Информация о загруженности складов

```json
{
  "result": [
    {
      "schedule": {
        "capacity": [
          {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z",
            "value": 0
          }
        ],
        "date": "2019-08-24T14:15:22Z"
      },
      "warehouse": {
        "id": "2000030394123",
        "name": "ХОРУГВИНО-РФЦ"
      }
    }
  ]
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
curl -X GET "https://api-seller.ozon.ru/v1/supplier/available_warehouses" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supplier/available_warehouses"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supplier/available_warehouses", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
