---
title: "删除черновик для доставки в drop-off пункт"
description: "删除черновик для доставки в drop-off пункт"
---

# 删除черновик для доставки в drop-off пункт

<Badge type="tip" text="POST" /> `/v1/fbp/draft/drop-off/delete`

## 接口概览

- **所属模块**：📌 DraftDropOffFBP
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete`
- **详细说明**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.


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
  "$ref": "#/components/schemas/v1FbpDraftDropOffDeleteRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Черновик удалён

```json
{
  "cancellation_state": {
    "cancellation_error": {
      "error_code": "NO_RESPONSE_FROM_3PF",
      "message": "string"
    },
    "cancellation_status": "CONFIRMATION"
  },
  "row_version": 0
}
```

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/drop-off/delete", {
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
