---
title: "申请导出外部渠道导流投放分析数据报告"
description: "Отчёт с аналитикой внешнего трафика"
---

# 申请导出外部渠道导流投放分析数据报告

<Badge type="tip" text="POST" /> `/api/client/vendors/statistics`

## 接口概览

- **所属模块**：🌐 外部流量与品牌方分析
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/vendors/statistics`

::: details 查看官方详细说明 (Официальное описание)
> 
> Метод для запуска формирования отчёта с аналитикой внешнего трафика.
> 
> Разница между `dateFrom` и `dateTo` должна быть не больше трёх месяцев. Если разница больше, 
> отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

## 返回响应

### HTTP 200 - Успешно

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
