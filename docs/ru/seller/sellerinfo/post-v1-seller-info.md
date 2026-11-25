---
title: "Информация о кабинете продавца"
description: "Информация о кабинете продавца"
---

# Информация о кабинете продавца

<Badge type="tip" text="POST" /> `/v1/seller/info`

## Обзор метода

- **Категория**：🏢 Информация по кабинету продавца
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/seller/info`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Информация о кабинете продавца

```json
{
  "company": {
    "country": "Россия",
    "currency": "RUB",
    "inn": "7707083893",
    "legal_name": "Общество с ограниченной ответственностью 'Ромашка'",
    "name": "ООО 'Ромашка'",
    "ogrn": "1027700132195",
    "ownership_form": "Частная собственность",
    "tax_system": "ОСНО"
  },
  "ratings": [
    {
      "current_value": {
        "date_from": "2023-01-15T09:00:00Z",
        "date_to": "2023-12-31T23:59:59Z",
        "formatted": "AA+",
        "status": {
          "danger": false,
          "premium": true,
          "warning": false
        },
        "value": 85
      },
      "name": "Финансовая устойчивость",
      "past_value": {
        "date_from": "2022-01-01T00:00:00Z",
        "date_to": "2022-12-31T23:59:59Z",
        "formatted": "A",
        "status": {
          "danger": false,
          "premium": false,
          "warning": true
        },
        "value": 78
      },
      "rating": "Высокий уровень",
      "status": "Активно",
      "value_type": "Количественный"
    }
  ],
  "subscription": {
    "is_premium": true,
    "type": "Профессиональный"
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
curl -X POST "https://api-seller.ozon.ru/v1/seller/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/seller/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/seller/info", {
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
