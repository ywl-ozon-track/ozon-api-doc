---
title: "获取当前 API 密钥对应的权限角色与支持方法列表"
description: "获取当前 API 密钥对应的权限角色与支持方法列表"
---

# 获取当前 API 密钥对应的权限角色与支持方法列表

<Badge type="tip" text="POST" /> `/v1/roles`

## 接口概览

- **所属模块**：🔑 API密钥与权限
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/roles`
- **详细说明**：

> Метод для получения информации и ролях и методах, привязанных к API-ключу.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 返回响应 (Responses)

### HTTP 200 - Список ролей и методов

```json
{
  "expires_at": "2026-02-18T09:54:23.296Z",
  "roles": [
    {
      "name": "Admin",
      "methods": [
        "/v1/actions"
      ]
    },
    {
      "name": "Posting FBS",
      "methods": [
        "/v1/posting"
      ]
    }
  ]
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/roles" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/roles"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/roles", {
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
