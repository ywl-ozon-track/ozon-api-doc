---
title: "FbpAPI FbpEditTimeslot"
description: "Отредактировать таймслот в заявке на поставку"
---

# FbpAPI FbpEditTimeslot

<Badge type="tip" text="POST" /> `/v1/fbp/order/direct/timeslot/edit`

## Endpoint Overview

- **Category**：📌 OrderDirectFBP
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/fbp/order/direct/timeslot/edit`

::: details View Official Description (Russian)
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1FbpEditTimeslotRequest"
}
```
:::

## Responses

### HTTP 200 - Таймслот отредактирован

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1FbpEditTimeslotResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/fbp/order/direct/timeslot/edit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/order/direct/timeslot/edit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/order/direct/timeslot/edit", {
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
