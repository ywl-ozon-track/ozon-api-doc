---
title: "Список типов соответствия требованиям (версия 2)"
description: "Список типов соответствия требованиям (версия 2)"
---

# Список типов соответствия требованиям (версия 2)

<Badge type="info" text="GET" /> `/v2/product/certificate/accordance-types/list`

## 接口概览

- **所属模块**：📜 Quality Certificates
- **请求方法**：`GET`
- **接口地址**：`https://api-seller.ozon.ru/v2/product/certificate/accordance-types/list`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 返回响应 (Responses)

### HTTP 200 - Список типов соответствия требованиям

```json
{
  "result": {
    "base": [
      {
        "title": "ГОСТ",
        "code": "gost"
      },
      {
        "title": "Технический регламент РФ",
        "code": "technical_regulations_rf"
      },
      {
        "title": "Технический регламент ТС",
        "code": "technical_regulations_cu"
      }
    ],
    "hazard": [
      {
        "title": "ПБ химической продукции",
        "code": "chemical_products"
      },
      {
        "title": "Safety Data Sheet (SDS)",
        "code": "safety_data_sheet"
      },
      {
        "title": "Отказное письмо",
        "code": "rejection_letter"
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
curl -X GET "https://api-seller.ozon.ru/v2/product/certificate/accordance-types/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/certificate/accordance-types/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/certificate/accordance-types/list", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
