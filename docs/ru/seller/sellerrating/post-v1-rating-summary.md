---
title: "Получить информацию о текущих рейтингах продавца"
description: "Получить информацию о текущих рейтингах продавца"
---

# Получить информацию о текущих рейтингах продавца

<Badge type="tip" text="POST" /> `/v1/rating/summary`

## Обзор метода

- **Категория**：📌 SellerRating
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/rating/summary`
- **Описание**：

> Рейтинг продавца по следующим показателям: индекс цен, доставки вовремя, процент отмен, жалобы и другие.
> Соответствует разделу **Рейтинги → Рейтинги продавца** в личном кабинете.
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
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о рейтингах

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1RatingSummaryV1Response"
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
curl -X POST "https://api-seller.ozon.ru/v1/rating/summary" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/rating/summary"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/rating/summary", {
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
