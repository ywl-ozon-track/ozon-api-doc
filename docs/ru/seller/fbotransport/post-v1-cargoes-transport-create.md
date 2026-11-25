---
title: "Создать транспортное грузоместо"
description: "Создать транспортное грузоместо"
---

# Создать транспортное грузоместо

<Badge type="tip" text="POST" /> `/v1/cargoes/transport/create`

## Обзор метода

- **Категория**：📌 FBOTransport
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cargoes/transport/create`
- **Описание**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2179-Novye-beta-metody-dlia-raboty-s-transportnymi-gruzr/) в сообществе разработчиков Ozon for dev.
> 
> [Подробнее о работе с транспортными грузоместами](https://dev.ozon.ru/start/525-Rabota-s-transportnymi-gruzomestami-TGM-v-postavkakh-FBO/)
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/cargoes.v1.CargoesTransportCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Транспортное грузоместо создано

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/cargoes.v1.CargoesTransportCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/transport/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/transport/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/transport/create", {
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
