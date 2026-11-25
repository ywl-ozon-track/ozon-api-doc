---
title: "Список заявок на скидку"
description: "Список заявок на скидку"
---

# Список заявок на скидку

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/list`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions/discounts-task/list`
- **Описание**：

> <aside class="warning">
>  Метод устаревает и будет отключён в будущем. Переключитесь на <a href="#operation/GetDiscountTaskListV2">/v2/actions/discounts-task/list</a>.
> </aside> 
> 
>  Метод для получения списка товаров, которые покупатели хотят купить со скидкой.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "status": "UNKNOWN",
  "page": 1,
  "limit": 50
}
```

## Ответы сервера

### HTTP 200 - Список заявок

```json
{
  "result": [
    {
      "id": 12345,
      "created_at": "2023-10-15T09:30:00Z",
      "end_at": "2023-10-20T18:45:00Z",
      "edited_till": "2023-10-18T12:00:00Z",
      "status": "approved",
      "customer_name": "Иван Иванов",
      "sku": 100500,
      "user_comment": "Товар необходим срочно, прошу ускорить обработку",
      "seller_comment": "Согласовано с менеджером, скидка предоставлена",
      "requested_price": 15000,
      "approved_price": 14500,
      "original_price": 16000,
      "discount": 1000,
      "discount_percent": 6.25,
      "base_price": 15500,
      "min_auto_price": 14000,
      "prev_task_id": 12344,
      "is_damaged": false,
      "moderated_at": "2023-10-16T10:15:00Z",
      "approved_discount": 500,
      "approved_discount_percent": 3.125,
      "is_purchased": true,
      "is_auto_moderated": false,
      "offer_id": "OFFER-2023-1001",
      "email": "ivan.ivanov@example.com",
      "last_name": "Иванов",
      "first_name": "Иван",
      "patronymic": "Петрович",
      "approved_quantity_min": 1,
      "approved_quantity_max": 5,
      "requested_quantity_min": 2,
      "requested_quantity_max": 10,
      "requested_price_with_fee": 15500,
      "approved_price_with_fee": 15000,
      "approved_price_fee_percent": 3.2
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/list", {
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
