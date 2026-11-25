---
title: "更新商品"
description: "Обновить характеристики товара"
---

# 更新商品

<Badge type="tip" text="POST" /> `/v1/product/attributes/update`

## 接口概览

- **所属模块**：📦 商品管理与创建更新
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/attributes/update`

::: details 查看官方详细说明 (Официальное описание)
> Метод позволяет добавлять характеристики и изменять их значения. Изменятся только характеристики, которые вы указали в запросе. Удалить уже заполненные характеристики не получится. Для полного обновления характеристик используйте <a href="#operation/ProductAPI_ImportProductsV3">/v3/product/import</a>.
> 
> У метода есть лимит на количество операций c товарами в минуту и в сутки. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
> - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени.
> - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита.
> 
> Чтобы узнать лимит, используйте [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota).
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "items": [
    {
      "offer_id": "PROD-2023-001",
      "attributes": [
        {
          "complex_id": 1,
          "id": 1,
          "values": [
            {
              "dictionary_value_id": 1001,
              "value": "Синий"
            }
          ]
        },
        {
          "complex_id": 2,
          "id": 2,
          "values": [
            {
              "dictionary_value_id": 2001,
              "value": "42"
            }
          ]
        },
        {
          "complex_id": 3,
          "id": 3,
          "values": [
            {
              "dictionary_value_id": 3001,
              "value": "Хлопок"
            },
            {
              "dictionary_value_id": 3002,
              "value": "Полиэстер"
            }
          ]
        }
      ]
    }
  ]
}
```

## 返回响应

### HTTP 200 - Создано задание на обновление товаров

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1ProductUpdateAttributesResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 429 - Слишком много запросов

```json
{
  "code": "RESOURCE_EXHAUSTED",
  "message": "You have reached operation items limits. Retry after 120 seconds. Remaining 10 items"
}
```

### HTTP 500 - Внутренняя ошибка сервера

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/product/attributes/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/attributes/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/attributes/update", {
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
