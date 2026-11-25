---
title: "ExternalStatistics StatisticsPhrasesSubmitRequest2"
description: "Отчёт по поисковым запросам"
---

# ExternalStatistics StatisticsPhrasesSubmitRequest2

<Badge type="tip" text="POST" /> `/api/client/statistics/phrases`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`POST`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/phrases`

::: details View Official Description (Russian)
> Метод находится на стадии тестирования.<br><br>
> Отчёт можно сформировать только для кампаний с оплатой за клик с признаком `placement = PLACEMENT_TOP_PROMOTION`.<br><br>
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/phrases/json`.
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Отчёт по поисковым запросам

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatisticsStatisticsRequestID"
}
```
:::

### HTTP default - Ошибка

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics/phrases" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/phrases"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/phrases", {
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
