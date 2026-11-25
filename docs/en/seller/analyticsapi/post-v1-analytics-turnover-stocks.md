---
title: "Оборачиваемость товара"
description: "Оборачиваемость товара"
---

# Оборачиваемость товара

<Badge type="tip" text="POST" /> `/v1/analytics/turnover/stocks`

## 接口概览

- **所属模块**：📈 Analytics & Data Reports
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/analytics/turnover/stocks`
- **详细说明**：

> Используйте метод, чтобы узнать оборачиваемость товара и количество дней, на которое хватит текущего остатка. 
> Метод соответствует разделу [**FBO -> Управление остатками**](https://seller.ozon.ru/app/supply/stocks-management) в личном кабинете.
> Вы можете делать не больше 1 запроса в минуту по одному кабинету `Client-Id`.
>     
> Если вы запрашиваете список товаров по `sku`, параметры `limit` и `offset` необязательны.
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
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация об оборачиваемости

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/turnover/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/turnover/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/turnover/stocks", {
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
