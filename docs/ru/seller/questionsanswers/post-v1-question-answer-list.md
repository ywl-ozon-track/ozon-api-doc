---
title: "Список ответов на вопрос"
description: "Список ответов на вопрос"
---

# Список ответов на вопрос

<Badge type="tip" text="POST" /> `/v1/question/answer/list`

## Обзор метода

- **Категория**：📌 Questions&Answers
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/question/answer/list`
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
  "last_id": "",
  "question_id": "019228a7-91d8-76af-a73a-e989dfac7ac8",
  "sku": 646399170
}
```

## Ответы сервера

### HTTP 200 - Список ответов на вопрос

```json
{
  "answers": [
    {
      "author_name": "string",
      "id": "string",
      "published_at": "2024-08-14T11:44:35.352Z",
      "question_id": "string",
      "sku": 646399170,
      "status_publication": "",
      "text": "string"
    }
  ],
  "last_id": "string"
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
curl -X POST "https://api-seller.ozon.ru/v1/question/answer/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/question/answer/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/question/answer/list", {
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
