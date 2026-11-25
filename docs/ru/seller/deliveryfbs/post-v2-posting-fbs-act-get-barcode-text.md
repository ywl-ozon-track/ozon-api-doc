---
title: "Значение штрихкода для отгрузки отправления"
description: "Значение штрихкода для отгрузки отправления"
---

# Значение штрихкода для отгрузки отправления

<Badge type="tip" text="POST" /> `/v2/posting/fbs/act/get-barcode/text`

## Обзор метода

- **Категория**：📌 DeliveryFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/posting/fbs/act/get-barcode/text`
- **Описание**：

> Используйте этот метод, чтобы получить штрихкод из ответа
> [/v2/posting/fbs/act/get-barcode](#operation/PostingAPI_PostingFBSGetBarcode) в текстовом виде.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "id": "295662811"
}
```

## Ответы сервера

### HTTP 200 - Значение штрихкода

```json
{
  "result": "%303%24276481394"
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/act/get-barcode/text" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/act/get-barcode/text"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/act/get-barcode/text", {
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
