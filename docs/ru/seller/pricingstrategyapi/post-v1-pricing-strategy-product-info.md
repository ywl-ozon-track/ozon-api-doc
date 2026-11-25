---
title: "Цена товара у конкурента"
description: "Цена товара у конкурента"
---

# Цена товара у конкурента

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/product/info`

## Обзор метода

- **Категория**：🎯 Стратегии ценообразования
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/pricing-strategy/product/info`
- **Описание**：

> Если вы добавили товар в стратегию ценообразования, метод вернёт цену и ссылку на товар у конкурента.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "product_id": 7856197312
}
```

## Ответы сервера

### HTTP 200 - Цена товара у конкурента

```json
{
  "result": {
    "strategy_id": "b7cd30e6-5667-424d-b105-fbec30a52477",
    "is_enabled": true,
    "strategy_product_price": 500,
    "price_downloaded_at": "2022-11-17T15:33:53.936Z",
    "strategy_competitor_id": "b7cd30e6-5667-424d-b105-fbec30a524778",
    "strategy_competitor_product_url": "http://primerurl/pricing-strategy/product/info.ru"
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/product/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/product/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/product/info", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
