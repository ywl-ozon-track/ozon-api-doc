---
title: "Лимиты ставок для инструментов продвижения"
description: "Лимиты ставок для инструментов продвижения"
---

# Лимиты ставок для инструментов продвижения

<Badge type="info" text="GET" /> `/api/client/limits/list`

## Обзор метода

- **Категория**：📢 Кампании и рекламируемые объекты
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/limits/list`
- **Описание**：

> 
> Вы можете получить лимиты ставок по инструментам:
> - Оплата за заказ:
>   - Минимальная и максимальная ставка для инструмента.
>   - Минимальные ставки за заказ для некоторых категорий товаров.
> - Спецразмещение и Оплата за клик:
>   - Минимальная и максимальная ставка за клик.
>   - Минимальные ставки за клик для некоторых категорий товаров.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Ответы сервера

### HTTP 200 - Лимиты ставок

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignListLimitsResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/limits/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/limits/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/limits/list", {
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
