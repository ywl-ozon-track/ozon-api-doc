---
title: "Создать пропуск для возврата"
description: "Создать пропуск для возврата"
---

# Создать пропуск для возврата

<Badge type="tip" text="POST" /> `/v1/return/pass/create`

## 接口概览

- **所属模块**：🎫 Пропуски на склад
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/return/pass/create`

## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "arrival_passes": [
    {
      "arrival_time": "2026-03-17T10:00:00Z",
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "dropoff_point_id": 7000123456,
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT",
      "warehouse_id": 3000007863
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Пропуск создан

```json
{
  "arrival_pass_ids": [
    6000123456
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
curl -X POST "https://api-seller.ozon.ru/v1/return/pass/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/pass/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/pass/create", {
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
