---
title: "Получить типы пуш-уведомлений"
description: "Получить типы пуш-уведомлений"
---

# Получить типы пуш-уведомлений

<Badge type="tip" text="POST" /> `/v1/notification/push-type/list`

## Обзор метода

- **Категория**：📌 Notification
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/notification/push-type/list`
- **Описание**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1978-Novye-beta-metody-dlia-upravleniia-podkliucheniiami-PUSH-uvedomlenii/) в сообществе разработчиков Ozon for dev.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Типы пуш-уведомлений

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/notification.v1.GetNotificationPushTypeListResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/notification/push-type/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/notification/push-type/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/notification/push-type/list", {
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
