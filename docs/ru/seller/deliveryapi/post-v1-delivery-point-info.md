---
title: "Получить информацию о точке самовывоза"
description: "Получить информацию о точке самовывоза"
---

# Получить информацию о точке самовывоза

<Badge type="tip" text="POST" /> `/v1/delivery/point/info`

## Обзор метода

- **Категория**：🛣️ Доставка и логистика
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/delivery/point/info`
- **Описание**：

> Возвращает подробную информацию о точке самовывоза для пользователя.
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
  "$ref": "#/components/schemas/v1DeliveryPointInfoRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о точке самовывоза

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1DeliveryPointInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery/point/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery/point/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery/point/info", {
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
