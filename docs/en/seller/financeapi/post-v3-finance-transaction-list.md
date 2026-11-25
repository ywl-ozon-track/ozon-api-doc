---
title: "FinanceAPI FinanceTransactionListV3"
description: "Список транзакций"
---

# FinanceAPI FinanceTransactionListV3

<Badge type="tip" text="POST" /> `/v3/finance/transaction/list`

## Endpoint Overview

- **Category**：📊 Finance & Settlements
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v3/finance/transaction/list`

::: details View Official Description (Russian)
> 
> <aside class="warning">
> Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на <a href="#operation/GetFinanceAccrualPostings">/v1/finance/accrual/postings</a>, <a href="#operation/GetFinanceAccrualTypes">/v1/finance/accrual/types</a>, <a href="#operation/GetFinanceAccrualByDay">/v1/finance/accrual/by-day</a>.
> <br><br>
> Используйте метод с последовательной отправкой запросов.<br>
> Данные могут не соответствовать информации в личном кабинете.
> </aside>
> 
> Возвращает подробную информацию по всем начислениям. Максимальный период, за который можно получить информацию в одном запросе — 1 месяц.
> 
> Если в запросе не указывать `posting_number`, то в ответе будут все отправления за указанный период или отправления определённого типа.
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
  "filter": {
    "date": {
      "from": "2021-11-01T00:00:00.000Z",
      "to": "2021-11-02T00:00:00.000Z"
    },
    "operation_type": [],
    "posting_number": "",
    "transaction_type": "all"
  },
  "page": 1,
  "page_size": 1000
}
```

## Responses

### HTTP 200 - Список транзакций

```json
{
  "result": {
    "operations": [
      {
        "operation_id": 11401182187840,
        "operation_type": "MarketplaceMarketingActionCostOperation",
        "operation_date": "2021-11-01 00:00:00",
        "operation_type_name": "Услуги продвижения товаров",
        "delivery_charge": 0,
        "return_delivery_charge": 0,
        "accruals_for_sale": 0,
        "sale_commission": 0,
        "amount": -6.46,
        "type": "services",
        "posting": {
          "delivery_schema": "",
          "order_date": "",
          "posting_number": "",
          "warehouse_id": 0
        },
        "items": [],
        "services": []
      }
    ],
    "page_count": 1,
    "row_count": 355
  }
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v3/finance/transaction/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/finance/transaction/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/finance/transaction/list", {
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
