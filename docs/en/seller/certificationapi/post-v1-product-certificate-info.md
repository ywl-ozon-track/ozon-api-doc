---
title: "CertificateInfo"
description: "Информация о сертификате"
---

# CertificateInfo

<Badge type="tip" text="POST" /> `/v1/product/certificate/info`

## Endpoint Overview

- **Category**：📜 Quality Certificates
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/certificate/info`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "certificate_number": "2312342134123"
}
```

## Responses

### HTTP 200 - Информация о сертификате

```json
{
  "result": {
    "certificate_id": 54321,
    "certificate_number": "CERT-2026-MSK-789456",
    "certificate_name": "Сертификат безопасности продукции",
    "type_code": "SAFETY_2026",
    "status_code": "PENDING",
    "accordance_type_code": "PARTIAL",
    "rejection_reason_code": "DOCS_MISSING",
    "verification_comment": "Требуются дополнительные документы от производителя для полного подтверждения",
    "issue_date": "2025-11-01T08:00:00Z",
    "expire_date": "2027-11-01T08:00:00Z",
    "products_count": 15
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/info", {
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
