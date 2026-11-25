---
title: "Список конкурентов"
description: "Список конкурентов"
---

# Список конкурентов

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/competitors/list`

## Обзор метода

- **Категория**：🎯 Стратегии ценообразования
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list`
- **Описание**：

> Метод для получения списка конкурентов — продавцов с похожими товарами в других интернет-магазинах и маркетплейсах.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "page": 1,
  "limit": 20
}
```

## Ответы сервера

### HTTP 200 - Список конкурентов

```json
{
  "competitor": [
    {
      "id": 7820251,
      "name": "grenmarketshop.ru"
    }
  ],
  "total": 33
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list", {
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
