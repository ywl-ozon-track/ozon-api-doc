---
title: "ReturnAPI GiveoutList"
description: "Список возвратных отгрузок"
---

# ReturnAPI GiveoutList

<Badge type="tip" text="POST" /> `/v1/return/giveout/list`

## Endpoint Overview

- **Category**：📌 ReturnAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/return/giveout/list`

::: details View Official Description (Russian)
> Метод для получения списка активных возвратов.
> Возвратная отгрузка становится активной после сканирования штрихкода. 
> После сканирования штрихкода второй раз активная выдача переходит в статус неактивной.
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
  "last_id": 0,
  "limit": 500
}
```

## Responses

### HTTP 200 - Список возвратных отгрузок

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GiveoutListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/list", {
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
