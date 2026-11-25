---
title: "ProductAPI ProductCertificateAccordanceTypes"
description: "Список типов соответствия требованиям (версия 1)"
---

# ProductAPI ProductCertificateAccordanceTypes

<Badge type="info" text="GET" /> `/v1/product/certificate/accordance-types`

## Endpoint Overview

- **Category**：📜 Quality Certificates
- **Method**：`GET`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/certificate/accordance-types`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Cправочник типов соответствия требованиям

```json
{
  "result": [
    {
      "name": "ГОСТ",
      "value": "gost"
    },
    {
      "name": "Технический регламент РФ",
      "value": "technical_regulations_rf"
    },
    {
      "name": "Технический регламент ТС",
      "value": "technical_regulations_cu"
    }
  ]
}
```

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
curl -X GET "https://api-seller.ozon.ru/v1/product/certificate/accordance-types" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/accordance-types"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/accordance-types", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
