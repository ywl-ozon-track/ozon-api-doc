---
title: "检查与验证новый товарный состав"
description: "Проверить новый товарный состав"
---

# 检查与验证новый товарный состав

<Badge type="tip" text="POST" /> `/v1/supply-order/content/update/validation`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/supply-order/content/update/validation`

::: details 查看官方详细说明 (Официальное описание)
> Используйте этот метод, если в [/v1/supply-order/content/update/status](#operation/SupplyOrderAPI_SupplyOrderContentUpdateStatus) вы получили ошибку `SUPPLY_CONTENT_NOT_VALID`.
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
  "$ref": "#/components/schemas/v1SupplyOrderContentUpdateValidationRequest"
}
```
:::

## 返回响应

### HTTP 200 - Успешно

```json
{
  "editing_errors": [
    "UNSPECIFIED"
  ],
  "validated_assortment": {
    "approved_items": [
      {
        "barcode": "string",
        "item_link": "string",
        "name": "string",
        "offer_id": "string",
        "origin_quantity": 0,
        "origin_total_volume_in_litres": 0,
        "quant": 0,
        "quantity": 0,
        "sku": 0,
        "sku_quantity_limit": 0,
        "total_volume_in_litres": 0
      }
    ],
    "rejected_items": [
      {
        "barcode": "string",
        "name": "string",
        "offer_id": "string",
        "origin_quantity": 0,
        "origin_total_volume_in_litres": 0,
        "quantity": 0,
        "rejection_reason": [
          "UNSPECIFIED"
        ],
        "restrictions": {
          "reasons_restrictions": [
            "UNKNOWN"
          ],
          "sku_has_no_sales_in_days": 0,
          "sku_quantity_limit": 0
        },
        "sku": 0,
        "total_volume_in_litres": 0
      }
    ],
    "total_approved_item_count": 0,
    "total_approved_quantity": 0,
    "total_approved_volume_in_litres": 0,
    "total_rejected_item_count": 0,
    "total_restricted_item_count": 0
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/content/update/validation" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/content/update/validation"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/content/update/validation", {
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
