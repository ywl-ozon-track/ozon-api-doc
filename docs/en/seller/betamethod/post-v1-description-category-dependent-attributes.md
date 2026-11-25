---
title: "DescriptionCategoryDependentAttributes"
description: "Получить зависимые характеристики"
---

# DescriptionCategoryDependentAttributes

<Badge type="tip" text="POST" /> `/v1/description-category/dependent-attributes`

## Endpoint Overview

- **Category**：📌 BetaMethod
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/description-category/dependent-attributes`

::: details View Official Description (Russian)
> Возвращает пары идентификаторов родительской и дочерней характеристик. Получите возможные значения дочерней характеристики для значений родительской методом [/v1/description-category/dependent-attributes/values](#operation/DescriptionCategoryDependentAttributesValues).
> 
> Характеристика с `parent_attribute_id = 8229` — это идентификатор типа товара `type_id`. Не указывайте её в параметре `items.attributes.id` в запросах к методам [/v3/product/import](#operation/ProductAPI_ImportProductsV3) и [/v1/product/attributes/update](#operation/ProductAPI_ProductUpdateAttributes).
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2296-Novye-metody-zavisimykh-atributov/) в сообществе разработчиков Ozon for dev.
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
  "description_category_id": 234123,
  "type_id": 123123
}
```

## Responses

### HTTP 200 - Зависимые характеристики

```json
{
  "result": [
    {
      "child_attribute_id": 4812,
      "parent_attribute_id": 8229
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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/dependent-attributes" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/dependent-attributes"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/dependent-attributes", {
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
