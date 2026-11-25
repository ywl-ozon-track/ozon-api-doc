---
title: "获取 Ozon 平台当前生效或即将开始的官方促销活动列表"
description: "获取 Ozon 平台当前生效或即将开始的官方促销活动列表"
---

# 获取 Ozon 平台当前生效或即将开始的官方促销活动列表

<Badge type="info" text="GET" /> `/v1/actions`

## 接口概览

- **所属模块**：🎁 官方促销与营销活动
- **请求方法**：`GET`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions`
- **详细说明**：

> Метод для получения списка акций Ozon, в которых можно участвовать.
> 
> [Подробнее об акциях Ozon](https://seller-edu.ozon.ru/ceny-i-akcii/akcii-skidki-i-kupony/promo)
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 返回响应 (Responses)

### HTTP 200 - Список акций

```json
{
  "result": [
    {
      "id": 71342,
      "title": "test voucher #2",
      "date_start": "2021-11-22T09:46:38Z",
      "date_end": "2021-11-30T20:59:59Z",
      "auto_add_dates": [
        "2025-12-30T20:59:59Z"
      ],
      "potential_products_count": 0,
      "is_participating": true,
      "participating_products_count": 5,
      "description": "",
      "action_type": "DISCOUNT",
      "banned_products_count": 0,
      "with_targeting": false,
      "discount_type": "UNKNOWN",
      "discount_value": 0,
      "order_amount": 0,
      "freeze_date": "",
      "is_voucher_action": true
    }
  ]
}
```

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
curl -X GET "https://api-seller.ozon.ru/v1/actions" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions", {
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
