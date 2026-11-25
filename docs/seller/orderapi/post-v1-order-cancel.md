---
title: "取消заказ"
description: "Отменить заказ"
---

# 取消заказ

<Badge type="tip" text="POST" /> `/v1/order/cancel`

## 接口概览

- **所属模块**：📋 通用订单管理
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/order/cancel`

::: details 查看官方详细说明 (Официальное описание)
> Отменяет заказ со всеми отправлениями. Используйте идентификатор причины отмены `reasons.id` из метода [/v1/cancel-reason/list-by-order](#operation/CancelReasonListByOrder).
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1OrderCancelRequest"
}
```
:::

## 返回响应

### HTTP 200 - Заказ отменён

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1OrderCancelResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/order/cancel" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/order/cancel"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/order/cancel", {
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
