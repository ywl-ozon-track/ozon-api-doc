---
title: "Получить статус операции"
description: "Получить статус операции"
---

# Получить статус операции

<Badge type="tip" text="POST" /> `/v1/warehouse/operation/status`

## Обзор метода

- **Категория**：🏭 Работа со складами FBS и rFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/operation/status`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "operation_id": "a0cfefee-9a5a-4580-bc32-2f9a6c7973e3"
}
```

## Ответы сервера

### HTTP 200 - Статус операции

```json
{
  "error": {
    "code": "string",
    "message": "string"
  },
  "result": {
    "warehouse_id": 1020005000219156
  },
  "status": "SUCCESS",
  "type": "CREATE_FBS_WAREHOUSE"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/operation/status" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/operation/status"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/operation/status", {
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
