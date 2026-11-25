---
title: "Удалить ссылку на счёт-фактуру"
description: "Удалить ссылку на счёт-фактуру"
---

# Удалить ссылку на счёт-фактуру

<Badge type="tip" text="POST" /> `/v1/invoice/delete`

## Обзор метода

- **Категория**：📌 SupplierAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/invoice/delete`

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1InvoiceDeleteRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Ссылка удалена

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1InvoiceDeleteResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/invoice/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/invoice/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/invoice/delete", {
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
