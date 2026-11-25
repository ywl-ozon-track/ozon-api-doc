---
title: "Причины отмены отправлений"
description: "Причины отмены отправлений"
---

# Причины отмены отправлений

<Badge type="tip" text="POST" /> `/v1/cancel-reason/list`

## Обзор метода

- **Категория**：❌ Причины отмены заказов
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cancel-reason/list`
- **Описание**：

> Возвращает возможные причины отмены отправлений и заказов.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Причины отмены отправлений

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CancelReasonListResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/cancel-reason/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cancel-reason/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cancel-reason/list", {
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
