---
title: "Поиск по справочным значениям характеристики"
description: "Поиск по справочным значениям характеристики"
---

# Поиск по справочным значениям характеристики

<Badge type="tip" text="POST" /> `/v1/description-category/attribute/values/search`

## Обзор метода

- **Категория**：📂 Атрибуты и характеристики Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/description-category/attribute/values/search`
- **Описание**：

> Возвращает справочные значения характеристики по заданному значению `value` в запросе.
> 
> Узнать, есть ли вложенный справочник, можно через метод [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes).
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
  "attribute_id": 85,
  "description_category_id": 17054869,
  "limit": 100,
  "type_id": 97311,
  "value": "Name"
}
```

## Ответы сервера

### HTTP 200 - Справочные значения характеристики.

```json
{
  "result": [
    {
      "id": 1,
      "info": "Черный-товар",
      "picture": "https://example.com/images/color_black.jpg",
      "value": "Чёрный"
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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/attribute/values/search" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/attribute/values/search"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/attribute/values/search", {
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
