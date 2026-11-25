---
title: "查询возвратной отгрузке详情"
description: "查询возвратной отгрузке详情"
---

# 查询возвратной отгрузке详情

<Badge type="tip" text="POST" /> `/v1/return/giveout/info`

## 接口概览

- **所属模块**：📌 ReturnAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/return/giveout/info`
- **详细说明**：

> Метод для получения информации о возвратной отгрузке. 
> В параметр `giveout_id` передаётся значение, полученное в методе [/v1/return/giveout/list](#operation/ReturnAPI_GiveoutList).
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
  "$ref": "#/components/schemas/v1GiveoutInfoRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация о возвратной отгрузке

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1GiveoutInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/info", {
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
