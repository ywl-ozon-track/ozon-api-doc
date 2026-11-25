---
title: "Проверить возможность получения возвратных отгрузок по штрихкоду"
description: "Проверить возможность получения возвратных отгрузок по штрихкоду"
---

# Проверить возможность получения возвратных отгрузок по штрихкоду

<Badge type="tip" text="POST" /> `/v1/return/giveout/is-enabled`

## Обзор метода

- **Категория**：📌 ReturnAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/return/giveout/is-enabled`
- **Описание**：

> Если у вас есть доступ, в параметре `enabled` будет указано значение `true`.

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
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## Ответы сервера

### HTTP 200 - Результат проверки

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GiveoutIsEnabledResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/is-enabled" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/is-enabled"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/is-enabled", {
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
