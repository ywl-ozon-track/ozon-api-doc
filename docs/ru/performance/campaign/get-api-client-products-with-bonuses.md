---
title: "Список товаров с бонусами"
description: "Список товаров с бонусами"
---

# Список товаров с бонусами

<Badge type="info" text="GET" /> `/api/client/products_with_bonuses`

## Обзор метода

- **Категория**：📢 Кампании и рекламируемые объекты
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/products_with_bonuses`
- **Описание**：

> Возвращает список SKU товаров, на которые начислены бонусы. 
> 
> За клик на товар в первую очередь тратятся начисленные на него бонусы. Если бонусы кончились, тратится общий бюджет кампании.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Ответы сервера

### HTTP 200 - Список товаров с бонусами

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignListProductsWithBonusesResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/products_with_bonuses" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/products_with_bonuses"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/products_with_bonuses", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
