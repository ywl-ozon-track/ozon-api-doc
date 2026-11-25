---
title: "Список запрошенных отчётов с аналитикой внешнего трафика"
description: "Список запрошенных отчётов с аналитикой внешнего трафика"
---

# Список запрошенных отчётов с аналитикой внешнего трафика

<Badge type="info" text="GET" /> `/api/client/vendors/statistics/list`

## Обзор метода

- **Категория**：🌐 Аналитика внешнего трафика
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/vendors/statistics/list`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `page` | `query` | Нет | - |
| `pageSize` | `query` | Нет | - |

## Ответы сервера

### HTTP 200 - Отчёты

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatVendorStatisticsReportsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/vendors/statistics/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics/list", {
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
