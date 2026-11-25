---
title: "PostingAPI FbsPostingProductExemplarCreateOrGetV6"
description: "Получить данные созданных экземпляров"
---

# PostingAPI FbsPostingProductExemplarCreateOrGetV6

<Badge type="tip" text="POST" /> `/v6/fbs/posting/product/exemplar/create-or-get`

## Endpoint Overview

- **Category**：📌 FBS&rFBSMarks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get`

::: details View Official Description (Russian)
> Метод для получения информации по экземплярам товаров из отправления, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).
> 
> Используйте метод для получения `exemplar_id`.
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
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarCreateOrGetV6Request"
}
```
:::

## Responses

### HTTP 200 - Данные экземпляров

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarCreateOrGetV6Response"
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
curl -X POST "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get", {
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
