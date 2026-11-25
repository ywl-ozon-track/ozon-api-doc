---
title: "AnalyticsDecommissionedGoods"
description: "Получить отчёт о списанных товарах"
---

# AnalyticsDecommissionedGoods

<Badge type="tip" text="POST" /> `/v1/analytics/decommissioned-goods`

## Endpoint Overview

- **Category**：📌 BetaMethod
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/analytics/decommissioned-goods`

::: details View Official Description (Russian)
> Соответствует разделу **FBO → Списанные товары** в личном кабинете.
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2287-Novyi-metod-dlia-polucheniia-Otcheta-spisannye-tovary/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/analytics.v1.AnalyticsDecommissionedGoodsRequest"
}
```
:::

## Responses

### HTTP 200 - Отчёт о списанных товарах

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/analytics.v1.AnalyticsDecommissionedGoodsResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/decommissioned-goods" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/decommissioned-goods"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/decommissioned-goods", {
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
