---
title: "Получить список поисковых запросов по тексту"
description: "Получить список поисковых запросов по тексту"
---

# Получить список поисковых запросов по тексту

<Badge type="tip" text="POST" /> `/v1/search-queries/text`

## Обзор метода

- **Категория**：💎 Premium-функционал
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/search-queries/text`
- **Описание**：

> Доступно для продавцов с подпиской [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "limit": "50",
  "offset": "0",
  "sort_by": "CLIENT_COUNT",
  "sort_dir": "ASC",
  "text": "string"
}
```

## Ответы сервера

### HTTP 200 - Список поисковых запросов

```json
{
  "search_queries": [
    {
      "avg_price": 3786.6,
      "conversion_to_cart": 0.163,
      "client_count": 165418,
      "items_views": 140.828,
      "query": "куртка женская демисезон",
      "add_to_cart": 26977,
      "sellers_count": 63.833
    },
    {
      "avg_price": 3786.6,
      "conversion_to_cart": 0.163,
      "client_count": 165418,
      "items_views": 140.828,
      "query": "куртка женская демисезон",
      "add_to_cart": 26977,
      "sellers_count": 63.833
    }
  ],
  "offset": "string",
  "total": "string"
}
```

### HTTP 400 - Неверный параметр

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v1/search-queries/text" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/search-queries/text"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/search-queries/text", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
