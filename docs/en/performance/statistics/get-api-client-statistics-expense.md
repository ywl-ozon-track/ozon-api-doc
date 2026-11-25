---
title: "GetCampaignExpense"
description: "Статистика по расходу кампаний"
---

# GetCampaignExpense

<Badge type="info" text="GET" /> `/api/client/statistics/expense`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/expense`

::: details View Official Description (Russian)
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
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | No | - |
| `dateFrom` | `query` | No | - |
| `dateTo` | `query` | No | - |

## Responses

### HTTP 200 - Статистика по расходу кампаний

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReport"
}
```
:::

### HTTP default - Ошибка запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

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
