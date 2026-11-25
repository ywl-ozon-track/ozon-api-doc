---
title: "Указать данные о водителе и автомобиле"
description: "Указать данные о водителе и автомобиле"
---

# Указать данные о водителе и автомобиле

<Badge type="tip" text="POST" /> `/v1/supply-order/pass/create`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/pass/create`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "supply_order_id": 1001,
  "vehicle": {
    "driver_name": "Иван Петров",
    "driver_phone": "+7 (999) 123-45-67",
    "vehicle_model": "ГАЗель NEXT",
    "vehicle_number": "А 123 ВВ 799"
  }
}
```

## Ответы сервера

### HTTP 200 - Данные указаны

```json
{
  "error_reasons": [
    "SET_VEHICLE_ERROR_UNSPECIFIED"
  ],
  "operation_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/pass/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/pass/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/pass/create", {
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
