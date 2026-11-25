---
title: "ReturnAPI GiveoutInfo"
description: "Информация о возвратной отгрузке"
---

# ReturnAPI GiveoutInfo

<Badge type="tip" text="POST" /> `/v1/return/giveout/info`

## Endpoint Overview

- **Category**：📌 ReturnAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/return/giveout/info`

::: details View Official Description (Russian)
> Метод для получения информации о возвратной отгрузке. 
> В параметр `giveout_id` передаётся значение, полученное в методе [/v1/return/giveout/list](#operation/ReturnAPI_GiveoutList).
> 
:::

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
  "$ref": "#/components/schemas/v1GiveoutInfoRequest"
}
```
:::

## Responses

### HTTP 200 - Информация о возвратной отгрузке

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GiveoutInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/info", {
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
