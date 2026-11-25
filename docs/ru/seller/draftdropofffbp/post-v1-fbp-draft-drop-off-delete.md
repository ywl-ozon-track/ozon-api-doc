---
title: "Удалить черновик для доставки в drop-off пункт"
description: "Удалить черновик для доставки в drop-off пункт"
---

# Удалить черновик для доставки в drop-off пункт

<Badge type="tip" text="POST" /> `/v1/fbp/draft/drop-off/delete`

## Обзор метода

- **Категория**：📌 DraftDropOffFBP
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete`
- **Описание**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1FbpDraftDropOffDeleteRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Черновик удалён

```json
{
  "cancellation_state": {
    "cancellation_error": {
      "error_code": "NO_RESPONSE_FROM_3PF",
      "message": "string"
    },
    "cancellation_status": "CONFIRMATION"
  },
  "row_version": 0
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
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete", {
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
