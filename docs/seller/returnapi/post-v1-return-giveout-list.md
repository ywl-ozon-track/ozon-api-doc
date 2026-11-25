---
title: "获取возвратных отгрузок列表"
description: "Список возвратных отгрузок"
---

# 获取возвратных отгрузок列表

<Badge type="tip" text="POST" /> `/v1/return/giveout/list`

## 接口概览

- **所属模块**：📌 ReturnAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/return/giveout/list`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения списка активных возвратов.
> Возвратная отгрузка становится активной после сканирования штрихкода. 
> После сканирования штрихкода второй раз активная выдача переходит в статус неактивной.
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "last_id": 0,
  "limit": 500
}
```

## 返回响应

### HTTP 200 - Список возвратных отгрузок

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1GiveoutListResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/return/giveout/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/giveout/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/giveout/list", {
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
