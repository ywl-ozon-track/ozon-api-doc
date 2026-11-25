---
title: "Создать сертификат качества"
description: "Создать сертификат качества"
---

# Создать сертификат качества

<Badge type="tip" text="POST" /> `/v2/product/certificate/create`

## 接口概览

- **所属模块**：📜 Сертификаты качества
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/product/certificate/create`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "params": {
    "accordance_type": "SAFETY_DATA_SHEET",
    "certificate_country": "RU",
    "certificate_type": "SAFETY_DATA_SHEET",
    "expired_date": {
      "date": {
        "day": 1,
        "month": 1,
        "year": 2027
      },
      "infinite": false
    },
    "files": [
      {
        "file_content": "string",
        "name": "file.pdf"
      }
    ],
    "issue_date": "2019-08-24T14:15:22Z",
    "link_to_registry": "string",
    "name": "string",
    "number": "string",
    "product_type": "UNKNOWN",
    "skus": [
      "string"
    ]
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Сертификат создан

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/certification.v2.ProductCertificateCreateResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/product/certificate/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/certificate/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/certificate/create", {
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
