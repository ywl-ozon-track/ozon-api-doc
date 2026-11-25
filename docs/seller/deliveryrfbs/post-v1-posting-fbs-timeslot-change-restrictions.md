---
title: "Доступные даты для переноса доставки"
description: "Доступные даты для переноса доставки"
---

# Доступные даты для переноса доставки

<Badge type="tip" text="POST" /> `/v1/posting/fbs/timeslot/change-restrictions`

## 接口概览

- **所属模块**：📌 DeliveryrFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/fbs/timeslot/change-restrictions`
- **详细说明**：

> Метод для получения доступных дат для переноса доставки и количества доступных переносов.
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
  "$ref": "#/components/schemas/v1PostingFbsTimeslotChangeRestrictionsRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Доступные даты и количество

```json
{
  "delivery_interval": {
    "begin": "2023-03-27T08:43:05.658Z",
    "end": "2023-03-27T08:43:05.658Z"
  },
  "remaining_changes_count": 0
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/timeslot/change-restrictions" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/timeslot/change-restrictions"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/timeslot/change-restrictions", {
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
