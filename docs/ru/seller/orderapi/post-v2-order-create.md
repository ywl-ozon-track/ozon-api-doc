---
title: "Создать заказ"
description: "Создать заказ"
---

# Создать заказ

<Badge type="tip" text="POST" /> `/v2/order/create`

## Обзор метода

- **Категория**：📋 Управление заказами
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/order/create`
- **Описание**：

> Создаёт заказ для покупателя и получателя в системе Ozon. Передайте вариант доставки из ответа метода [/v2/delivery/checkout](#operation/DeliveryCheckout).
> 
> В ответе могут быть не все отправления. Получите список всех отправлений по номеру заказа `order_number` методом:
> - [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList) — для схемы FBO;
> - [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) — для схемы FBS.
> 
> Значение параметра `delivery_schema` должно совпадать с тем, что вы передали в [/v2/delivery/checkout](#operation/DeliveryCheckout).
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
  "$ref": "#/components/schemas/v1OrderCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Заказ создан

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1OrderCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v2/order/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/order/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/order/create", {
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
