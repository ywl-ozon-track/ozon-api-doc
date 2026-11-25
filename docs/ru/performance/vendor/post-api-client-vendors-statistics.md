---
title: "Отчёт с аналитикой внешнего трафика"
description: "Отчёт с аналитикой внешнего трафика"
---

# Отчёт с аналитикой внешнего трафика

<Badge type="tip" text="POST" /> `/api/client/vendors/statistics`

## Обзор метода

- **Категория**：🌐 Аналитика внешнего трафика
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/vendors/statistics`
- **Описание**：

> 
> Метод для запуска формирования отчёта с аналитикой внешнего трафика.
> 
> Разница между `dateFrom` и `dateTo` должна быть не больше трёх месяцев. Если разница больше, 
> отчёт сформируется за 3 месяца с даты, указанной в `dateFrom`.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Успешно

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/vendors/statistics" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics", {
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
