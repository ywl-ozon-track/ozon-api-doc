---
title: "Информация о вопросе"
description: "Информация о вопросе"
---

# Информация о вопросе

<Badge type="tip" text="POST" /> `/v1/question/info`

## Обзор метода

- **Категория**：📌 Questions&Answers
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/question/info`
- **Описание**：

> Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).
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
  "question_id": "string"
}
```

## Ответы сервера

### HTTP 200 - Информация о вопросе

```json
{
  "answers_count": "0",
  "author_name": "Пользователь OZON",
  "product_url": "https://www.ozon.ru/product/149829950/",
  "sku": 646399170,
  "id": "0192a009-769f-7ee9-b412-893045171a66",
  "text": "Можно выбрать цвет?",
  "question_link": "https://www.ozon.ru/product/149829950/questions/?qid=290125772&utm_campaign=reviews_sc_link&utm_medium=share_button&utm_source=smm",
  "published_at": "2024-10-08T10:09:29.099284Z",
  "status": "VIEWED"
}
```

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1QuestionAnswerCreateDefault"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/question/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/question/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/question/info", {
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
