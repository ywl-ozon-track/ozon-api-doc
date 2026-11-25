---
title: "ReturnAPI GiveoutIsEnabled"
description: "Проверить возможность получения возвратных отгрузок по штрихкоду"
---

# ReturnAPI GiveoutIsEnabled

<Badge type="tip" text="POST" /> `/v1/return/giveout/is-enabled`

## Endpoint Overview

- **Category**：📌 ReturnAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/return/giveout/is-enabled`

::: details View Official Description (Russian)
> Если у вас есть доступ, в параметре `enabled` будет указано значение `true`.
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
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## Responses

### HTTP 200 - Результат проверки

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GiveoutIsEnabledResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/is-enabled" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/is-enabled"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/is-enabled", {
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
