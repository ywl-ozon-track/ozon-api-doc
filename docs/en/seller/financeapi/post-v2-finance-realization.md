---
title: "FinanceAPI GetRealizationReportV2"
description: "Отчёт о реализации товаров (версия 2)"
---

# FinanceAPI GetRealizationReportV2

<Badge type="tip" text="POST" /> `/v2/finance/realization`

## Endpoint Overview

- **Category**：📊 Finance & Settlements
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/finance/realization`

::: details View Official Description (Russian)
> <aside class="warning">
> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> 
> Метод позволяет получить отчёт за период не раньше августа 2023 года. Отчёты за более ранние периоды доступны в личном кабинете.
> </aside>
> 
> Отчёт о реализации доставленных и возвращённых товаров за месяц. Отмены и невыкупы не включаются.
> Соответствует разделу **Финансы → Документы → Отчёты о реализации → Отчёт о реализации товара** в личном кабинете.
> 
> Отчёт придёт не позднее 5-го числа следующего месяца.
> 
> [Подробнее об отчёте в Базе знаний продавца](https://seller-edu.ozon.ru/docs/finances-documents/calculations-documents/otchet-o-realizacii-tovarov.html)
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
  "$ref": "#/components/schemas/v2GetRealizationReportRequestV2"
}
```
:::

## Responses

### HTTP 200 - Отчёт о реализации

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v2GetRealizationReportResponseV2"
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
curl -X POST "https://api-seller.ozon.ru/v2/finance/realization" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/finance/realization"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/finance/realization", {
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
