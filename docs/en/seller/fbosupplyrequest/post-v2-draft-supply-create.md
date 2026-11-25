---
title: "DraftSupplyCreate"
description: "Создать заявку на поставку по черновику"
---

# DraftSupplyCreate

<Badge type="tip" text="POST" /> `/v2/draft/supply/create`

## Endpoint Overview

- **Category**：📌 FboSupplyRequest
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/draft/supply/create`

::: details View Official Description (Russian)
> Вы можете создавать заявку на поставку по черновику:
> - 2 раза в минуту;
> - 50 раз в час;
> - 500 раз в день.
> 
> Если превысите лимит, вернётся ошибка 429.
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
  "$ref": "#/components/schemas/v2DraftSupplyCreateRequest"
}
```
:::

## Responses

### HTTP 200 - Заявка создана

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v2DraftSupplyCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v2/draft/supply/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/draft/supply/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/draft/supply/create", {
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
