---
title: "Получить статус операции"
description: "Получить статус операции"
---

# Получить статус операции

<Badge type="tip" text="POST" /> `/v1/warehouse/operation/status`

## 接口概览

- **所属模块**：🏭 Warehouses (FBS & rFBS)
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/operation/status`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "operation_id": "a0cfefee-9a5a-4580-bc32-2f9a6c7973e3"
}
```

## 返回响应 (Responses)

### HTTP 200 - Статус операции

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "result": {
    "warehouse_id": 1020005000219156
  },
  "status": "SUCCESS",
  "type": "CREATE_FBS_WAREHOUSE"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/operation/status" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/operation/status"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/operation/status", {
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
