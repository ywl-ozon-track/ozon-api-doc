---
title: "UtilizationInfo"
description: "Получить настройки автоутилизации"
---

# UtilizationInfo

<Badge type="tip" text="POST" /> `/v1/returns/settings/utilization/info`

## Endpoint Overview

- **Category**：↩️ Returns & Refunds
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/returns/settings/utilization/info`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Настройки автоутилизации

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1ReturnsSettingsUtilizationInfoResponse"
}
```
:::

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/returns/settings/utilization/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/returns/settings/utilization/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/returns/settings/utilization/info", {
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
