---
title: "Количество возвратов FBS"
description: "Количество возвратов FBS"
---

# Количество возвратов FBS

<Badge type="tip" text="POST" /> `/v1/returns/company/fbs/info`

## Обзор метода

- **Категория**：📌 ReturnAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/returns/company/fbs/info`
- **Описание**：

> Метод для получения информации о возвратах FBS и их количестве.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "filter": {
    "place_id": 0
  },
  "pagination": {
    "last_id": 0,
    "limit": 500
  }
}
```

## Ответы сервера

### HTTP 200 - Количество возвратов FBS

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1ReturnsCompanyFbsInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/returns/company/fbs/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/returns/company/fbs/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/returns/company/fbs/info", {
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
