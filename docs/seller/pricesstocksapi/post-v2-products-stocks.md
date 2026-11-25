---
title: "批量更新指定仓库的商品可用库存数量"
description: "批量更新指定仓库的商品可用库存数量"
---

# 批量更新指定仓库的商品可用库存数量

<Badge type="tip" text="POST" /> `/v2/products/stocks`

## 接口概览

- **所属模块**：💰 商品价格与库存
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/products/stocks`
- **详细说明**：

> Позволяет изменить информацию о количестве товара в наличии.
> 
> <aside class="warning">
> Переданный остаток — количество товара в наличии без учёта зарезервированных товаров. Перед обновлением остатков проверьте количество зарезервированных товаров с помощью метода <a href="#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2">/v2/product/info/stocks-by-warehouse/fbs</a>.
> </aside>
> 
> За один запрос можно изменить наличие для 100 пар товар-склад. С одного аккаунта продавца можно отправить до 80 запросов в минуту.
> 
> <aside class="warning">Обновлять остатки у одной пары товар-склад можно только 1 раз в 30 секунд, иначе в параметре <code>result.errors</code> в ответе будет ошибка <code>TOO_MANY_REQUESTS</code>.</aside>
> 
> Вы можете задать наличие товара только после того, как его статус сменится на `price_sent`.
> 
> Остатки крупногабаритных товаров можно обновлять только на предназначенных для них складах.
> 
> Если запрос содержит оба параметра — `offer_id` и `product_id`, изменения применятся к товару с `offer_id`. Для избежания неоднозначности используйте только один из параметров.
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
  "stocks": [
    {
      "offer_id": "PH11042",
      "product_id": 313455276,
      "stock": 100,
      "warehouse_id": 22142605386000
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Количество товаров обновлено

```json
{
  "result": [
    {
      "warehouse_id": 22142605386000,
      "product_id": 118597312,
      "offer_id": "PH11042",
      "updated": true,
      "errors": []
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
curl -X POST "https://api-seller.ozon.ru/v2/products/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/products/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/products/stocks", {
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
