---
title: "PostingAPI PostingFBSGetDigitalAct"
description: "Получить лист отгрузки по перевозке"
---

# PostingAPI PostingFBSGetDigitalAct

<Badge type="tip" text="POST" /> `/v2/posting/fbs/digital/act/get-pdf`

## Endpoint Overview

- **Category**：📌 DeliveryFBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/posting/fbs/digital/act/get-pdf`

::: details View Official Description (Russian)
> <aside class="warning">
> Метод устаревает и будет отключён 22 марта 2026 года. Переключитесь на <a href="#operation/PostingAPI_PostingFBSGetAct">/v2/posting/fbs/act/get-pdf</a>.
> </aside>
> 
> Вы можете получить документы, если в ответе метода [/v2/posting/fbs/digital/act/check-status](#operation/PostingAPI_PostingFBSDigitalActCheckStatus) был один из статусов:
> - `FORMED` — перевозка сформирована успешно,
> - `CONFIRMED` — перевозка подтверждена Ozon,
> - `CONFIRMED_WITH_MISMATCH` — перевозка принята Ozon с расхождениями.
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
  "id": 900000250859000,
  "doc_type": "act_of_acceptance"
}
```

## Responses

### HTTP 200 - Файл с документом

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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/digital/act/get-pdf" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/digital/act/get-pdf"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/digital/act/get-pdf", {
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
