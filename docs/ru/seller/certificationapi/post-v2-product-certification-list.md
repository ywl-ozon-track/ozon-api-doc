---
title: "Список сертифицируемых категорий"
description: "Список сертифицируемых категорий"
---

# Список сертифицируемых категорий

<Badge type="tip" text="POST" /> `/v2/product/certification/list`

## Обзор метода

- **Категория**：📜 Сертификаты качества
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/product/certification/list`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "page": 1,
  "page_size": 100
}
```

## Ответы сервера

### HTTP 200 - Список сертифицируемых категорий

```json
{
  "certification": [
    {
      "category_id": 582676,
      "category_name": "Витаминно-минеральные комплексы для взрослых",
      "is_required": true,
      "type_id": 113,
      "type_name": "products"
    }
  ],
  "total": 1
}
```

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
curl -X POST "https://api-seller.ozon.ru/v2/product/certification/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/certification/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/certification/list", {
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
