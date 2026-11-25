---
title: "Получить статус отмены заказа"
description: "Получить статус отмены заказа"
---

# Получить статус отмены заказа

<Badge type="tip" text="POST" /> `/v1/order/cancel/status`

## Обзор метода

- **Категория**：📋 Управление заказами
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/order/cancel/status`

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
  "$ref": "#/components/schemas/v1OrderCancelStatusRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Статус отмены заказа

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1OrderCancelStatusResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/order/cancel/status" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/order/cancel/status"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/order/cancel/status", {
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
