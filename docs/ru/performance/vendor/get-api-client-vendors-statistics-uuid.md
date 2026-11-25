---
title: "Информация об отчёте по UUID"
description: "Информация об отчёте по UUID"
---

# Информация об отчёте по UUID

<Badge type="info" text="GET" /> `/api/client/vendors/statistics/{UUID}`

## Обзор метода

- **Категория**：🌐 Аналитика внешнего трафика
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `UUID` | `path` | Да | - |
| `vendor` | `query` | Да | - |

## Ответы сервера

### HTTP 200 - Информация об отчёте

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatVendorStatisticsResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/vendors/statistics/{UUID}", {
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
