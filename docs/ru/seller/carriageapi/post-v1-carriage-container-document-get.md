---
title: "Получить документы по грузоместам — ТрН и лист отгрузки"
description: "Получить документы по грузоместам — ТрН и лист отгрузки"
---

# Получить документы по грузоместам — ТрН и лист отгрузки

<Badge type="tip" text="POST" /> `/v1/carriage/container/document/get`

## Обзор метода

- **Категория**：🚛 Работа с грузоместами FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/carriage/container/document/get`
- **Описание**：

> Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/2059-Beta-metody-dlia-raboty-s-doveritelnoi-priemkoi/).

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
  "$ref": "#/components/schemas/carriagev1CarriageContainerDocumentGetRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Список документов

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/carriagev1CarriageContainerDocumentGetResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/carriage/container/document/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/container/document/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/container/document/get", {
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
