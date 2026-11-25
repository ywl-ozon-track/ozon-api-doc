---
title: "检查与验证возможность получения возвратных отгрузок по штрихкоду"
description: "检查与验证возможность получения возвратных отгрузок по штрихкоду"
---

# 检查与验证возможность получения возвратных отгрузок по штрихкоду

<Badge type="tip" text="POST" /> `/v1/return/giveout/is-enabled`

## 接口概览

- **所属模块**：📌 ReturnAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/return/giveout/is-enabled`
- **详细说明**：

> Если у вас есть доступ, в параметре `enabled` будет указано значение `true`.


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
  "$ref": "#/components/schemas/v1Empty"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Результат проверки

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1GiveoutIsEnabledResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/is-enabled" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/is-enabled"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/is-enabled", {
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
