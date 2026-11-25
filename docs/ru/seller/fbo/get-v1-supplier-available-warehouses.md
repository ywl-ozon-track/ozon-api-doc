---
title: "Загруженность складов Ozon"
description: "Загруженность складов Ozon"
---

# Загруженность складов Ozon

<Badge type="info" text="GET" /> `/v1/supplier/available_warehouses`

## Обзор метода

- **Категория**：📌 FBO
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supplier/available_warehouses`
- **Описание**：

> Метод возвращает список активных складов Ozon с информацией об их средней загруженности на ближайшее время.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Информация о загруженности складов

```json
{
  "result": [
    {
      "schedule": {
        "capacity": [
          {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z",
            "value": 0
          }
        ],
        "date": "2019-08-24T14:15:22Z"
      },
      "warehouse": {
        "id": "2000030394123",
        "name": "ХОРУГВИНО-РФЦ"
      }
    }
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
curl -X GET "https://api-seller.ozon.ru/v1/supplier/available_warehouses" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supplier/available_warehouses"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supplier/available_warehouses", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
