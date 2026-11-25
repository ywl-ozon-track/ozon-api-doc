---
title: "DescriptionCategoryAPI GetAttributeValues"
description: "Справочник значений характеристики"
---

# DescriptionCategoryAPI GetAttributeValues

<Badge type="tip" text="POST" /> `/v1/description-category/attribute/values`

## Endpoint Overview

- **Category**：📂 Categories & Attributes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/description-category/attribute/values`

::: details View Official Description (Russian)
> Возвращает справочник значений характеристики.
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
  "language": "DEFAULT",
  "last_value_id": 100,
  "limit": 100,
  "type_id": 97311
}
```

## Responses

### HTTP 200 - Справочник характеристик

```json
{
  "result": [
    {
      "id": 5055881,
      "value": "Sunshine",
      "info": "Здоровье и красота",
      "picture": "https://ir.ozone.ru/s3/multimedia-i/6010930878.jpg"
    },
    {
      "id": 5056737,
      "value": "Essence",
      "info": "Красота и здоровье",
      "picture": "https://ir.ozone.ru/s3/multimedia-v/6088253599.jpg"
    }
  ],
  "has_next": true
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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/attribute/values" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/attribute/values"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/attribute/values", {
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
