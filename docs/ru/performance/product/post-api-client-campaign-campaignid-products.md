---
title: "Добавить товары в кампанию"
description: "Добавить товары в кампанию"
---

# Добавить товары в кампанию

<Badge type="tip" text="POST" /> `/api/client/campaign/{campaignId}/products`

## Обзор метода

- **Категория**：🛒 Товары в Оплате за клик
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`
- **Описание**：

> 
> В кампанию можно добавить не более 500 товаров.
> 
> **Рекомендации по заполнению параметров для разных кампаний**
> 
> - Для добавления в кампанию товаров передайте значения параметров `sku` и `bid`. Если параметр `bid` не указан, 
>   автоматически задаётся конкурентная ставка.
> 
> - Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика». 
> 
> - Для кампании с включённой стратегией можно добавлять товары только из категории `autopilot.categoryId`.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | - |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Товары добавлены в кампанию

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
curl -X POST "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
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
