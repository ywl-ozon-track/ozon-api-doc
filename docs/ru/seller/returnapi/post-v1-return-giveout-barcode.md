---
title: "Значение штрихкода для возвратных отгрузок"
description: "Значение штрихкода для возвратных отгрузок"
---

# Значение штрихкода для возвратных отгрузок

<Badge type="tip" text="POST" /> `/v1/return/giveout/barcode`

## Обзор метода

- **Категория**：📌 ReturnAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/return/giveout/barcode`
- **Описание**：

> Используйте этот метод, чтобы получить штрихкод из ответа методов [/v1/return/giveout/get-png](#operation/ReturnAPI_GiveoutGetPNG) и [/v1/return/giveout/get-pdf](#operation/ReturnAPI_GiveoutGetPDF) в текстовом виде.

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

### HTTP 200 - Значение штрихкода

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GiveoutGetBarcodeResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/barcode" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/barcode"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/barcode", {
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
