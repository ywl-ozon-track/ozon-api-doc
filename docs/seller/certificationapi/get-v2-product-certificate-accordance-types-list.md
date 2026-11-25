---
title: "获取типов соответствия требованиям (версия 2)列表"
description: "Список типов соответствия требованиям (версия 2)"
---

# 获取типов соответствия требованиям (версия 2)列表

<Badge type="info" text="GET" /> `/v2/product/certificate/accordance-types/list`

## 接口概览

- **所属模块**：📜 商品质量合格证
- **请求方法**：`GET`
- **接口地址**：`https://api-seller.ozon.ru/v2/product/certificate/accordance-types/list`

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

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
