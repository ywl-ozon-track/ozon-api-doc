---
title: "CancellationAPI ConditionalCancellationRejectV2"
description: "Отклонить заявку на отмену rFBS"
---

# CancellationAPI ConditionalCancellationRejectV2

<Badge type="tip" text="POST" /> `/v2/conditional-cancellation/reject`

## Endpoint Overview

- **Category**：📌 CancellationAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/conditional-cancellation/reject`

::: details View Official Description (Russian)
> Метод позволяет отклонить заявку на отмену в статусе `ON_APPROVAL`. В параметре `comment` опишите причину. Заказ останется в том же статусе, и его нужно будет доставить покупателю.
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

## Responses

### HTTP 200 - Заявка отклонена

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
curl -X POST "https://api-seller.ozon.ru/v2/conditional-cancellation/reject" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/conditional-cancellation/reject"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/conditional-cancellation/reject", {
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
