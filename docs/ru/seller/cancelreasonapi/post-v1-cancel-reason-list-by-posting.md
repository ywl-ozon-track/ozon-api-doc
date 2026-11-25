---
title: "Причины отмены отправления"
description: "Причины отмены отправления"
---

# Причины отмены отправления

<Badge type="tip" text="POST" /> `/v1/cancel-reason/list-by-posting`

## Обзор метода

- **Категория**：❌ Причины отмены заказов
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting`
- **Описание**：

> Возвращает возможные причины отмены для отправления.

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
  "$ref": "#/components/schemas/v1CancelReasonListByPostingRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Причины отмены отправления

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CancelReasonListByPostingResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cancel-reason/list-by-posting", {
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
