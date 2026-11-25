---
title: "Список доступных для акции товаров"
description: "Список доступных для акции товаров"
---

# Список доступных для акции товаров

<Badge type="tip" text="POST" /> `/v1/actions/candidates`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions/candidates`
- **Описание**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsCandidates">/v2/actions/candidates</a>.
> </aside>
> 
> Метод для получения списка товаров, которые могут участвовать в акции, по её идентификатору.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "action_id": 63337,
  "limit": 10,
  "last_id": "bnVсbA==123123das"
}
```

## Ответы сервера

### HTTP 200 - Список товаров

```json
{
  "result": {
    "products": [
      {
        "id": 226,
        "price": 250,
        "action_price": 10,
        "alert_max_action_price_failed": true,
        "alert_max_action_price": 31,
        "max_action_price": 175,
        "add_mode": "NOT_SET",
        "stock": 2,
        "min_stock": 1,
        "current_boost": 3,
        "price_min_elastic": 150,
        "price_max_elastic": 300,
        "min_boost": 12,
        "max_boost": 15
      }
    ],
    "total": 2,
    "last_id": "bnVсbA=="
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/candidates" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/candidates"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/candidates", {
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
