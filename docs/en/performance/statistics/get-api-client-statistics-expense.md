---
title: "Статистика по расходу кампаний"
description: "Статистика по расходу кампаний"
---

# Статистика по расходу кампаний

<Badge type="info" text="GET" /> `/api/client/statistics/expense`

## 接口概览

- **所属模块**：📊 Advertising Statistics
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/expense`
- **详细说明**：

> 
> Если в запросе не указаны значения полей `dateFrom` и `dateTo`, то в ответе будет статистика за последние 7 дней.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/expense/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - дата,
> - название,
> - расход,
> - расход с абонентского счёта,
> - расход бонусов.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | 否 (No) | - |
| `dateFrom` | `query` | 否 (No) | - |
| `dateTo` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Статистика по расходу кампаний

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/expense" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/expense"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/expense", {
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
