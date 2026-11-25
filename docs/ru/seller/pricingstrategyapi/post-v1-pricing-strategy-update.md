---
title: "Обновить стратегию"
description: "Обновить стратегию"
---

# Обновить стратегию

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/update`

## Обзор метода

- **Категория**：🎯 Стратегии ценообразования
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/pricing-strategy/update`
- **Описание**：

> Можно обновить все стратегии кроме системной.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "strategy_id": "a3de1826-9c54-40f1-bb6d-1a9e2638b058",
  "strategy_name": "Новая стратегия",
  "competitors": [
    {
      "competitor_id": 1008426,
      "coefficient": 1
    },
    {
      "competitor_id": 204,
      "coefficient": 1
    },
    {
      "competitor_id": 91,
      "coefficient": 1
    },
    {
      "competitor_id": 48,
      "coefficient": 1
    },
    {
      "competitor_id": 45,
      "coefficient": 1
    }
  ]
}
```

## Ответы сервера

### HTTP 200 - Стратегия обновлена

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1Empty"
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/update", {
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
