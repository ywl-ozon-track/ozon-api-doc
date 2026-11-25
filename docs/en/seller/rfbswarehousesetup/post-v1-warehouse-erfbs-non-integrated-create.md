---
title: "WarehouseERFBSNonIntegratedCreate"
description: "Создать склад с методом доставки «Вы или сторонняя служба»"
---

# WarehouseERFBSNonIntegratedCreate

<Badge type="tip" text="POST" /> `/v1/warehouse/erfbs/non-integrated/create`

## Endpoint Overview

- **Category**：📌 rFBSWarehouseSetup
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create`

::: details View Official Description (Russian)
> [Подробнее о схеме realFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express)
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
  "$ref": "#/components/schemas/v1WarehouseERFBSNonIntegratedCreateRequest"
}
```
:::

## Responses

### HTTP 200 - Склад создан

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1WarehouseERFBSNonIntegratedCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create", {
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
