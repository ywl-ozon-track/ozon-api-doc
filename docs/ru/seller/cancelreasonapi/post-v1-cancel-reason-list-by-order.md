---
title: "Причины отмены заказа"
description: "Причины отмены заказа"
---

# Причины отмены заказа

<Badge type="tip" text="POST" /> `/v1/cancel-reason/list-by-order`

## Обзор метода

- **Категория**：❌ Причины отмены заказов
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cancel-reason/list-by-order`
- **Описание**：

> Возвращает возможные причины отмены для заказа.

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
  "$ref": "#/components/schemas/v1CancelReasonListByOrderRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Причины отмены заказа

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CancelReasonListByOrderResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cancel-reason/list-by-order" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cancel-reason/list-by-order"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cancel-reason/list-by-order", {
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
