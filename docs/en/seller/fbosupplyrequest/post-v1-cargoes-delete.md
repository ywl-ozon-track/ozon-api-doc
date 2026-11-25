---
title: "CargoesAPI CargoesDelete"
description: "Удалить грузоместо в заявке на поставку"
---

# CargoesAPI CargoesDelete

<Badge type="tip" text="POST" /> `/v1/cargoes/delete`

## Endpoint Overview

- **Category**：📌 FboSupplyRequest
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/cargoes/delete`

::: details View Official Description (Russian)
> Метод для удаления грузомест в заявке на поставку.
> 
> Чтобы проверить статус удаления, используйте метод [/v1/cargoes/delete/status](#operation/CargoesAPI_CargoesDeleteStatus).
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "cargo_ids": [
    "box-001"
  ],
  "supply_id": 123456
}
```

## Responses

### HTTP 200 - Грузоместо удалено

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1CargoesDeleteResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/delete", {
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
