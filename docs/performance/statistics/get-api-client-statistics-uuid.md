---
title: "Cтатус отчёта"
description: "Cтатус отчёта"
---

# Cтатус отчёта

<Badge type="info" text="GET" /> `/api/client/statistics/{UUID}`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/{UUID}`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `UUID` | `path` | 是 | Уникальный идентификатор запроса. |

## 返回响应

### HTTP 200 - Cтатус отчёта

```json
{
  "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
  "state": "OK",
  "createdAt": "2020-03-23T19:30:58.264653Z",
  "updatedAt": "2020-03-23T19:30:58.689007Z",
  "request": {
    "attributionDays": "",
    "campaignId": 1,
    "campaigns": [
      12558
    ],
    "dateFrom": "2020-03-01",
    "dateTo": "2020-03-20",
    "from": "2020-03-01T00:00:00Z",
    "groupBy": "DATE",
    "objects": [],
    "to": "2020-03-20T00:00:00Z"
  },
  "link": "string",
  "kind": "STATS"
}
```

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/{UUID}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/{UUID}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/{UUID}", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
