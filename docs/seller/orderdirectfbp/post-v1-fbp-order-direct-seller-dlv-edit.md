---
title: "更新информацию о доставке силами продавца"
description: "更新информацию о доставке силами продавца"
---

# 更新информацию о доставке силами продавца

<Badge type="tip" text="POST" /> `/v1/fbp/order/direct/seller-dlv/edit`

## 接口概览

- **所属模块**：📌 OrderDirectFBP
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit`
- **详细说明**：

> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1FbpOrderDirectSellerDlvEditRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация обновлена

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1FbpOrderDirectSellerDlvEditResponse"
}
```
:::

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit", {
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
