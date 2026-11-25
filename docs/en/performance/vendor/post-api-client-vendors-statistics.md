---
title: "Отчёт с аналитикой внешнего трафика"
description: "Отчёт с аналитикой внешнего трафика"
---

# Отчёт с аналитикой внешнего трафика

<Badge type="tip" text="POST" /> `/api/client/vendors/statistics`

## 接口概览

- **所属模块**：🌐 External Traffic Analytics
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/vendors/statistics`
- **详细说明**：

> 
> Метод для запуска формирования отчёта с аналитикой внешнего трафика.
> 
> Разница между `dateFrom` и `dateTo` должна быть не больше трёх месяцев. Если разница больше, 
> отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Успешно

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/vendors/statistics" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
