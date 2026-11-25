---
title: "Получить список чеков продавца"
description: "Получить список чеков продавца"
---

# Получить список чеков продавца

<Badge type="tip" text="POST" /> `/v1/receipts/seller/list`

## 接口概览

- **所属模块**：📌 Receipt
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/receipts/seller/list`
- **详细说明**：

> <aside class="warning">
>  Метод доступен продавцам, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> </aside>
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
  "$ref": "#/components/schemas/v1ReceiptsSellerListRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Список чеков продавца

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1ReceiptsSellerListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/receipts/seller/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/receipts/seller/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/receipts/seller/list", {
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
