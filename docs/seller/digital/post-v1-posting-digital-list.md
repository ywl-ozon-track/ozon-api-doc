---
title: "获取发货包裹"
description: "获取发货包裹"
---

# 获取发货包裹

<Badge type="tip" text="POST" /> `/v1/posting/digital/list`

## 接口概览

- **所属模块**：📌 Digital
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/digital/list`
- **详细说明**：

> <aside class="warning">
> С 31 августа 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingDigitalList">/v2/posting/digital/list</a>.
> </aside>
> Возвращает список отправлений, по которым нужно загрузить коды цифровых товаров. Метод доступен только продавцам, работающим с цифровыми товарами. 
> 
> Чтобы получить список отправлений в любом статусе, воспользуйтесь методом [/v2/posting/fbo/list](#operation/PostingAPI_GetFboPostingList).
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "dir": "ASC",
  "filter": {
    "since": "2021-09-01T00:00:00.000Z",
    "posting_number": [
      "string"
    ],
    "to": "2021-11-17T10:44:12.828Z"
  },
  "limit": 5,
  "offset": 0,
  "with": {
    "analytics_data": true,
    "financial_data": true,
    "legal_info": false
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список отправлений

```json
{
  "result": [
    {
      "order_id": 354680487,
      "order_number": "16965409-0014",
      "posting_number": "16965409-0014-1",
      "status": "awaiting_packaging",
      "cancel_reason_id": 0,
      "created_at": "2021-09-01T00:23:45.607000Z",
      "in_process_at": "2021-09-01T00:25:30.120000Z",
      "waiting_deadline_for_digital_code": "2025-06-16T10:12:00.664Z",
      "legal_info": {
        "company_name": "string",
        "inn": "string",
        "kpp": "string"
      },
      "products": [
        {
          "sku": 160249683,
          "name": "Так говорил Омар Хайям. Жизнеописание. Афоризмы и рубайят. Классика в словах и картинках",
          "offer_id": "978-5-906864-56-7",
          "price": "81.00",
          "required_qty_for_digital_code": 3,
          "currency_code": "RUB"
        }
      ],
      "analytics_data": {
        "city": "",
        "delivery_type": "PVZ",
        "is_premium": false,
        "payment_type_group_name": "Карты оплаты",
        "warehouse_id": 17717042026000,
        "warehouse_name": "РОСТОВ-НА-ДОНУ_РФЦ",
        "is_legal": false
      },
      "financial_data": {
        "products": [
          {
            "commission_amount": 12.15,
            "commission_percent": 15,
            "payout": 68.85,
            "product_id": 160249683,
            "currency_code": "RUB",
            "old_price": 115,
            "price": 81,
            "total_discount_value": 34,
            "total_discount_percent": 29.57,
            "actions": [
              "Системная виртуальная скидка селлера"
            ]
          }
        ]
      },
      "additional_data": []
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/digital/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/digital/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/digital/list", {
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
