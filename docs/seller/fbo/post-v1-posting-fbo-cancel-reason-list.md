---
title: "Причины отмены отправлений по схеме FBO"
description: "Причины отмены отправлений по схеме FBO"
---

# Причины отмены отправлений по схеме FBO

<Badge type="tip" text="POST" /> `/v1/posting/fbo/cancel-reason/list`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/fbo/cancel-reason/list`

::: details 查看官方详细说明 (Официальное описание)
> Возвращает список причин отмены для всех FBO-отправлений.
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

### HTTP 200 - Причины отмены отправлений

```json
{
  "result": [
    {
      "id": 352,
      "title": "Товар закончился на складе продавца",
      "type_id": "seller",
      "is_available_for_cancellation": true
    },
    {
      "id": 401,
      "title": "Продавец отклонил арбитраж",
      "type_id": "seller",
      "is_available_for_cancellation": false
    },
    {
      "id": 402,
      "title": "Другое (вина продавца)",
      "type_id": "seller",
      "is_available_for_cancellation": true
    },
    {
      "id": 666,
      "title": "Возврат из службы доставки: нет доставки в указанный регион",
      "type_id": "seller",
      "is_available_for_cancellation": false
    }
  ]
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbo/cancel-reason/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbo/cancel-reason/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbo/cancel-reason/list", {
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
