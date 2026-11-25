---
title: "GetFinanceBalanceV1"
description: "Получить отчёт о балансе"
---

# GetFinanceBalanceV1

<Badge type="tip" text="POST" /> `/v1/finance/balance`

## Endpoint Overview

- **Category**：📌 BetaMethod
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/finance/balance`

::: details View Official Description (Russian)
> Соответствует разделу **Финансы → Баланс** в личном кабинете.
> 
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1732-Novyi-metod-polucheniia-dannykh-po-balansu/) в сообществе разработчиков Ozon for dev.
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
  "date_from": "2019-08-24",
  "date_to": "2019-09-24"
}
```

## Responses

### HTTP 200 - Отчёт о балансе

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1GetFinanceBalanceV1Response"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/balance" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/balance"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/balance", {
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
