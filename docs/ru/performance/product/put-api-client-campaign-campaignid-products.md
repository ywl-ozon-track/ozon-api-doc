---
title: "Обновить ставки товаров"
description: "Обновить ставки товаров"
---

# Обновить ставки товаров

<Badge type="warning" text="PUT" /> `/api/client/campaign/{campaignId}/products`

## Обзор метода

- **Категория**：🛒 Товары в Оплате за клик
- **HTTP-метод**：`PUT`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`
- **Описание**：

> 
> Этот метод перезаписывает список стоп-слов и фразы со ставками. Исходные стоп-слова и фразы со ставками удаляются.
> 
> Чтобы обновить ставки в кампании с размещением в карточке товара, передайте значения параметров `sku` и `bid`.
> 
> Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика».
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | - |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Ставки обновлены

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
curl -X PUT "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
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

response = requests.put(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
  method: "PUT",
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
