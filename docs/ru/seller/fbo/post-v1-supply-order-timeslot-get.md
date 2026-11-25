---
title: "Интервалы поставки"
description: "Интервалы поставки"
---

# Интервалы поставки

<Badge type="tip" text="POST" /> `/v1/supply-order/timeslot/get`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/timeslot/get`
- **Описание**：

> <aside class="warning"> Метод устаревает и будет отключён 19 августа 2026 года. Переключитесь на <a href="#operation/SupplyOrderTimeslotList">/v2/supply-order/timeslot/list</a>. </aside>

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "supply_order_id": 84882285
}
```

## Ответы сервера

### HTTP 200 - Список интервалов поставки

```json
{
  "timeslots": [
    {
      "from": "2019-08-24T14:15:22Z",
      "to": "2019-08-24T14:15:22Z"
    }
  ],
  "timezone": [
    {
      "iana_name": "MSK",
      "offset": "+3"
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/timeslot/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/timeslot/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/timeslot/get", {
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
