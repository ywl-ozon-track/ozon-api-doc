---
title: "Дневная статистика по кампаниям"
description: "Дневная статистика по кампаниям"
---

# Дневная статистика по кампаниям

<Badge type="info" text="GET" /> `/api/client/statistics/daily`

## 接口概览

- **所属模块**：📊 Advertising Statistics
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/daily`
- **详细说明**：

> 
> Если в запросе не указаны значения полей `dateFrom` и `dateTo`, то в ответе будет статистика за последние 7 дней.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/daily/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - название кампании,
> - дата,
> - показы,
> - клики,
> - расход в рублях,
> - заказы в штуках,
> - заказы в рублях.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | 否 (No) | - |
| `dateFrom` | `query` | 否 (No) | - |
| `dateTo` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Дневная статистика по кампаниям

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReport"
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/daily" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/daily"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/daily", {
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
