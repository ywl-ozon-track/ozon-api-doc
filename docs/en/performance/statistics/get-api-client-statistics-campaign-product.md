---
title: "ProductCampaignList"
description: "Статистика по кампании Оплата за клик"
---

# ProductCampaignList

<Badge type="info" text="GET" /> `/api/client/statistics/campaign/product`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/campaign/product`

::: details View Official Description (Russian)
> <aside class="notice">
> Не расходует лимиты Performance API.
> </aside>
> 
> В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
> четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/product/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - название кампании,
> - тип объекта,
> - статус кампании,
> - недельный бюджет в рублях,
> - бюджет в рублях,
> - расход в рублях,
> - показы,
> - клики,
> - количество добавлений товара в корзину,
> - отношение числа кликов к числу показов (CTR),
> - средняя цена клика в рублях,
> - заказы в штуках,
> - заказы в рублях,
> - доля рекламных расходов (ДРР),
> - тип продвижения,
> - места размещения для спецразмещения.
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

### HTTP 200 - Статистика по продуктовым кампаниям

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/campaign/product" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/campaign/product"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/campaign/product", {
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
