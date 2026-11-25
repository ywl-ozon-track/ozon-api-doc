---
title: "Обновить первую милю"
description: "Обновить первую милю"
---

# Обновить первую милю

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/first-mile/update`

## Обзор метода

- **Категория**：📌 FBSWarehouseSetup
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "courier_return_warehouse_info": {
    "comment": "Комментарий",
    "courier_return_warehouse_id": 0,
    "is_courier_return_warehouse_match": false
  },
  "first_mile_type": "DROP_OFF",
  "drop_off_point_id": 0,
  "cut_in_time": 0,
  "timeslot_id": 0,
  "return_point_id": 0,
  "warehouse_id": 0
}
```

## Ответы сервера

### HTTP 200 - Первая миля обновлена

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1UpdateWarehouseFBSFirstMileResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/first-mile/update", {
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
