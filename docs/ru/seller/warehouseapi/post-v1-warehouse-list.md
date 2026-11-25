---
title: "Список складов"
description: "Список складов"
---

# Список складов

<Badge type="tip" text="POST" /> `/v1/warehouse/list`

## 接口概览

- **所属模块**：🏭 Работа со складами FBS и rFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/list`
- **详细说明**：

> <aside class="warning">
> Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на <a href="#operation/WarehouseListV2">/v2/warehouse/list</a>.
> </aside>
> 
> Возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList).
> 
> Метод можно использовать 1 раз в минуту.
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
  "limit": 1,
  "offset": 1,
  "with": {
    "able_to_set_price": true
  }
}
```

## 返回响应 (Responses)

### HTTP 200 - Список складов

```json
{
  "result": [
    {
      "warehouse_id": 17777777788000,
      "name": "BlueMarketplace",
      "is_rfbs": false,
      "is_able_to_set_price": false,
      "has_entrusted_acceptance": true,
      "first_mile_type": {
        "dropoff_point_id": "1121111996024111",
        "dropoff_timeslot_id": 294144,
        "first_mile_is_changing": false,
        "first_mile_type": "DropOff"
      },
      "is_kgt": false,
      "can_print_act_in_advance": false,
      "min_working_days": 5,
      "is_karantin": false,
      "has_postings_limit": false,
      "postings_limit": -1,
      "working_days": [
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "min_postings_limit": 2,
      "is_timetable_editable": false,
      "status": "created",
      "is_economy": false,
      "is_presorted": false
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/list", {
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
