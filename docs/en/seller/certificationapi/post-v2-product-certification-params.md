---
title: "ProductCertificateParams"
description: "Получить обязательные параметры для создания сертификата качества"
---

# ProductCertificateParams

<Badge type="tip" text="POST" /> `/v2/product/certification/params`

## Endpoint Overview

- **Category**：📜 Quality Certificates
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/product/certification/params`

::: details View Official Description (Russian)
> Используйте информацию о параметрах в запросе метода [/v2/product/certificate/create](#operation/ProductCertificateCreate).
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "params": {
    "accordance_type": "SAFETY_DATA_SHEET",
    "certificate_country": "RU",
    "certificate_type": "SAFETY_DATA_SHEET",
    "expired_date": {
      "date": {
        "day": 1,
        "month": 1,
        "year": 2027
      },
      "infinite": false
    },
    "files": [
      {
        "file_content": "string",
        "name": "file.pdf"
      }
    ],
    "issue_date": "2019-08-24T14:15:22Z",
    "link_to_registry": "string",
    "name": "string",
    "number": "string",
    "product_type": "UNKNOWN",
    "skus": [
      "string"
    ]
  }
}
```

## Responses

### HTTP 200 - Обязательные параметры для создания сертификата

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/certification.v2.ProductCertificateParamsResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/product/certification/params" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/certification/params"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/certification/params", {
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
