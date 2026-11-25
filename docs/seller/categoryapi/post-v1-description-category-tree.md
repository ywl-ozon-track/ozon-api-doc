---
title: "获取 Ozon 全量商品类目与类型树形结构"
description: "获取 Ozon 全量商品类目与类型树形结构"
---

# 获取 Ozon 全量商品类目与类型树形结构

<Badge type="tip" text="POST" /> `/v1/description-category/tree`

## 接口概览

- **所属模块**：📂 商品类目与属性字典
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/description-category/tree`
- **详细说明**：

> Возвращает категории и типы для товаров в виде дерева.
> 
> Создание товаров доступно только в категориях последнего уровня, сравните именно их с категориями на своей площадке.
> Категории не создаются по запросу пользователя.
> 
> <aside class="warning">
>   Внимательно выбирайте категорию для товара: для разных категорий применяется разный размер комиссии.
> </aside>
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "language": "DEFAULT"
}
```

## 返回响应 (Responses)

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

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

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
