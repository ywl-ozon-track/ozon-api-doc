---
title: "Получить отчёты"
description: "Получить отчёты"
---

# Получить отчёты

<Badge type="info" text="GET" /> `/api/client/statistics/report`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistics/report`
- **Описание**：

> При успешном запросе ссылка на скачивание отчёта в формате CSV или ZIP появится в поле `link` при использовании метода [«Статус отчета»](#operation/StatisticsCheck).
> 
> Формат отчёта в заголовке ответа указан в поле `content-type`. Формат зависит от того, сколько кампаний в поле `campaigns` исходного запроса:
> - CSV — если в списке одна кампания.
> - ZIP-архив — если в списке несколько кампаний. Каждый файл соответствует одной кампании из списка. Имя файла вида `<идентификатор кампании>.csv`.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `UUID` | `query` | Нет | - |

## Ответы сервера

### HTTP 200 - Отчёт

### HTTP 404 - Некорректный UUID

```json
{
  "error": "report not found"
}
```

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/report" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/report"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/report", {
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
