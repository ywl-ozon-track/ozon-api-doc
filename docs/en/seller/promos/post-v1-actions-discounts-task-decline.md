---
title: "promos task decline"
description: "Отклонить заявку на скидку"
---

# promos task decline

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/decline`

## Endpoint Overview

- **Category**：🎁 Promotions & Discounts
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/actions/discounts-task/decline`

::: details View Official Description (Russian)
> Вы можете отклонить заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
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
      "seller_comment": "Ok"
    }
  ]
}
```

## Responses

### HTTP 200 - Заявки отклонены

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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/decline" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/decline"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/decline", {
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
