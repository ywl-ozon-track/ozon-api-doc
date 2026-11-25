---
title: "SubmitRequest"
description: "Статистика по кампании"
---

# SubmitRequest

<Badge type="tip" text="POST" /> `/api/client/statistics`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics`

::: details View Official Description (Russian)
> 
> В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
> четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
> 
> Performance API асинхронный. Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор
> отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
> Формат отчёта — CSV. 
> 
> Архивы с примерами отчётов для разных типов кампаний:
> - [Баннеры и нативные баннеры](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/banner_example_1766144809.zip)
> - [Видеобаннеры](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/videobanner_1705412072.zip)
> - [Оплата за клик](https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/performance/api/report-examples/stencils16-02_1770993970.zip)
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/json`.
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

```json
{
  "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
  "vendor": true
}
```

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics", {
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
