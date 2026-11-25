---
title: "Изменить артикулы товаров из системы продавца"
description: "Изменить артикулы товаров из системы продавца"
---

# Изменить артикулы товаров из системы продавца

<Badge type="tip" text="POST" /> `/v1/product/update/offer-id`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/update/offer-id`
- **详细说明**：

> Метод для изменения `offer_id`, привязанных к товарам. Вы можете изменить несколько `offer_id`. Если `offer_id` уже используется для другого товара, вернётся ошибка `OFFER_ID_ALREADY_EXISTS`.
> <br> [Подробнее о требованиях к артикулам в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/product-information/articyl-tovara#какие-есть-требования-к-артикулу)
> 
> У метода есть лимит на количество операций c товарами в минуту. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
> - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени.
> - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита.
> 
> Чтобы узнать лимит, используйте [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota).
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
  "update_offer_id": [
    {
      "new_offer_id": "haval",
      "offer_id": "chery"
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Информация об изменении артикулов

```json
{
  "errors": [
    {
      "offer_id": "haval",
      "message": "Товар с артикулом haval уже существует."
    }
  ]
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
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
curl -X POST "https://api-seller.ozon.ru/v1/product/update/offer-id" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/update/offer-id"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/update/offer-id", {
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
