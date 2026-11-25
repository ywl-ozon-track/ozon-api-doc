---
title: "Провалидировать список товаров для pick-up поставки"
description: "Провалидировать список товаров для pick-up поставки"
---

# Провалидировать список товаров для pick-up поставки

<Badge type="tip" text="POST" /> `/v1/fbp/draft/pick-up/product/validate`

## 接口概览

- **所属模块**：📝 FBP揽收单草稿
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/fbp/draft/pick-up/product/validate`

::: details 查看官方详细说明 (Официальное описание)
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1FbpDraftPickUpProductValidateRequest"
}
```
:::

## 返回响应

### HTTP 200 - Список провалидирован

```json
{
  "approved_items": [
    {
      "barcode": "string",
      "icon_name": "string",
      "name": "string",
      "offer_id": "string",
      "quantity": 0,
      "sku": 0,
      "volume": 0
    }
  ],
  "bundle_generated": true,
  "bundle_id": "string",
  "rejected_items": [
    {
      "barcode": "string",
      "icon_name": "string",
      "name": "string",
      "offer_id": "string",
      "quantity": 0,
      "rejection_reasons": [
        "BUNDLE_ITEM_ERROR_UNSPECIFIED"
      ],
      "sku": 0,
      "volume": 0
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/pick-up/product/validate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/pick-up/product/validate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/pick-up/product/validate", {
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
