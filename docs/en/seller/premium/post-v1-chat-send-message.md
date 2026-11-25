---
title: "Отправить сообщение"
description: "Отправить сообщение"
---

# Отправить сообщение

<Badge type="tip" text="POST" /> `/v1/chat/send/message`

## 接口概览

- **所属模块**：💎 Premium Features & Chat
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/chat/send/message`
- **详细说明**：

> 
> Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 
> Отправляет сообщение в существующий чат по его идентификатору. <br><br>
> Получите список чатов с покупателем `chats.chat.chat_type="Buyer_Seller"` в ответе метода [/v3/chat/list](#operation/ChatAPI_ChatListV3).
> 
> Для отправлений:
> - FBO — вы можете отправить сообщение в течение 48 часов с момента получения последнего сообщения от покупателя. 
> - FBS или rFBS — вы можете отправить сообщение покупателю после оплаты и в течение 72 часов после доставки отправления. После этого вы можете только отвечать на сообщения в течение 48 часов с момента получения последнего сообщения от покупателя.
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
  "chat_id": "99feb3fc-a474-469f-95d5-268b470cc607",
  "text": "test"
}
```

## 返回响应 (Responses)

### HTTP 200 - Сообщение отправлено

```json
{
  "result": "success"
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
curl -X POST "https://api-seller.ozon.ru/v1/chat/send/message" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/chat/send/message"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/chat/send/message", {
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
