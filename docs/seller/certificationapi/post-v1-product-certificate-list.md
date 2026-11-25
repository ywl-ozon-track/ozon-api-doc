---
title: "获取认证证书列表"
description: "Список сертификатов"
---

# 获取认证证书列表

<Badge type="tip" text="POST" /> `/v1/product/certificate/list`

## 接口概览

- **所属模块**：📜 商品质量合格证
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/certificate/list`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "offer_id": "OFFER-2026-001",
  "status": "approved",
  "type": "certificate_of_conformity,declaration",
  "page": 1,
  "page_size": 50
}
```

## 返回响应

### HTTP 200 - Список сертификатов

```json
{
  "result": {
    "certificates": [
      {
        "certificate_id": 1120593,
        "certificate_name": "Test comment DS. Post-script prod2stg",
        "certificate_number": "ЕАЭС RU С-CN.НВ46.В.00413/21",
        "type_code": "certificate_of_conformity",
        "status_code": "approved",
        "accordance_type_code": "technical_regulations_cu",
        "rejection_reason_code": "",
        "issue_date": "2021-08-12T03:00:00Z",
        "expire_date": "2024-08-11T03:00:00Z",
        "products_count": 0,
        "verification_comment": ""
      },
      {
        "certificate_id": 624047,
        "certificate_name": "Test comment DS. Post-script prod2stg",
        "certificate_number": "ЕАЭС N RU Д-CN.НВ25.В.11796/20",
        "type_code": "declaration",
        "status_code": "approved",
        "accordance_type_code": "technical_regulations_cu",
        "rejection_reason_code": "",
        "issue_date": "2020-07-03T03:00:00Z",
        "expire_date": "2023-07-02T03:00:00Z",
        "products_count": 1,
        "verification_comment": ""
      }
    ],
    "page_count": 7
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/list", {
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
