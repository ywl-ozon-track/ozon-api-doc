---
title: "SearchPromoOrdersReportSubmitRequest"
description: "Получить отчёт по заказам в оплате за заказ — выбранные товары"
---

# SearchPromoOrdersReportSubmitRequest

<Badge type="tip" text="POST" /> `/api/client/statistic/orders/generate`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistic/orders/generate`

::: details View Official Description (Russian)
> 
> В параметрах запроса `from` и `to` укажите промежуток времени.
> 
> Performance API асинхронный.
> Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
> 
> Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistic/orders/generate/json`.
>   
> Отчёт содержит:
> - период отчёта;
> - дату;
> - ID заказа;
> - номер заказа;
> - SKU;
> - SKU продвигаемого товара;
> - артикул;
> - наименование;
> - источник заказа;
> - количество;
> - стоимость, ₽;
> - ставку, %;
> - ставку, ₽;
> - расход, ₽.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Статистика по кампании

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/statistic/orders/generate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistic/orders/generate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistic/orders/generate", {
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
