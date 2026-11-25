---
title: "Штрихкод для получения возвратной отгрузки в формате PNG"
description: "Штрихкод для получения возвратной отгрузки в формате PNG"
---

# Штрихкод для получения возвратной отгрузки в формате PNG

<Badge type="tip" text="POST" /> `/v1/return/giveout/get-png`

## Обзор метода

- **Категория**：📌 ReturnAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/return/giveout/get-png`
- **Описание**：

> Возвращает PNG-файл со штрихкодом.

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
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## Ответы сервера

### HTTP 200 - Штрихкод для возвратной отгрузки

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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/get-png" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/get-png"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/get-png", {
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
