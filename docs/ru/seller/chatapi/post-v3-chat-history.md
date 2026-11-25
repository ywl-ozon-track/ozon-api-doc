---
title: "История чата"
description: "История чата"
---

# История чата

<Badge type="tip" text="POST" /> `/v3/chat/history`

## Обзор метода

- **Категория**：🗨️ Чаты с покупателями
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v3/chat/history`
- **Описание**：

> Возвращает историю сообщений чата. По умолчанию от самого нового сообщения к старым. <br><br> Получите список чатов с покупателем `chats.chat.chat_type="Buyer_Seller"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "chat_id": "18b8e1f9-4ae7-461c-84ea-8e1f54d1a45e",
  "direction": "Forward",
  "filter": {
    "message_ids": [
      "3000000300211559667"
    ]
  },
  "from_message_id": 3000000000118032000,
  "limit": 1
}
```

## Ответы сервера

### HTTP 200 - История чата

```json
{
  "has_next": true,
  "messages": [
    {
      "context": {
        "order_number": "123456789",
        "sku": "987654321"
      },
      "created_at": "2019-08-24T14:15:22Z",
      "data": [
        "Здравствуйте, у меня вопрос по вашему товару \"Стекло защитное для смартфонов\", артикул 11223. Подойдет ли он на данную [ модель ](https://www.ozon.ru/product/smartfon-samsung-galaxy-a03s-4-64-gb-chernyy) телефона?"
      ],
      "is_image": true,
      "is_read": true,
      "message_id": "3000000000817031942",
      "moderate_image_status": "SUCCESS",
      "user": {
        "id": "115568",
        "type": "Сustomer"
      }
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
curl -X POST "https://api-seller.ozon.ru/v3/chat/history" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/chat/history"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/chat/history", {
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
