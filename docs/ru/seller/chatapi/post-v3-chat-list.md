---
title: "Список чатов"
description: "Список чатов"
---

# Список чатов

<Badge type="tip" text="POST" /> `/v3/chat/list`

## 接口概览

- **所属模块**：🗨️ Чаты с покупателями
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/chat/list`
- **详细说明**：

> Возвращает информацию о чатах по указанным фильтрам.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filter": {
    "chat_status": "OPENED",
    "unread_only": true
  },
  "limit": 1,
  "cursor": "304000402034"
}
```

## 返回响应 (Responses)

### HTTP 200 - Список чатов

```json
{
  "chats": [
    {
      "chat": {
        "created_at": "2022-07-22T08:07:19.581Z",
        "chat_id": "5e767w03-b400-4y1b-a841-75319ca8a5c8",
        "chat_status": "OPENED",
        "chat_type": "SELLER_SUPPORT"
      },
      "first_unread_message_id": "3000000000118021931",
      "last_message_id": "30000000001280042740",
      "unread_count": 1
    }
  ],
  "total_unread_count": 5,
  "cursor": "30000002342123123",
  "has_next": "true"
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
curl -X POST "https://api-seller.ozon.ru/v3/chat/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/chat/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/chat/list", {
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
