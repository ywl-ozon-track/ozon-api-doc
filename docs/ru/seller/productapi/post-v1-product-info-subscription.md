---
title: "Количество подписавшихся на товар пользователей"
description: "Количество подписавшихся на товар пользователей"
---

# Количество подписавшихся на товар пользователей

<Badge type="tip" text="POST" /> `/v1/product/info/subscription`

## Обзор метода

- **Категория**：📦 Загрузка и обновление товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/info/subscription`
- **Описание**：

> Метод для получения количества пользователей, которые нажали **Узнать о поступлении** на странице товара.
> 
> Вы можете передать несколько товаров в запросе.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "skus": [
    "889283932",
    "123456789",
    "987654321"
  ]
}
```

## Ответы сервера

### HTTP 200 - Количество подписавшихся пользователей

```json
{
  "result": [
    {
      "count": 3,
      "sku": 889283932
    }
  ]
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/subscription" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/subscription"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/subscription", {
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
