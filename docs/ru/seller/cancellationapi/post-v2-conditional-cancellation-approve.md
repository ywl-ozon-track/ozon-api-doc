---
title: "Подтвердить заявку на отмену rFBS"
description: "Подтвердить заявку на отмену rFBS"
---

# Подтвердить заявку на отмену rFBS

<Badge type="tip" text="POST" /> `/v2/conditional-cancellation/approve`

## Обзор метода

- **Категория**：📌 CancellationAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/conditional-cancellation/approve`
- **Описание**：

> Метод позволяет согласовать заявку на отмену в статусе `ON_APPROVAL`. Заказ будет отменён, а деньги вернутся покупателю.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Заявка подтверждена

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
curl -X POST "https://api-seller.ozon.ru/v2/conditional-cancellation/approve" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/conditional-cancellation/approve"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/conditional-cancellation/approve", {
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
