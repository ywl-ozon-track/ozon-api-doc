---
title: "ReportAPI CreateCompanyPostingsReport"
description: "Отчёт об отправлениях"
---

# ReportAPI CreateCompanyPostingsReport

<Badge type="tip" text="POST" /> `/v1/report/postings/create`

## Endpoint Overview

- **Category**：📌 ReportAPI
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/postings/create`

::: details View Official Description (Russian)
> Отчёт об отправлениях с информацией по заказам:
>   - статусы заказов,
>   - дата начала обработки,
>   - номера заказов,
>   - номера отправлений,
>   - стоимость отправлений,
>   - содержимое отправлений.
> Соответствует разделу **FBO → Заказы со склада Ozon** и **FBS → Заказы с моих складов → CSV** в личном кабинете.
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
    "processed_at_from": "2021-09-02T17:10:54.861Z",
    "processed_at_to": "2021-11-02T17:10:54.861Z",
    "delivery_schema": [
      "fbo"
    ],
    "is_express": true,
    "sku": [],
    "cancel_reason_id": [],
    "offer_id": "",
    "status_alias": [],
    "statuses": [],
    "title": ""
  },
  "language": "DEFAULT",
  "with": {
    "additional_data": false,
    "analytics_data": false,
    "customer_data": false,
    "jewelry_codes": false
  }
}
```

## Responses

### HTTP 200 - Отчёт об отправлениях

```json
{
  "result": {
    "code": "REPORT_seller_postings_514893_1722847571_32a3508c-6b53-408c-a212-6c97138d23ed"
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
curl -X POST "https://api-seller.ozon.ru/v1/report/postings/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/postings/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/postings/create", {
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
