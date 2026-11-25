---
title: "获取数据报表列表"
description: "获取数据报表列表"
---

# 获取数据报表列表

<Badge type="info" text="GET" /> `/api/client/statistics/externallist`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/externallist`
- **详细说明**：

> 
> Метод для получения списка отчётов, которые сгенерированы через API сервисными аккаунтами.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `page` | `query` | 否 (No) | - |
| `pageSize` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Список отчётов

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReportsList"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/externallist" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/externallist"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/externallist", {
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
