---
title: "Согласовать заявку на скидку"
description: "Согласовать заявку на скидку"
---

# Согласовать заявку на скидку

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/approve`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions/discounts-task/approve`
- **Описание**：

> Вы можете согласовывать заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
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
  "tasks": [
    {
      "id": 78901,
      "approved_price": 12500,
      "seller_comment": "ok",
      "approved_quantity_min": 3,
      "approved_quantity_max": 7
    }
  ]
}
```

## Ответы сервера

### HTTP 200 - Заявки согласованы

```json
{
  "result": {
    "fail_details": [
      {
        "task_id": 78901,
        "error_for_user": "Скидка отклонена"
      }
    ],
    "success_count": 5,
    "fail_count": 1
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/approve" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/approve"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/approve", {
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
