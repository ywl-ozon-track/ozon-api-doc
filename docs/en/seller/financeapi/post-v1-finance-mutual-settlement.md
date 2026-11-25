---
title: "ReportAPI CreateMutualSettlementReport"
description: "Отчёт о взаиморасчётах"
---

# ReportAPI CreateMutualSettlementReport

<Badge type="tip" text="POST" /> `/v1/finance/mutual-settlement`

## Endpoint Overview

- **Category**：📊 Finance & Settlements
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/finance/mutual-settlement`

::: details View Official Description (Russian)
> Используйте метод, чтобы получить отчёт о взаиморасчетах. Соответствует разделу **Финансы → Документы → Аналитические отчеты → Отчет о взаиморасчетах** в личном кабинете.
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
  "$ref": "#/components/schemas/v1CreateMutualSettlementReportRequest"
}
```
:::

## Responses

### HTTP 200 - Результат запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/commonCreateReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/mutual-settlement" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/mutual-settlement"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/mutual-settlement", {
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
