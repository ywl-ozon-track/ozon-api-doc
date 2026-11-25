---
title: "DescriptionCategoryAPI GetTree"
description: "Дерево категорий и типов товаров"
---

# DescriptionCategoryAPI GetTree

<Badge type="tip" text="POST" /> `/v1/description-category/tree`

## Endpoint Overview

- **Category**：📂 Categories & Attributes
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/description-category/tree`

::: details View Official Description (Russian)
> Возвращает категории и типы для товаров в виде дерева.
> 
> Создание товаров доступно только в категориях последнего уровня, сравните именно их с категориями на своей площадке.
> Категории не создаются по запросу пользователя.
> 
> <aside class="warning">
>   Внимательно выбирайте категорию для товара: для разных категорий применяется разный размер комиссии.
> </aside>
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
  "language": "DEFAULT"
}
```

## Responses

### HTTP 200 - Дерево категорий

```json
{
  "result": [
    {
      "description_category_id": 17027492,
      "category_name": "Канцелярские товары",
      "disabled": false,
      "children": [
        {
          "description_category_id": 17029016,
          "category_name": "Печати и штампы",
          "disabled": false,
          "children": [
            {
              "type_name": "Пистолет-маркиратор",
              "type_id": 970778135,
              "disabled": false,
              "children": []
            }
          ]
        }
      ]
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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/tree" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/tree"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/tree", {
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
