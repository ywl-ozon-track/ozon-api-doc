---
title: "Удалить комментарий на отзыв"
description: "Удалить комментарий на отзыв"
---

# Удалить комментарий на отзыв

<Badge type="tip" text="POST" /> `/v1/review/comment/delete`

## Обзор метода

- **Категория**：💬 Отзывы и вопросы покупателей
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/review/comment/delete`
- **Описание**：

> <aside class="warning">
>   Метод устаревает. Переключитесь на <a href="#operation/ReviewCommentDeleteV2">/v2/review/comment/delete</a>.
> </aside>
> 
> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CommentDeleteRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Комментарий удалён

::: details Посмотреть схему данных (Schema)
```json
{
  "type": "object"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/review/comment/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/review/comment/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/review/comment/delete", {
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
