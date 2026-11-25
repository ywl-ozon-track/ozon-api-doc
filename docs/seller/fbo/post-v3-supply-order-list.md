---
title: "获取заявок на поставку на склад Ozon列表"
description: "获取заявок на поставку на склад Ozon列表"
---

# 获取заявок на поставку на склад Ozon列表

<Badge type="tip" text="POST" /> `/v3/supply-order/list`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/supply-order/list`
- **详细说明**：

> Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filter": {
    "states": [
      "COMPLETED"
    ]
  },
  "last_id": "null",
  "limit": 1,
  "sort_by": "ORDER_CREATION",
  "sort_dir": "DESC"
}
```

## 返回响应 (Responses)

### HTTP 200 - Список заявок на поставку

```json
{
  "order_ids": [
    3424231244
  ],
  "last_id": "string"
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
curl -X POST "https://api-seller.ozon.ru/v3/supply-order/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/supply-order/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/supply-order/list", {
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
