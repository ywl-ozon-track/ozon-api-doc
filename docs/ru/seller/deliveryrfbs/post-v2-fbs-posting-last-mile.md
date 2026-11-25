---
title: "Изменить статус на «Последняя миля»"
description: "Изменить статус на «Последняя миля»"
---

# Изменить статус на «Последняя миля»

<Badge type="tip" text="POST" /> `/v2/fbs/posting/last-mile`

## Обзор метода

- **Категория**：📌 DeliveryrFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/fbs/posting/last-mile`
- **Описание**：

> <aside class="warning">Перед изменением статуса проверьте текущий статус отправления методом <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>. Изменение статуса происходит асинхронно.</aside>
> 
> Перевести отправление в статус «Последняя миля», если используется сторонняя служба доставки.
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
  "posting_number": [
    "48173252-0033-2"
  ]
}
```

## Ответы сервера

### HTTP 200 - Статус изменён

```json
{
  "result": [
    {
      "error": [],
      "posting_number": "48173252-0033-2",
      "result": true
    }
  ]
}
```

### HTTP 400 - Invalid parameter

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Access denied

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Response not found

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Request conflict

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Internal server error

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
curl -X POST "https://api-seller.ozon.ru/v2/fbs/posting/last-mile" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/fbs/posting/last-mile"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/fbs/posting/last-mile", {
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
