---
title: "Справочник значений характеристики"
description: "Справочник значений характеристики"
---

# Справочник значений характеристики

<Badge type="tip" text="POST" /> `/v1/description-category/attribute/values`

## 接口概览

- **所属模块**：📂 商品类目与属性字典
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/description-category/attribute/values`
- **详细说明**：

> Возвращает справочник значений характеристики.
> 
> Узнать, есть ли вложенный справочник, можно через метод [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes). 
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
  "attribute_id": 85,
  "description_category_id": 17054869,
  "language": "DEFAULT",
  "last_value_id": 100,
  "limit": 100,
  "type_id": 97311
}
```

## 返回响应 (Responses)

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
