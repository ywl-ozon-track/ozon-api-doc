---
title: "PostingAPI ShipFbsPostingPackage"
description: "Частичная сборка отправления (версия 4)"
---

# PostingAPI ShipFbsPostingPackage

<Badge type="tip" text="POST" /> `/v4/posting/fbs/ship/package`

## Endpoint Overview

- **Category**：📌 FBS&rFBSMarks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v4/posting/fbs/ship/package`

::: details View Official Description (Russian)
> <aside class="warning">
> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку отправления. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что отправление собрано. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку отправления.
> </aside>
> 
> Если в запросе передать часть товаров из отправления, метод разделит первичное отправление на две части. 
> В первичном несобранном отправлении останется часть товаров, которую не передали в запросе.
> 
> По умолчанию статус созданных отправлений `awaiting_packaging` — ожидает сборки.
> 
> Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился.
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
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Request"
}
```
:::

## Responses

### HTTP 200 - Результат сборки отправления

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Response"
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
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/ship/package" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/ship/package"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/ship/package", {
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
