---
title: "DescriptionCategoryAPI SearchAttributeValues"
description: "Поиск по справочным значениям характеристики"
---

# DescriptionCategoryAPI SearchAttributeValues

<Badge type="tip" text="POST" /> `/v1/description-category/attribute/values/search`

## Endpoint Overview

- **Category**：📂 Categories & Attributes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/description-category/attribute/values/search`

::: details View Official Description (Russian)
> Возвращает справочные значения характеристики по заданному значению `value` в запросе.
> 
> Узнать, есть ли вложенный справочник, можно через метод [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes).
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
  "attribute_id": 85,
  "description_category_id": 17054869,
  "limit": 100,
  "type_id": 97311,
  "value": "Name"
}
```

## Responses

### HTTP 200 - Справочные значения характеристики.

```json
{
  "result": [
    {
      "id": 1,
      "info": "Черный-товар",
      "picture": "https://example.com/images/color_black.jpg",
      "value": "Чёрный"
    }
  ]
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/attribute/values/search" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/attribute/values/search"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/attribute/values/search", {
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
