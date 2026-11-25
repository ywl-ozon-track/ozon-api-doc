---
title: "Список акций"
description: "Список акций"
---

# Список акций

<Badge type="info" text="GET" /> `/v1/actions`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions`
- **Описание**：

> Метод для получения списка акций Ozon, в которых можно участвовать.
> 
> [Подробнее об акциях Ozon](https://seller-edu.ozon.ru/ceny-i-akcii/akcii-skidki-i-kupony/promo)
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Список акций

```json
{
  "result": [
    {
      "id": 71342,
      "title": "test voucher #2",
      "date_start": "2021-11-22T09:46:38Z",
      "date_end": "2021-11-30T20:59:59Z",
      "auto_add_dates": [
        "2025-12-30T20:59:59Z"
      ],
      "potential_products_count": 0,
      "is_participating": true,
      "participating_products_count": 5,
      "description": "",
      "action_type": "DISCOUNT",
      "banned_products_count": 0,
      "with_targeting": false,
      "discount_type": "UNKNOWN",
      "discount_value": 0,
      "order_amount": 0,
      "freeze_date": "",
      "is_voucher_action": true
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
curl -X GET "https://api-seller.ozon.ru/v1/actions" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions", {
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
