---
title: "PostingAPI FbsPostingProductExemplarValidateV5"
description: "Валидация кодов маркировки"
---

# PostingAPI FbsPostingProductExemplarValidateV5

<Badge type="tip" text="POST" /> `/v5/fbs/posting/product/exemplar/validate`

## Endpoint Overview

- **Category**：📌 FBS&rFBSMarks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate`

::: details View Official Description (Russian)
> Метод для проверки кодов на соответствие требованиям системы «Честный ЗНАК» по количеству и составу символов, а также других маркировок.
> 
> Если у вас нет номера грузовой таможенной декларации (ГТД), вы можете его не указывать.
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
  "$ref": "#/components/schemas/v5FbsPostingProductExemplarValidateV5Request"
}
```
:::

## Responses

### HTTP 200 - Результат валидации

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v5FbsPostingProductExemplarValidateV5Response"
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
curl -X POST "https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate", {
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
