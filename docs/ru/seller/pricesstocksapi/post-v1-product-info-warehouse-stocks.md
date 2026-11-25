---
title: "Получить информацию по остаткам на складе FBS и rFBS"
description: "Получить информацию по остаткам на складе FBS и rFBS"
---

# Получить информацию по остаткам на складе FBS и rFBS

<Badge type="tip" text="POST" /> `/v1/product/info/warehouse/stocks`

## Обзор метода

- **Категория**：💰 Цены и остатки товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/info/warehouse/stocks`

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "cursor": "",
  "limit": 10,
  "warehouse_id": 1020003080073000
}
```

## Ответы сервера

### HTTP 200 - Количество товара на складе FBS и rFBS

```json
{
  "stocks": [
    {
      "sku": 147035011,
      "product_id": 28743,
      "offer_id": "02105020-35",
      "warehouse_id": 1020003080073000,
      "present": 1000,
      "reserved": 0,
      "free_stock": 1000,
      "updated_at": "2025-09-15T10:36:24.417498Z"
    }
  ],
  "has_next": false,
  "cursor": "147035011"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/warehouse/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/warehouse/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/warehouse/stocks", {
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
