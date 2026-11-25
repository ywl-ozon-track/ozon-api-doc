---
title: "SupplyOrderAPI SupplyOrderContentUpdate"
description: "Редактирование товарного состава"
---

# SupplyOrderAPI SupplyOrderContentUpdate

<Badge type="tip" text="POST" /> `/v1/supply-order/content/update`

## Endpoint Overview

- **Category**：📌 FboSupplyRequest
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/supply-order/content/update`

::: details View Official Description (Russian)
> Метод для редактирования товарного состава в заявке на поставку.
> 
> Чтобы проверить статус редактирования, используйте метод [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus).
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1SupplyOrderContentUpdateRequest"
}
```
:::

## Responses

### HTTP 200 - Товарный состав обновлён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1SupplyOrderContentUpdateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/content/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/content/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/content/update", {
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
