---
title: "Изменить статус стратегии"
description: "Изменить статус стратегии"
---

# Изменить статус стратегии

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/status`

## Обзор метода

- **Категория**：🎯 Стратегии ценообразования
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/pricing-strategy/status`
- **Описание**：

> Можно изменить статус любой стратегии кроме системной.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "strategy_id": "c7516438-7124-4e2c-85d3-ccd92b6b9b65",
  "enabled": true
}
```

## Ответы сервера

### HTTP 200 - Статус стратегии изменён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1Empty"
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/status" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/status"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/status", {
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
