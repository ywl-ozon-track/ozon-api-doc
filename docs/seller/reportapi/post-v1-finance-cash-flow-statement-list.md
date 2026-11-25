---
title: "Финансовый отчёт"
description: "Финансовый отчёт"
---

# Финансовый отчёт

<Badge type="tip" text="POST" /> `/v1/finance/cash-flow-statement/list`

## 接口概览

- **所属模块**：📌 ReportAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/finance/cash-flow-statement/list`
- **详细说明**：

> Метод для получения финансового отчёта за периоды с 01 по 15 и с 16 по 31. 
> Запросить отчёт за отдельные дни не получится. 
> Соответствует разделу **Финансы → Баланс → Доходы и расходы** в личном кабинете.
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
  "date": {
    "from": "2022-01-01T00:00:00.000Z",
    "to": "2022-12-31T00:00:00.000Z"
  },
  "with_details": true,
  "page": 1,
  "page_size": 1
}
```

## 返回响应 (Responses)

### HTTP 200 - Финансовый отчёт

```json
{
  "result": {
    "cash_flows": [
      {
        "commission_amount": 1437,
        "currency_code": "string",
        "item_delivery_and_return_amount": 1991,
        "orders_amount": 1000,
        "period": {
          "begin": "2023-04-03T09:12:10.239Z",
          "end": "2023-04-03T09:12:10.239Z",
          "id": 11567022278500
        },
        "returns_amount": -3000,
        "services_amount": 8471.28
      }
    ],
    "details": {
      "period": {
        "begin": "2023-04-03T09:12:10.239Z",
        "end": "2023-04-03T09:12:10.239Z",
        "id": 11567022278500
      },
      "payments": [
        {
          "payment": 0,
          "currency_code": "string"
        }
      ],
      "begin_balance_amount": 0,
      "delivery": {
        "total": 0,
        "amount": 0,
        "delivery_services": {
          "total": 0,
          "items": [
            {
              "name": "string",
              "price": 0
            }
          ]
        }
      },
      "return": {
        "total": 0,
        "amount": 0,
        "return_services": {
          "total": 0,
          "items": [
            {
              "name": "string",
              "price": 0
            }
          ]
        }
      },
      "loan": 0,
      "invoice_transfer": 0,
      "rfbs": {
        "total": 0,
        "transfer_delivery": 0,
        "transfer_delivery_return": 0,
        "compensation_delivery_return": 0,
        "partial_compensation": 0,
        "partial_compensation_return": 0
      },
      "services": {
        "total": 0,
        "items": [
          {
            "name": "string",
            "price": 0
          }
        ]
      },
      "others": {
        "total": 0,
        "items": [
          {
            "name": "string",
            "price": 0
          }
        ]
      },
      "end_balance_amount": 0
    }
  },
  "page_count": 15
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/finance/cash-flow-statement/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/cash-flow-statement/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/cash-flow-statement/list", {
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
