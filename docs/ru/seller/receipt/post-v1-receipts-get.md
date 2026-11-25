---
title: "Получить чек в формате PDF"
description: "Получить чек в формате PDF"
---

# Получить чек в формате PDF

<Badge type="tip" text="POST" /> `/v1/receipts/get`

## Обзор метода

- **Категория**：📌 Receipt
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/receipts/get`
- **Описание**：

> <aside class="warning">
>  Метод доступен продавцам, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> </aside>
> 

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
  "$ref": "#/components/schemas/v1GetReceiptRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Чек

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GetReceiptResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/receipts/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/receipts/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/receipts/get", {
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
