---
title: "取消отправление"
description: "取消отправление"
---

# 取消отправление

<Badge type="tip" text="POST" /> `/v2/posting/fbs/cancel`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/posting/fbs/cancel`
- **详细说明**：

> Меняет статус отправления на `cancelled`.
> 
> Перед началом работы проверьте причины отмены для конкретного отправления методом [/v1/posting/fbs/cancel-reason](#operation/PostingAPI_GetPostingFbsCancelReasonV1).
> 
> Условно-доставленные отправления отменить нельзя.
> 
> Если значение параметра `cancel_reason_id` — 402, заполните поле `cancel_reason_message`.
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
  "cancel_reason_id": 352,
  "cancel_reason_message": "Product is out of stock",
  "posting_number": "33920113-1231-1"
}
```

## 返回响应 (Responses)

### HTTP 200 - Отправление отменено

```json
{
  "result": true
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
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/cancel", {
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
