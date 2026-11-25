---
title: "Список отчётов, сгенерированных через API"
description: "Список отчётов, сгенерированных через API"
---

# Список отчётов, сгенерированных через API

<Badge type="info" text="GET" /> `/api/client/statistics/externallist`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistics/externallist`
- **Описание**：

> 
> Метод для получения списка отчётов, которые сгенерированы через API сервисными аккаунтами.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `page` | `query` | Нет | - |
| `pageSize` | `query` | Нет | - |

## Ответы сервера

### HTTP 200 - Список отчётов

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReportsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/externallist" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/externallist"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/externallist", {
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
