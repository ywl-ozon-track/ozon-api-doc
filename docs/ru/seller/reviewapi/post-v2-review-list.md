---
title: "Получить список отзывов"
description: "Получить список отзывов"
---

# Получить список отзывов

<Badge type="tip" text="POST" /> `/v2/review/list`

## Обзор метода

- **Категория**：💬 Отзывы и вопросы покупателей
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/review/list`
- **Описание**：

> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
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
  "filters": {
    "sku": [
      0
    ],
    "order_status": "DELIVERED",
    "status": "NEW",
    "published_from": "2026-03-10T14:08:00.257Z",
    "published_to": "2026-03-10T14:08:00.257Z"
  },
  "last_id": "string",
  "limit": 0,
  "sort_dir": "ASC"
}
```

## Ответы сервера

### HTTP 200 - Список отзывов

```json
{
  "reviews": [
    {
      "id": "017c0d1c-66d3-b838-3d29-cf9b95a6ac48",
      "sku": "148591503",
      "text": "Не лучший товар, встречал и получше за те же деньги.",
      "published_at": "2024-10-10T07:23:55.970Z",
      "rating": 2,
      "status": "NEW",
      "comments_amount": 0,
      "photos_amount": 0,
      "videos_amount": 0,
      "order_status": "DELIVERED",
      "is_rating_participant": true
    }
  ],
  "has_next": true,
  "last_id": "017c0d53-a7c8-81ef-53de-7d32fcbd7421"
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
curl -X POST "https://api-seller.ozon.ru/v2/review/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/review/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/review/list", {
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
