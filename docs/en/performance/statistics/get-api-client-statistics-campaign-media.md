---
title: "MediaCampaignList"
description: "Статистика по медийным кампаниям"
---

# MediaCampaignList

<Badge type="info" text="GET" /> `/api/client/statistics/campaign/media`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/campaign/media`

::: details View Official Description (Russian)
> 
> В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
> четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/media/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - название кампании,
> - формат кампании,
> - статус кампании,
> - дневной бюджет в рублях,
> - бюджет в рублях,
> - расход в рублях,
> - показы,
> - клики,
> - средняя цена 1000 показов в рублях,
> - отношение числа кликов к числу показов (CTR),
> - средняя цена клика в рублях,
> - заказы в штуках,
> - заказы после просмотра в штуках,
> - сумма заказов после просмотра,
> - доля рекламных расходов (ДРР),
> - сумма заказов,
> - тип оплаты,
> - тип бюджета.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | No | - |
| `from` | `query` | No | - |
| `to` | `query` | No | - |
| `dateFrom` | `query` | No | - |
| `dateTo` | `query` | No | - |

## Responses

### HTTP 200 - Статистика по медийным кампаниям

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/campaign/media" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/campaign/media"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/campaign/media", {
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
