---
title: "Обновить склад"
description: "Обновить склад"
---

# Обновить склад

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/update`

## 接口概览

- **所属模块**：📌 FBSWarehouseSetup
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/fbs/update`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "address_coordinates": {
    "latitude": 55.69626,
    "longitude": 37.42686
  },
  "name": "Склад Балашиха",
  "options": {
    "comment": "Заезд на склад через главные ворота",
    "courier_phones": [
      "+7(999)999-99-99"
    ],
    "is_auto_assembly": true,
    "is_waybill_enabled": true
  },
  "phone": "+7(XXX)XXX-XX-XX",
  "warehouse_id": 1020002929332000,
  "working_days": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Склад обновлён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1UpdateWarehouseFBSResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/update", {
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
