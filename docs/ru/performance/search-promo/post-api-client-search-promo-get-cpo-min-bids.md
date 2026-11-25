---
title: "Получить фиксированные ставки для товаров"
description: "Получить фиксированные ставки для товаров"
---

# Получить фиксированные ставки для товаров

<Badge type="tip" text="POST" /> `/api/client/search_promo/get_cpo_min_bids`

## Обзор метода

- **Категория**：🔍 Оплата за заказ
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/search_promo/get_cpo_min_bids`
- **Описание**：

> 
> За один запрос вы можете передать до 200 SKU.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsRecommendedBidsRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Фиксированные ставки получены

```json
{
  "bids": [
    {
      "bid": 0,
      "sku": "string"
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
curl -X POST "https://api-performance.ozon.ru/api/client/search_promo/get_cpo_min_bids" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/search_promo/get_cpo_min_bids"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/search_promo/get_cpo_min_bids", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
