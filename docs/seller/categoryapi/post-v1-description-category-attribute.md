---
title: "获取指定类目下商品必填与选填属性规格列表"
description: "获取指定类目下商品必填与选填属性规格列表"
---

# 获取指定类目下商品必填与选填属性规格列表

<Badge type="tip" text="POST" /> `/v1/description-category/attribute`

## 接口概览

- **所属模块**：📂 商品类目与属性字典
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/description-category/attribute`
- **详细说明**：

> Получение характеристик для указанных категории и типа товара.
> 
> Если у `dictionary_id` значение `0`, у атрибута нет вложенных справочников.
> Если значение другое, то справочники есть. Запросите их методом [/v1/description-category/attribute/values](#operation/DescriptionCategoryAPI_GetAttributeValues).
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
  "description_category_id": 200000933,
  "language": "DEFAULT",
  "type_id": 93080
}
```

## 返回响应 (Responses)

### HTTP 200 - Характеристики категории

```json
{
  "result": [
    {
      "id": 31,
      "attribute_complex_id": 32,
      "name": "Бренд в одежде и обуви",
      "description": "Укажите наименование бренда, под которым произведён товар. Если товар не имеет бренда, используйте значение \"Нет бренда\"",
      "type": "string",
      "is_collection": false,
      "is_required": true,
      "is_aspect": false,
      "max_value_count": 30,
      "group_name": "",
      "group_id": 33,
      "dictionary_id": 28732849,
      "category_dependent": true,
      "complex_is_collection": true
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
curl -X POST "https://api-seller.ozon.ru/v1/description-category/attribute" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/description-category/attribute"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/description-category/attribute", {
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
