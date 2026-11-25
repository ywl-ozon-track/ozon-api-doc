---
title: "Справочник типов документов"
description: "Справочник типов документов"
---

# Справочник типов документов

<Badge type="info" text="GET" /> `/v1/product/certificate/types`

## Обзор метода

- **Категория**：📜 Сертификаты качества
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/certificate/types`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Справочник типов документов

```json
{
  "result": [
    {
      "name": "Сертификат соответствия",
      "value": "certificate_of_conformity"
    },
    {
      "name": "Декларация о соответствии",
      "value": "declaration"
    },
    {
      "name": "Свидетельство о регистрации",
      "value": "certificate_of_registration"
    },
    {
      "name": "Регистрационное удостоверение",
      "value": "registration_certificate"
    },
    {
      "name": "Отказное письмо",
      "value": "refused_letter"
    },
    {
      "name": "Ветеринарное свидетельство",
      "value": "veterinary_cover_document"
    },
    {
      "name": "Паспорт безопасности",
      "value": "safety_data_sheet"
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
curl -X GET "https://api-seller.ozon.ru/v1/product/certificate/types" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/types"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/types", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
