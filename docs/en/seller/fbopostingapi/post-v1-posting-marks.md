---
title: "PostingAPI PostingMarks"
description: "Получить маркировки экземпляров из отправления"
---

# PostingAPI PostingMarks

<Badge type="tip" text="POST" /> `/v1/posting/marks`

## Endpoint Overview

- **Category**：📦 FBO Orders & Postings
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/posting/marks`

::: details View Official Description (Russian)
> Возвращает статусы выдачи экземпляров и коды маркировки «Честный ЗНАК» для каждого отправления.
> 
> Укажите в чеке и выведите из оборота маркировки экземпляров из параметра `issued_exemplars` в ответе.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Client-Id` | Yes | Unique Client ID from seller cabinet |
| `Api-Key` | Yes | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1PostingMarksRequest"
}
```
:::

## Responses

### HTTP 200 - Список экземпляров отправления с маркировками

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v1PostingMarksResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/marks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/marks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/marks", {
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
