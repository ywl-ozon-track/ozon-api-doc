---
title: "获取список drop-off пунктов для создания склада"
description: "Получить список drop-off пунктов для создания склада"
---

# 获取список drop-off пунктов для создания склада

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/create/drop-off/list`

## 接口概览

- **所属模块**：📌 FBSWarehouseSetup
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/fbs/create/drop-off/list`

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "country_code": "RU",
  "is_kgt": false,
  "coordinates": {
    "latitude": 55,
    "longitude": 37
  },
  "search": {
    "address": "москва",
    "types": [
      "PPZ"
    ]
  }
}
```

## 返回响应

### HTTP 200 - Список получен

```json
{
  "points": [
    {
      "address": "Россия, Москва, Москва, Россия, г. Москва, Никольская улица, 7-9 строение 4",
      "discount_percent": 1,
      "id": "1020002487458000",
      "last_transit_time_local": {
        "hours": 12,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "coordinates": {
        "latitude": 55.756107,
        "longitude": 37.620426
      },
      "type": "PVZ"
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/create/drop-off/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/create/drop-off/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/create/drop-off/list", {
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
