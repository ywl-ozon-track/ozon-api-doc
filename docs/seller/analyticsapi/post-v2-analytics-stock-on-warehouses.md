---
title: "Отчёт по остаткам и товарам"
description: "Отчёт по остаткам и товарам"
---

# Отчёт по остаткам и товарам

<Badge type="tip" text="POST" /> `/v2/analytics/stock_on_warehouses`

## 接口概览

- **所属模块**：📈 店铺经营数据分析
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses`
- **详细说明**：

> 
> <aside class="warning">
> В будущем метод будет отключён. Переключитесь на <a href="#operation/AnalyticsAPI_AnalyticsStocks">/v1/analytics/stocks</a>.
> </aside>
> 
> Метод для получения отчёта по остаткам и товарам в перемещении по складам Ozon.
> 
> <aside class="warning">
> Отличается от отчёта в разделе <b>Аналитика → Отчёты → Отчёт по остаткам и товарам в пути на склады Ozon</b> в личном кабинете.
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
  "limit": 1000,
  "offset": 0,
  "warehouse_type": "ALL"
}
```

## 返回响应 (Responses)

### HTTP 200 - Отчёт по остаткам и товарам

```json
{
  "result": {
    "rows": [
      {
        "free_to_sell_amount": 0,
        "item_code": "string",
        "item_name": "string",
        "promised_amount": 0,
        "reserved_amount": 0,
        "sku": 0,
        "warehouse_name": "string"
      }
    ]
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
curl -X POST "https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/analytics/stock_on_warehouses", {
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
