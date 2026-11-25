---
title: "Дерево категорий и типов товаров"
description: "Дерево категорий и типов товаров"
---

# Дерево категорий и типов товаров

<Badge type="tip" text="POST" /> `/v1/description-category/tree`

## Обзор метода

- **Категория**：📂 Атрибуты и характеристики Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/description-category/tree`
- **Описание**：

> Возвращает категории и типы для товаров в виде дерева.
> 
> Создание товаров доступно только в категориях последнего уровня, сравните именно их с категориями на своей площадке.
> Категории не создаются по запросу пользователя.
> 
> <aside class="warning">
>   Внимательно выбирайте категорию для товара: для разных категорий применяется разный размер комиссии.
> </aside>
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "language": "DEFAULT"
}
```

## Ответы сервера

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

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

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
