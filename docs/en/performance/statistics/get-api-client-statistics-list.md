---
title: "Список отчётов, сгенерированных через интерфейс"
description: "Список отчётов, сгенерированных через интерфейс"
---

# Список отчётов, сгенерированных через интерфейс

<Badge type="info" text="GET" /> `/api/client/statistics/list`

## 接口概览

- **所属模块**：📊 Advertising Statistics
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/list`
- **详细说明**：

> 
> Метод для получения списка отчётов, которые сгенерированы через интерфейс рекламного кабинета.
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/list", {
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
