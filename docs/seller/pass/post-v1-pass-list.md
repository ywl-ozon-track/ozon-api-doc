---
title: "获取出入通行证列表"
description: "Список пропусков"
---

# 获取出入通行证列表

<Badge type="tip" text="POST" /> `/v1/pass/list`

## 接口概览

- **所属模块**：🎫 货车出入通行证
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/pass/list`

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "cursor": "",
  "filter": {
    "arrival_pass_ids": [
      "5000123456",
      "5000123457"
    ],
    "arrival_reason": "FBS_DELIVERY",
    "dropoff_point_ids": [
      "7000123456",
      "7000123457"
    ],
    "only_active_passes": true,
    "warehouse_ids": [
      "3000007863",
      "3000007864"
    ]
  },
  "limit": 1000
}
```

## 返回响应

### HTTP 200 - Список пропусков

```json
{
  "arrival_passes": [
    {
      "arrival_pass_id": 5000123456,
      "arrival_reasons": [
        "FBS_DELIVERY",
        "FBS_RETURN"
      ],
      "arrival_time": "2026-03-16T10:00:00Z",
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "dropoff_point_id": 7000123456,
      "is_active": true,
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT",
      "warehouse_id": 3000007863
    },
    {
      "arrival_pass_id": 5000123457,
      "arrival_reasons": [
        "FBS_RETURN"
      ],
      "arrival_time": "2026-03-16T14:30:00Z",
      "driver_name": "Петров Петр Петрович",
      "driver_phone": "+79997654321",
      "dropoff_point_id": 7000123457,
      "is_active": true,
      "vehicle_license_plate": "В456ГД178",
      "vehicle_model": "Ford Transit",
      "warehouse_id": 3000007864
    }
  ],
  "cursor": "next-page-cursor-12345"
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/pass/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pass/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pass/list", {
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
