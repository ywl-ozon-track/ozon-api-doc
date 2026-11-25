---
title: "获取当前 API 密钥对应的权限角色与支持方法列表"
description: "Получить список ролей и методов по API-ключу"
---

# 获取当前 API 密钥对应的权限角色与支持方法列表

<Badge type="tip" text="POST" /> `/v1/roles`

## 接口概览

- **所属模块**：🔑 API密钥与权限
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/roles`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения информации и ролях и методах, привязанных к API-ключу.
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

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
