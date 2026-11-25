---
title: "Конкурентные ставки для товара"
description: "Конкурентные ставки для товара"
---

# Конкурентные ставки для товара

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/products/bids/competitive`

## Обзор метода

- **Категория**：🛒 Товары в Оплате за клик
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive`
- **Описание**：

> 
> Если товар не добавлен в кампанию, в параметре `bid` будет значение `0`.
> В одном запросе вы можете передать до 200 товаров.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | Идентификатор кампании. |
| `skus` | `query` | Нет | Список SKU товаров. |

## Ответы сервера

### HTTP 200 - Конкурентные ставки

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignGetProductsCompetitiveBidsResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products/bids/competitive", {
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
