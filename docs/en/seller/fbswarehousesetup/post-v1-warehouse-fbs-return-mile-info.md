---
title: "WarehouseFBSReturnMileInfo"
description: "Получить информацию о возвратной миле"
---

# WarehouseFBSReturnMileInfo

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/return-mile/info`

## Endpoint Overview

- **Category**：📌 FBSWarehouseSetup
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/fbs/return-mile/info`

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
  "$ref": "#/components/schemas/v1WarehouseFBSReturnMileInfoRequest"
}
```
:::

## Responses

### HTTP 200 - Успешно

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1WarehouseFBSReturnMileInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/return-mile/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/return-mile/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/return-mile/info", {
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
