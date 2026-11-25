---
title: "Получить возможные значения дочерней характеристики"
description: "Получить возможные значения дочерней характеристики"
---

# Получить возможные значения дочерней характеристики

<Badge type="tip" text="POST" /> `/v1/description-category/dependent-attributes/values`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/description-category/dependent-attributes/values`
- **Описание**：

> Возвращает возможные значения дочерней характеристики для значений родительской.
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2296-Novye-metody-zavisimykh-atributov/) в сообществе разработчиков Ozon for dev.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "parent_attribute_id": 8229,
  "child_attribute_id": 23348,
  "description_category_id": 234123,
  "type_id": 123123,
  "limit": 4,
  "cursor": ""
}
```

## Ответы сервера

### HTTP 200 - Возможные значения дочерней характеристики

```json
{
  "cursor": "eyJwYXJlbnRfdmFsdWVfaWQiOjEwMDIsImNoaWxkX2luZGV4IjowfQ==",
  "result": [
    {
      "parent_value_id": 1001,
      "parent_value": "Лада",
      "children": [
        {
          "child_value_id": 2001,
          "child_value": "Гранта"
        },
        {
          "child_value_id": 2002,
          "child_value": "Приора"
        },
        {
          "child_value_id": 2003,
          "child_value": "Веста"
        }
      ]
    },
    {
      "parent_value_id": 1002,
      "parent_value": "Тойота",
      "children": [
        {
          "child_value_id": 2004,
          "child_value": "Королла"
        }
      ]
    }
  ]
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/dependent-attributes/values" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/dependent-attributes/values"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/dependent-attributes/values", {
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
