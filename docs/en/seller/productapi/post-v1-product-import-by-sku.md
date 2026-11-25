---
title: "Создать товар по SKU"
description: "Создать товар по SKU"
---

# Создать товар по SKU

<Badge type="tip" text="POST" /> `/v1/product/import-by-sku`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/import-by-sku`
- **详细说明**：

> Метод создаёт [копию карточки товара](https://seller-edu.ozon.ru/work-with-goods/zagruzka-tovarov/creating-goods/cherez-kopirovanie)
> с указанным SKU.
> 
> Метод копирует только карточку товара другого продавца, скопировать свой товар не получится. Создать копию не получится, если продавец запретил копирование своих карточек.
> 
> Нельзя: 
>  - обновить товар по SKU;
>  - копировать товар, если вы самозанятый.
> 
> Продавцам из России и СНГ можно копировать товары любой страны.
> 
> У метода есть лимит на количество операций c товарами в минуту и в сутки. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
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
  "items": [
    {
      "sku": 298789742,
      "name": "Кружка",
      "offer_id": "91132",
      "currency_code": "RUB",
      "old_price": "2590",
      "price": "2300",
      "vat": "0.1"
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Товар создан

```json
{
  "result": {
    "task_id": 176594213,
    "unmatched_sku_list": []
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/product/import-by-sku" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/import-by-sku"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/import-by-sku", {
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
