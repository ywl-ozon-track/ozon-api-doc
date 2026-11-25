---
title: "Дневная статистика по кампаниям"
description: "Дневная статистика по кампаниям"
---

# Дневная статистика по кампаниям

<Badge type="info" text="GET" /> `/api/client/statistics/daily`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistics/daily`
- **Описание**：

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

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | Нет | - |
| `dateFrom` | `query` | Нет | - |
| `dateTo` | `query` | Нет | - |

## Ответы сервера

### HTTP 200 - Дневная статистика по кампаниям

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReport"
}
```
:::

### HTTP default - Ошибка запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

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
