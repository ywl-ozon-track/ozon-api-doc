---
title: "promos task approve"
description: "Согласовать заявку на скидку"
---

# promos task approve

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/approve`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/actions/discounts-task/approve`

::: details View Official Description (Russian)
> Вы можете согласовывать заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
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
  "tasks": [
    {
      "id": 78901,
      "approved_price": 12500,
      "seller_comment": "ok",
      "approved_quantity_min": 3,
      "approved_quantity_max": 7
    }
  ]
}
```

## Responses

### HTTP 200 - Заявки согласованы

```json
{
  "result": {
    "fail_details": [
      {
        "task_id": 78901,
        "error_for_user": "Скидка отклонена"
      }
    ],
    "success_count": 5,
    "fail_count": 1
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/approve" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/approve"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/approve", {
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
