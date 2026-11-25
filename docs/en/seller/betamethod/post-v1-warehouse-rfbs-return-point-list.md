---
title: "WarehouseRfbsReturnPointList"
description: "Получить список пунктов возврата для склада rFBS"
---

# WarehouseRfbsReturnPointList

<Badge type="tip" text="POST" /> `/v1/warehouse/rfbs/return-point/list`

## Endpoint Overview

- **Category**：📌 BetaMethod
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/warehouse/rfbs/return-point/list`

::: details View Official Description (Russian)
> Используйте метод при создании и обновлении складов rFBS и rFBS Express.
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2369-Novyi-beta-metod-dlia-polucheniia-vozvratnykh-tochek-dlia-rfbs-ekspress/) в сообществе разработчиков Ozon for dev.
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
  "filters": {
    "address": "Россия",
    "coordinates": {
      "latitude": 0,
      "longitude": 0
    },
    "country_code": "RU",
    "ids": [
      "1020001267468000"
    ],
    "types": [
      "PVZ"
    ],
    "warehouse_id": 920819
  },
  "last_id": 12,
  "limit": 10
}
```

## Responses

### HTTP 200 - Список пунктов возврата

```json
{
  "points": [
    {
      "address": "Россия, Москва, 2-я Фрунзенская улица, 10",
      "coordinates": {
        "latitude": 0,
        "longitude": 0
      },
      "id": 1020001267468000,
      "name": "МОСКВА_5259",
      "type": "PVZ",
      "utc_offset": 180,
      "working_days": [
        {
          "date": "2026-07-27",
          "day": "MONDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-07-28",
          "day": "TUESDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-07-29",
          "day": "WEDNESDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-07-30",
          "day": "THURSDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-07-31",
          "day": "FRIDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-08-01",
          "day": "SATURDAY",
          "from": "10:00",
          "to": "20:00"
        },
        {
          "date": "2026-08-02",
          "day": "SUNDAY",
          "from": "10:00",
          "to": "20:00"
        }
      ]
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/rfbs/return-point/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/rfbs/return-point/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/rfbs/return-point/list", {
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
