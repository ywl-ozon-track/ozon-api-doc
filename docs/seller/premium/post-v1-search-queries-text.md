---
title: "获取список поисковых запросов по тексту"
description: "Получить список поисковых запросов по тексту"
---

# 获取список поисковых запросов по тексту

<Badge type="tip" text="POST" /> `/v1/search-queries/text`

## 接口概览

- **所属模块**：💎 Premium买家高级客服
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/search-queries/text`

::: details 查看官方详细说明 (Официальное описание)
> Доступно для продавцов с подпиской [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
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
  "limit": "50",
  "offset": "0",
  "sort_by": "CLIENT_COUNT",
  "sort_dir": "ASC",
  "text": "string"
}
```

## 返回响应

### HTTP 200 - Список поисковых запросов

```json
{
  "search_queries": [
    {
      "avg_price": 3786.6,
      "conversion_to_cart": 0.163,
      "client_count": 165418,
      "items_views": 140.828,
      "query": "куртка женская демисезон",
      "add_to_cart": 26977,
      "sellers_count": 63.833
    },
    {
      "avg_price": 3786.6,
      "conversion_to_cart": 0.163,
      "client_count": 165418,
      "items_views": 140.828,
      "query": "куртка женская демисезон",
      "add_to_cart": 26977,
      "sellers_count": 63.833
    }
  ],
  "offset": "string",
  "total": "string"
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/search-queries/text" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/search-queries/text"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/search-queries/text", {
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
