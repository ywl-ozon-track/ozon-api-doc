---
title: "Список продвигаемых объектов в кампании"
description: "Список продвигаемых объектов в кампании"
---

# Список продвигаемых объектов в кампании

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/objects`

## Обзор метода

- **Категория**：📢 Кампании и рекламируемые объекты
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects`
- **Описание**：

> 
> Метод для получения списка продвигаемых объектов в кампаниях «Оплата за клик», «Баннеры» и «Видеобаннеры».
> 
> Чтобы получить товары в кампании «Оплата за заказ», используйте [POST /campaign/search_promo/v2/products](#operation/ExternalCampaign_ListSearchPromoProductsV2).
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | Идентификатор кампании. |

## Ответы сервера

### HTTP 200 - Список рекламируемых объектов в кампании

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignObjectsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects", {
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
