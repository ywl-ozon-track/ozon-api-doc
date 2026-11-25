---
title: "Установка грузомест"
description: "Установка грузомест"
---

# Установка грузомест

<Badge type="tip" text="POST" /> `/v1/cargoes/create`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cargoes/create`
- **Описание**：

> Используйте метод, чтобы передать грузоместа и товарный состав в заявку на поставку.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "cargoes": [
    {
      "key": "box-001",
      "value": {
        "items": [
          {
            "barcode": "4601234567890",
            "expires_at": "2026-06-30T23:59:59Z",
            "offer_id": "12345678",
            "quant": 1,
            "quantity": 5
          },
          {
            "barcode": "4609876543210",
            "expires_at": "2026-12-31T23:59:59Z",
            "offer_id": "87654321",
            "quant": 2,
            "quantity": 3
          }
        ],
        "type": "BOX"
      }
    }
  ],
  "delete_current_version": true,
  "supply_id": 123456
}
```

## Ответы сервера

### HTTP 200 - Грузоместа установлены

```json
{
  "operation_id": "op-1689012345",
  "errors": {
    "error_reasons": [
      "INVALID_STATE"
    ],
    "items_validation": [
      {
        "barcode": "4601234567890",
        "cargo_key": "box-001",
        "quant": 2,
        "type": "SUPPLY_ITEM_NOT_FOUND"
      }
    ]
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/create", {
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
