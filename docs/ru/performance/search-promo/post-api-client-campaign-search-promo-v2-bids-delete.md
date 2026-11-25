---
title: "Удалить товар из продвижения в оплате за заказ"
description: "Удалить товар из продвижения в оплате за заказ"
---

# Удалить товар из продвижения в оплате за заказ

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/v2/bids/delete`

## Обзор метода

- **Категория**：🔍 Оплата за заказ
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete`
- **Описание**：

> 
> В одном запросе можно передать максимум 1000 товаров.
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
  "$ref": "#/components/schemas/extcampaignDeleteSearchPromoBidsRequestV2"
}
```
:::

## Ответы сервера

### HTTP 200 - Товар удалён

::: details Посмотреть схему данных (Schema)
```json
{
  "type": "object"
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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/v2/bids/delete", {
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
