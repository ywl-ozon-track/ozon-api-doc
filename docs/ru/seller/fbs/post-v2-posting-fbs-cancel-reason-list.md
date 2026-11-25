---
title: "Причины отмены отправлений"
description: "Причины отмены отправлений"
---

# Причины отмены отправлений

<Badge type="tip" text="POST" /> `/v2/posting/fbs/cancel-reason/list`

## Обзор метода

- **Категория**：📌 FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/posting/fbs/cancel-reason/list`
- **Описание**：

> Возвращает список причин отмены для всех отправлений.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Причины отмены отправлений

```json
{
  "result": [
    {
      "id": 352,
      "title": "Товар закончился на складе продавца",
      "type_id": "seller",
      "is_available_for_cancellation": true
    },
    {
      "id": 401,
      "title": "Продавец отклонил арбитраж",
      "type_id": "seller",
      "is_available_for_cancellation": false
    },
    {
      "id": 402,
      "title": "Другое (вина продавца)",
      "type_id": "seller",
      "is_available_for_cancellation": true
    },
    {
      "id": 666,
      "title": "Возврат из службы доставки: нет доставки в указанный регион",
      "type_id": "seller",
      "is_available_for_cancellation": false
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/cancel-reason/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/cancel-reason/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/cancel-reason/list", {
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
