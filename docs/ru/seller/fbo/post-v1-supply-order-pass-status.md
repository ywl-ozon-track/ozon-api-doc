---
title: "Статус ввода данных о водителе и автомобиле"
description: "Статус ввода данных о водителе и автомобиле"
---

# Статус ввода данных о водителе и автомобиле

<Badge type="tip" text="POST" /> `/v1/supply-order/pass/status`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/pass/status`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "operation_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

## Ответы сервера

### HTTP 200 - Статус

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1SupplyOrderPassStatusResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/pass/status" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/pass/status"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/pass/status", {
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
