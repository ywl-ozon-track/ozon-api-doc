---
title: "Удалить ответ на вопрос"
description: "Удалить ответ на вопрос"
---

# Удалить ответ на вопрос

<Badge type="tip" text="POST" /> `/v1/question/answer/delete`

## Обзор метода

- **Категория**：📌 Questions&Answers
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/question/answer/delete`
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
  "answer_id": "0192e7ce-e12c-7a74-afc7-26e877799204",
  "sku": 646399170
}
```

## Ответы сервера

### HTTP 200 - Ответ удалён

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
curl -X POST "https://api-seller.ozon.ru/v1/question/answer/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/question/answer/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/question/answer/delete", {
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
