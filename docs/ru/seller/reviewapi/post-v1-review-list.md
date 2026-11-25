---
title: "Получить список отзывов"
description: "Получить список отзывов"
---

# Получить список отзывов

<Badge type="tip" text="POST" /> `/v1/review/list`

## Обзор метода

- **Категория**：💬 Отзывы и вопросы покупателей
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/review/list`
- **Описание**：

> <aside class="warning">
>   Метод устаревает. Переключитесь на <a href="#operation/ReviewListV2">/v2/review/list</a>.
> </aside>
> 
> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 
> Метод не возвращает параметры «Достоинства» и «Недостатки», если они есть в отзывах на товар. Эти параметры устарели, в новых отзывах их нет.
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
  "last_id": "",
  "limit": 100,
  "sort_dir": "ASC",
  "status": "ALL"
}
```

## Ответы сервера

### HTTP 200 - Список отзывов

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1ReviewListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/review/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/review/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/review/list", {
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
