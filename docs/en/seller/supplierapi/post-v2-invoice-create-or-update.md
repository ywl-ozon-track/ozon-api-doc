---
title: "Создать или изменить счёт-фактуру"
description: "Создать или изменить счёт-фактуру"
---

# Создать или изменить счёт-фактуру

<Badge type="tip" text="POST" /> `/v2/invoice/create-or-update`

## 接口概览

- **所属模块**：📌 SupplierAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/invoice/create-or-update`
- **详细说明**：

> Создание или изменение таможенного счёта-фактуры для возврата НДС продавцам из Турции. Вы можете создать счёт-фактуру только для отправлений в статусах `awaiting_approve` или `awaiting_packaging`.


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "HS_code": [
    {
      "sku": "SKU123",
      "code": "534758761999"
    },
    {
      "sku": "SKU456",
      "code": "534758761000"
    },
    {
      "sku": "SKU789",
      "code": "534758761777"
    }
  ],
  "date": "2023-08-01T12:08:44.342Z",
  "number": "424fdsf234",
  "posting_number": "33920146-0252-1",
  "price": 234.34,
  "price_currency": "RUB",
  "url": "https://cdn.ozone.ru/s3/ozon-disk-api/techdoc/seller-api/earsivfatura_1690960445.pdf"
}
```

## 返回响应 (Responses)

### HTTP 200 - Счёт-фактура создана или изменена

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v2InvoiceCreateOrUpdateV2Response"
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
curl -X POST "https://api-seller.ozon.ru/v2/invoice/create-or-update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/invoice/create-or-update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/invoice/create-or-update", {
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
