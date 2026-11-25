---
title: "FbpDraftDropOffPointTimetable"
description: "Получить расписание работы drop-off пункта"
---

# FbpDraftDropOffPointTimetable

<Badge type="tip" text="POST" /> `/v1/fbp/draft/drop-off/point/timetable`

## Endpoint Overview

- **Category**：📌 DraftDropOffFBP
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/fbp/draft/drop-off/point/timetable`

::: details View Official Description (Russian)
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1FbpDraftDropOffPointTimetableRequest"
}
```
:::

## Responses

### HTTP 200 - Расписание работы

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1FbpDraftDropOffPointTimetableResponse"
}
```
:::

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/point/timetable" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/point/timetable"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/drop-off/point/timetable", {
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
