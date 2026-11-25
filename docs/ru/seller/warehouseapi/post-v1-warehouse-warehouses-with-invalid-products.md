---
title: "Получить список складов с ограниченными для доставки товарами"
description: "Получить список складов с ограниченными для доставки товарами"
---

# Получить список складов с ограниченными для доставки товарами

<Badge type="tip" text="POST" /> `/v1/warehouse/warehouses-with-invalid-products`

## Обзор метода

- **Категория**：🏭 Работа со складами FBS и rFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/warehouses-with-invalid-products`
- **Описание**：

> Возвращает идентификаторы складов, на которых находятся товары с ограничениями. Такие товары недоступны для доставки со склада.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Список складов

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1WarehouseWithInvalidProductsResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/warehouses-with-invalid-products" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/warehouses-with-invalid-products"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/warehouses-with-invalid-products", {
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
