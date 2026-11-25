---
title: "ProductAPI ActionTimerUpdate"
description: "Обновление таймера актуальности минимальной цены"
---

# ProductAPI ActionTimerUpdate

<Badge type="tip" text="POST" /> `/v1/product/action/timer/update`

## Endpoint Overview

- **Category**：💰 Prices & Stocks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/product/action/timer/update`

::: details View Official Description (Russian)
> Минимальная цена действует 30 дней после установки. 
> После этого настройка выключается. Вы можете продлить её: вызовите метод повторно и укажите `product_ids`.
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
  "product_ids": 88787267123
}
```

## Responses

### HTTP 200 - Обновлено

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
curl -X POST "https://api-seller.ozon.ru/v1/product/action/timer/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/action/timer/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/action/timer/update", {
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
