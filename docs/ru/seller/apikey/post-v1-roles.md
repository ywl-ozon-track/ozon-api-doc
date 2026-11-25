---
title: "Получить список ролей и методов по API-ключу"
description: "Получить список ролей и методов по API-ключу"
---

# Получить список ролей и методов по API-ключу

<Badge type="tip" text="POST" /> `/v1/roles`

## Обзор метода

- **Категория**：🔑 Информация по API-ключу
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/roles`
- **Описание**：

> Метод для получения информации и ролях и методах, привязанных к API-ключу.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Список ролей и методов

```json
{
  "expires_at": "2026-02-18T09:54:23.296Z",
  "roles": [
    {
      "name": "Admin",
      "methods": [
        "/v1/actions"
      ]
    },
    {
      "name": "Posting FBS",
      "methods": [
        "/v1/posting"
      ]
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
curl -X POST "https://api-seller.ozon.ru/v1/roles" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/roles"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/roles", {
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
