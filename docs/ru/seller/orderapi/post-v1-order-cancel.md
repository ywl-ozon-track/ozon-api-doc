---
title: "Отменить заказ"
description: "Отменить заказ"
---

# Отменить заказ

<Badge type="tip" text="POST" /> `/v1/order/cancel`

## Обзор метода

- **Категория**：📋 Управление заказами
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/order/cancel`
- **Описание**：

> Отменяет заказ со всеми отправлениями. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-order](#operation/CancelReasonListByOrder).
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
  "$ref": "#/components/schemas/v1OrderCancelRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Заказ отменён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1OrderCancelResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/order/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/order/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/order/cancel", {
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
