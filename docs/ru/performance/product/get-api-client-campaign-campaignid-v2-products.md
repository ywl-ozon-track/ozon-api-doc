---
title: "Список товаров кампании"
description: "Список товаров кампании"
---

# Список товаров кампании

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/v2/products`

## Обзор метода

- **Категория**：🛒 Товары в Оплате за клик
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | Идентификатор кампании. |
| `page` | `query` | Нет | Номер страницы. |
| `pageSize` | `query` | Нет | Размер страницы. |

## Ответы сервера

### HTTP 200 - Список товаров кампании

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsResponseV2"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/v2/products", {
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
