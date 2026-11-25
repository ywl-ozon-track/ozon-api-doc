---
title: "CreateCompanyFinanceRealizationPostingReport"
description: "Получить позаказный отчёт о реализации товаров"
---

# CreateCompanyFinanceRealizationPostingReport

<Badge type="tip" text="POST" /> `/v1/report/realization/posting/create`

## Endpoint Overview

- **Category**：📌 BetaMethod
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/report/realization/posting/create`

::: details View Official Description (Russian)
> Отчёт о реализации доставленных и возвращённых товаров с детализацией по каждому заказу. Не включает отмены и невыкупы. Отчёт доступен с настоящего времени по август 2023 года включительно.
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2280-Novyi-beta-metod-dlia-polucheniia-otcheta-o-realizatsii-po-postingam/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/report.v1.CreateCompanyFinanceRealizationPostingReportRequest"
}
```
:::

## Responses

### HTTP 200 - Позаказный отчёт о реализации

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/report.v1.CreateCompanyFinanceRealizationPostingReportResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/report/realization/posting/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/realization/posting/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/realization/posting/create", {
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
