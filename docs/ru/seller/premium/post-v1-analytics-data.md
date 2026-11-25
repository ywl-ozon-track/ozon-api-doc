---
title: "Данные аналитики"
description: "Данные аналитики"
---

# Данные аналитики

<Badge type="tip" text="POST" /> `/v1/analytics/data`

## 接口概览

- **所属模块**：💎 Premium-функционал
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/analytics/data`
- **详细说明**：

> Уĸажите период и метриĸи, ĸоторые нужно посчитать. В ответе будет аналитиĸа, сгруппированная по параметру `dimensions`.
> 
> Для продавцов без подписки [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus):
> - доступны данные за последние 3 месяца;
> - есть ограничения по способам группировки данных и метрикам;
> - есть лимит на 50 запросов в сутки.
> 
> Для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) ограничений нет.
> 
> Метод можно использовать не больше 1 раза в минуту.
> Соответствует разделу **Аналитика → Продажи моих товаров** в личном кабинете.
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
  "date_from": "2020-09-01",
  "date_to": "2021-10-15",
  "metrics": [
    "hits_view_search"
  ],
  "dimension": [
    "sku",
    "day"
  ],
  "filters": [],
  "sort": [
    {
      "key": "hits_view_search",
      "order": "DESC"
    }
  ],
  "limit": 1000,
  "offset": 0
}
```

## 返回响应 (Responses)

### HTTP 200 - Данные аналитики

```json
{
  "result": {
    "data": [],
    "totals": [
      0
    ]
  },
  "timestamp": "2021-11-25 15:19:21"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/data" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/data"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/data", {
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
