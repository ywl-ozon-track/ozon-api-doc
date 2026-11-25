---
title: "Информация об остатках на складах продавца (FBS и rFBS)"
description: "Информация об остатках на складах продавца (FBS и rFBS)"
---

# Информация об остатках на складах продавца (FBS и rFBS)

<Badge type="tip" text="POST" /> `/v1/product/info/stocks-by-warehouse/fbs`

## 接口概览

- **所属模块**：💰 Цены и остатки товаров
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs`
- **详细说明**：

> <aside class="warning">
>   Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на <a href="#operation/ProductAPI_GetProductInfoStocksByWarehouseFbsV2">/v2/product/info/stocks-by-warehouse/fbs</a>.
> </aside>
> 
> Передайте в запросе `offer_id` или `sku`. Если укажете оба, будет использован только `sku`.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/productsv1GetProductInfoStocksByWarehouseFbsRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Количество товаров на складах FBS и rFBS

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/productsv1GetProductInfoStocksByWarehouseFbsResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbs", {
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
