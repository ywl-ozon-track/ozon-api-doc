---
title: "Установка грузомест"
description: "Установка грузомест"
---

# Установка грузомест

<Badge type="tip" text="POST" /> `/v1/cargoes/create`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/cargoes/create`
- **详细说明**：

> Используйте метод, чтобы передать грузоместа и товарный состав в заявку на поставку.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "cargoes": [
    {
      "key": "box-001",
      "value": {
        "items": [
          {
            "barcode": "4601234567890",
            "expires_at": "2026-06-30T23:59:59Z",
            "offer_id": "12345678",
            "quant": 1,
            "quantity": 5
          },
          {
            "barcode": "4609876543210",
            "expires_at": "2026-12-31T23:59:59Z",
            "offer_id": "87654321",
            "quant": 2,
            "quantity": 3
          }
        ],
        "type": "BOX"
      }
    }
  ],
  "delete_current_version": true,
  "supply_id": 123456
}
```

## 返回响应 (Responses)

### HTTP 200 - Грузоместа установлены

```json
{
  "operation_id": "op-1689012345",
  "errors": {
    "error_reasons": [
      "INVALID_STATE"
    ],
    "items_validation": [
      {
        "barcode": "4601234567890",
        "cargo_key": "box-001",
        "quant": 2,
        "type": "SUPPLY_ITEM_NOT_FOUND"
      }
    ]
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/create", {
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
