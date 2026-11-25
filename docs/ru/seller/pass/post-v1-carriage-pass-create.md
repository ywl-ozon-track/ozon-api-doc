---
title: "Создать пропуск"
description: "Создать пропуск"
---

# Создать пропуск

<Badge type="tip" text="POST" /> `/v1/carriage/pass/create`

## Обзор метода

- **Категория**：🎫 Пропуски на склад
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/carriage/pass/create`
- **Описание**：

> Идентификатор созданного пропуска добавится к перевозке.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "carriage_id": 5000123456,
  "arrival_passes": [
    {
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT",
      "with_returns": true
    }
  ]
}
```

## Ответы сервера

### HTTP 200 - Пропуск создан

```json
{
  "arrival_pass_ids": [
    6000123456
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/pass/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/pass/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/pass/create", {
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
