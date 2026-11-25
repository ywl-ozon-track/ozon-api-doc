---
title: "更新первую милю"
description: "Обновить первую милю"
---

# 更新первую милю

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/first-mile/update`

## 接口概览

- **所属模块**：📌 FBSWarehouseSetup
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "courier_return_warehouse_info": {
    "comment": "Комментарий",
    "courier_return_warehouse_id": 0,
    "is_courier_return_warehouse_match": false
  },
  "first_mile_type": "DROP_OFF",
  "drop_off_point_id": 0,
  "cut_in_time": 0,
  "timeslot_id": 0,
  "return_point_id": 0,
  "warehouse_id": 0
}
```

## 返回响应

### HTTP 200 - Первая миля обновлена

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1UpdateWarehouseFBSFirstMileResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update", {
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
