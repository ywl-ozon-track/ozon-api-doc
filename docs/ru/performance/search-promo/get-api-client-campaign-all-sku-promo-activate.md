---
title: "Включить продвижение в оплате за заказ — все товары"
description: "Включить продвижение в оплате за заказ — все товары"
---

# Включить продвижение в оплате за заказ — все товары

<Badge type="info" text="GET" /> `/api/client/campaign/all_sku_promo/activate`

## Обзор метода

- **Категория**：🔍 Оплата за заказ
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate`

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Ответы сервера

### HTTP 200 - Продвижение включено

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignActivateAllSkuPromoCampaignResponse"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/all_sku_promo/activate", {
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
