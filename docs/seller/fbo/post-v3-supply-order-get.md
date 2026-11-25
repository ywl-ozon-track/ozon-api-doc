---
title: "查询заявке на поставку详情"
description: "Информация о заявке на поставку"
---

# 查询заявке на поставку详情

<Badge type="tip" text="POST" /> `/v3/supply-order/get`

## 接口概览

- **所属模块**：📌 FBO
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/supply-order/get`

::: details 查看官方详细说明 (Официальное описание)
> Учитываются заявки с поставкой на конкретный склад и через [виртуальный распределительный центр (вРЦ)](https://seller-edu.ozon.ru/fbo/scheme-of-work/about#чем-отличаются-процессы-при-заявках-через-врц-и-напрямую-на-склад).
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "order_ids": [
    123
  ]
}
```

## 返回响应

### HTTP 200 - Информация о заявке

```json
{
  "orders": [
    {
      "order_id": 84882285,
      "order_number": "2111140905880",
      "created_date": "2026-01-23T00:00:00Z",
      "state": "READY_TO_SUPPLY",
      "state_updated_date": "2026-02-03T11:32:41.613489Z",
      "data_filling_deadline_utc": "2026-02-14T23:59:59Z",
      "dropoff_warehouse": {
        "warehouse_id": 23843917228000,
        "address": "г. Москва, ул. Летняя, д. 12, стр. 5",
        "name": "Центральный логистический комплекс"
      },
      "order_tags": {
        "is_econom": false,
        "is_virtual": false,
        "original_supply_id": 2111140905880,
        "is_super_fbo": false,
        "product_super_fbo": false,
        "is_quant": false
      },
      "timeslot": {
        "timeslot": {
          "from": "2026-02-15T09:00:00Z",
          "to": "2026-02-15T10:00:00Z"
        },
        "timezone_info": {
          "offset": "+03:00",
          "iana_name": "Europe/Moscow"
        }
      },
      "supplies": [
        {
          "supply_id": 2111140905880,
          "storage_warehouse": {
            "warehouse_id": 23843917228000,
            "arrival_date": "2026-02-15T00:00:00Z",
            "address": "г. Москва, ул. Летняя, д. 12, стр. 5",
            "name": "Центральный логистический комплекс"
          },
          "supply_tags": {
            "is_ettn_required": false,
            "is_evsd_required": false,
            "is_jewelry": false,
            "is_marking_possible": true,
            "is_marking_required": false,
            "is_utd": false,
            "freeze_stock_for_marking": false
          },
          "is_crossdock": false,
          "bundle_id": "019c5755-8768-7a00-9582-7c1f2c81681f",
          "state": "READY_TO_SUPPLY"
        }
      ]
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v3/supply-order/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/supply-order/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/supply-order/get", {
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
