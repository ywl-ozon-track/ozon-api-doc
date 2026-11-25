---
title: "invoice upload"
description: "Загрузка счёта-фактуры"
---

# invoice upload

<Badge type="tip" text="POST" /> `/v1/invoice/file/upload`

## Endpoint Overview

- **Category**：📌 SupplierAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/invoice/file/upload`

::: details View Official Description (Russian)
> Доступные форматы: JPEG и PDF. Максимальный размер файла: 10 МБ.
> 
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
  "$ref": "#/components/schemas/v1InvoiceFileUploadRequest"
}
```
:::

## Responses

### HTTP 200 - Ссылка на счёт-фактуру

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1InvoiceFileUploadResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/invoice/file/upload" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/invoice/file/upload"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/invoice/file/upload", {
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
