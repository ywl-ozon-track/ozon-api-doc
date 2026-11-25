---
title: "AccessAPI RolesByToken"
description: "Получить список ролей и методов по API-ключу"
---

# AccessAPI RolesByToken

<Badge type="tip" text="POST" /> `/v1/roles`

## Endpoint Overview

- **Category**：🔑 API Keys & Permissions
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/roles`

::: details View Official Description (Russian)
> Метод для получения информации и ролях и методах, привязанных к API-ключу.
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Список ролей и методов

```json
{
  "expires_at": "2026-02-18T09:54:23.296Z",
  "roles": [
    {
      "name": "Admin",
      "methods": [
        "/v1/actions"
      ]
    },
    {
      "name": "Posting FBS",
      "methods": [
        "/v1/posting"
      ]
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/roles" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/roles"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/roles", {
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
