---
title: "Получить список товаров, которые могут участвовать в акции"
description: "Получить список товаров, которые могут участвовать в акции"
---

# Получить список товаров, которые могут участвовать в акции

<Badge type="tip" text="POST" /> `/v2/actions/candidates`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/actions/candidates`
- **Описание**：

> <aside class="warning">
> До 13 октября 2026 года метод работает аналогично <a href="#operation/PromosCandidates">/v1/actions/candidates</a>.
> </aside>
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
  "action_id": 258568,
  "last_id": "80698",
  "limit": 100
}
```

## Ответы сервера

### HTTP 200 - Список товаров, которые могут участвовать в акции

```json
{
  "products": [
    {
      "id": 8888888,
      "price": {
        "amount": "1827",
        "currency": "RUB"
      },
      "action_price": {
        "amount": "1800",
        "currency": "RUB"
      },
      "max_action_price": {
        "amount": "62",
        "currency": "RUB"
      },
      "min_stock": 1,
      "recommended_stock": 2,
      "marketplace_seller_price": {
        "amount": "70",
        "currency": "RUB"
      },
      "alert_max_action_price_failed": false,
      "alert_max_action_price": {
        "amount": "30",
        "currency": "RUB"
      },
      "current_boost": 15,
      "price_min_elastic": {
        "amount": "62",
        "currency": "RUB"
      },
      "price_max_elastic": {
        "amount": "53",
        "currency": "RUB"
      },
      "min_boost": 15,
      "max_boost": 55,
      "website_prices": {
        "price": {
          "amount": "54",
          "currency": "RUB"
        },
        "prices_by_schema": {}
      },
      "min_seller_price": {
        "amount": "1",
        "currency": "RUB"
      },
      "is_quarantined": false
    }
  ],
  "total": 219176,
  "last_id": "81881"
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
curl -X POST "https://api-seller.ozon.ru/v2/actions/candidates" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/actions/candidates"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/actions/candidates", {
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
