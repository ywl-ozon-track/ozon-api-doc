---
title: "Реестр продаж юридическим лицам"
description: "Реестр продаж юридическим лицам"
---

# Реестр продаж юридическим лицам

<Badge type="tip" text="POST" /> `/v1/finance/document-b2b-sales`

## Обзор метода

- **Категория**：📊 Финансы и отчёты
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/finance/document-b2b-sales`
- **Описание**：

> Используйте метод, чтобы получить отчёт по продажам юридическим лицам. Соответствует разделу **Финансы → Документы → Реестр продаж юр. лицам** в личном кабинете.

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
  "$ref": "#/components/schemas/v1CreateDocumentB2BSalesReportRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Результат запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/commonCreateReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/document-b2b-sales" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/document-b2b-sales"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/document-b2b-sales", {
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
