---
title: "GetDeliveryMethodReturnSettingsV1"
description: "Получить информацию по возвратным настройкам rFBS и rFBS Express"
---

# GetDeliveryMethodReturnSettingsV1

<Badge type="tip" text="POST" /> `/v1/delivery-method/return/settings/get`

## Endpoint Overview

- **Category**：🏭 Warehouses (FBS & rFBS)
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/delivery-method/return/settings/get`

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GetDeliveryMethodReturnSettingsV1Request"
}
```
:::

## Responses

### HTTP 200 - Информация получена

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GetDeliveryMethodReturnSettingsV1Response"
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery-method/return/settings/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery-method/return/settings/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery-method/return/settings/get", {
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
