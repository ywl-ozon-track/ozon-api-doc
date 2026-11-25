---
title: "ReportAPI CreateDocumentB2BSalesReport"
description: "Реестр продаж юридическим лицам"
---

# ReportAPI CreateDocumentB2BSalesReport

<Badge type="tip" text="POST" /> `/v1/finance/document-b2b-sales`

## Endpoint Overview

- **Category**：📊 Finance & Settlements
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/finance/document-b2b-sales`

::: details View Official Description (Russian)
> Используйте метод, чтобы получить отчёт по продажам юридическим лицам. Соответствует разделу **Финансы → Документы → Реестр продаж юр. лицам** в личном кабинете.
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CreateDocumentB2BSalesReportRequest"
}
```
:::

## Responses

### HTTP 200 - Результат запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/commonCreateReportResponse"
}
```
:::

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

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
