---
title: "PostingAPI GetEtgb"
description: "Таможенные декларации ETGB"
---

# PostingAPI GetEtgb

<Badge type="tip" text="POST" /> `/v1/posting/global/etgb`

## Endpoint Overview

- **Category**：📌 FBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/posting/global/etgb`

::: details View Official Description (Russian)
> Метод для получения таможенных деклараций Elektronik Ticaret Gümrük Beyannamesi (ETGB) для продавцов из Турции.
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
  "date": {
    "from": "2023-02-13T12:13:16.818Z",
    "to": "2023-02-13T12:13:16.818Z"
  }
}
```

## Responses

### HTTP 200 - Информация о декларациях

```json
{
  "result": [
    {
      "posting_number": "228245774-2229-1",
      "etgb": {
        "number": "1",
        "date": "12-12-2026",
        "url": "htttp://testurl/posting/global.ru"
      }
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/global/etgb" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/global/etgb"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/global/etgb", {
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
