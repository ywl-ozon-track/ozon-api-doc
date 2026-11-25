---
title: "Штрихкод для получения возвратной отгрузки в формате PNG"
description: "Штрихкод для получения возвратной отгрузки в формате PNG"
---

# Штрихкод для получения возвратной отгрузки в формате PNG

<Badge type="tip" text="POST" /> `/v1/return/giveout/get-png`

## 接口概览

- **所属模块**：📌 ReturnAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/return/giveout/get-png`
- **详细说明**：

> Возвращает PNG-файл со штрихкодом.


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

### HTTP 200 - Штрихкод для возвратной отгрузки

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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/get-png" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/get-png"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/get-png", {
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
