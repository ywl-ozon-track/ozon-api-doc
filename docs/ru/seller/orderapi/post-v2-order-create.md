---
title: "Создать заказ"
description: "Создать заказ"
---

# Создать заказ

<Badge type="tip" text="POST" /> `/v2/order/create`

## 接口概览

- **所属模块**：📋 Управление заказами
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/order/create`
- **详细说明**：

> Создаёт заказ для покупателя и получателя в системе Ozon. Передайте вариант доставки из ответа метода [/v2/delivery/checkout](#operation/DeliveryCheckout).
> 
> В ответе могут быть не все отправления. Получите список всех отправлений по номеру заказа `order_number` методом:
> - [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList) — для схемы FBO;
> - [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) — для схемы FBS.
> 
> Значение параметра `delivery_schema` должно совпадать с тем, что вы передали в [/v2/delivery/checkout](#operation/DeliveryCheckout).
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/v1OrderCreateRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Заказ создан

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1OrderCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v2/order/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/order/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/order/create", {
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
