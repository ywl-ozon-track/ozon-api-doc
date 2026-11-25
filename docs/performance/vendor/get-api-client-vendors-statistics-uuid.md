---
title: "Информация об отчёте по UUID"
description: "Информация об отчёте по UUID"
---

# Информация об отчёте по UUID

<Badge type="info" text="GET" /> `/api/client/vendors/statistics/{UUID}`

## 接口概览

- **所属模块**：🌐 外部流量与品牌方分析
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `UUID` | `path` | 是 | - |
| `vendor` | `query` | 是 | - |

## 返回响应

### HTTP 200 - Информация об отчёте

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatVendorStatisticsResponse"
}
```
:::

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
curl -X GET "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}", {
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
