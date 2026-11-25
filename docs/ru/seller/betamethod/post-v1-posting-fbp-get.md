---
title: "Получить информацию об отправлении по идентификатору"
description: "Получить информацию об отправлении по идентификатору"
---

# Получить информацию об отправлении по идентификатору

<Badge type="tip" text="POST" /> `/v1/posting/fbp/get`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/posting/fbp/get`
- **Описание**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2237-Novyi-metod-polucheniia-FBP-postingov-po-identifikatoru-otpravleniia/) в сообществе разработчиков Ozon for dev.

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
  "$ref": "#/components/schemas/posting.v1.GetFbpPostingRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация об отправлении

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/posting.v1.GetFbpPostingResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbp/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbp/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbp/get", {
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
