---
title: "Отключить продвижение товаров в акции «Морковск»"
description: "Отключить продвижение товаров в акции «Морковск»"
---

# Отключить продвижение товаров в акции «Морковск»

<Badge type="tip" text="POST" /> `/api/client/campaign/search_promo/carrots/disable`

## Обзор метода

- **Категория**：🔍 Оплата за заказ
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable`
- **Описание**：

> Удаляет товары из акции «Морковск».<br>
> [Подробнее об акции](https://seller-edu.ozon.ru/how-to-sell-effectively/advertising-of-goods/morkovsk)
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Продвижение отключено

```json
{
  "skuToInfo": {
    "property1": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": true
    },
    "property2": {
      "error": "CARROT_ERROR_NONE",
      "isDisabled": false
    }
  }
}
```

### HTTP default - An unexpected error response.

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/search_promo/carrots/disable", {
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
