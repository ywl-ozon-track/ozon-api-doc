---
title: "Получить список товаров в отгрузке"
description: "Получить список товаров в отгрузке"
---

# Получить список товаров в отгрузке

<Badge type="tip" text="POST" /> `/v1/assembly/carriage/product/list`

## Обзор метода

- **Категория**：📌 DeliveryFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/assembly/carriage/product/list`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1AssemblyCarriageProductListRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Список товаров

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1AssemblyCarriageProductListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/assembly/carriage/product/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/assembly/carriage/product/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/assembly/carriage/product/list", {
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
