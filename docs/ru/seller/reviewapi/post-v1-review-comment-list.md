---
title: "Получить список комментариев на отзыв"
description: "Получить список комментариев на отзыв"
---

# Получить список комментариев на отзыв

<Badge type="tip" text="POST" /> `/v1/review/comment/list`

## Обзор метода

- **Категория**：💬 Отзывы и вопросы покупателей
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/review/comment/list`
- **Описание**：

> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 
> Метод возвращает информацию по комментариям на отзывы, которые прошли модерацию.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "review_id": "0000-0000",
  "sort_dir": "ASC",
  "filters": {
    "sku": 0,
    "published_from": "2026-03-10T14:08:00.257Z",
    "published_to": "2026-03-10T14:08:00.257Z"
  },
  "limit": 100,
  "offset": 123
}
```

## Ответы сервера

### HTTP 200 - Информация о комментариях на отзыв

```json
{
  "comments": [
    {
      "id": "1234-5678",
      "text": "comment text",
      "parent_comment_id": "3333-3333",
      "is_owner": true,
      "is_official": false,
      "is_published": true,
      "is_rejected": true,
      "likes_amount": 0,
      "dislikes_amount": 0,
      "deviation_reason": "string",
      "published_at": "2021-09-03T07:04:53.220Z"
    }
  ],
  "offset": 124
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/review/comment/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/review/comment/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/review/comment/list", {
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
