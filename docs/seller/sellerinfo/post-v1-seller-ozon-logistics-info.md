---
title: "查询 Ozon 官方物流（Ozon Delivery）开通与签约状态"
description: "Информация о подключении Ozon Доставки"
---

# 查询 Ozon 官方物流（Ozon Delivery）开通与签约状态

<Badge type="tip" text="POST" /> `/v1/seller/ozon-logistics/info`

## 接口概览

- **所属模块**：🏢 卖家店铺与入驻信息
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/seller/ozon-logistics/info`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

### HTTP 200 - Информация о подключении Ozon Доставки

```json
{
  "available_schemas": [
    "UNKNOWN"
  ],
  "ozon_logistics_enabled": true
}
```

### HTTP default - Ошибка

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/seller/ozon-logistics/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/seller/ozon-logistics/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/seller/ozon-logistics/info", {
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
