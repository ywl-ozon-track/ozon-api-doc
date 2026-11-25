---
title: "Создать склад"
description: "Создать склад"
---

# Создать склад

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/create`

## Обзор метода

- **Категория**：📌 FBSWarehouseSetup
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/fbs/create`
- **Описание**：

> Если создаёте склад с доставкой в drop-off пункт, используйте метод [/v1/warehouse/fbs/create/drop-off/list](#operation/WarehouseAPI_ListDropOffPointsForCreateFBSWarehouse), чтобы получить точки.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "address_coordinates": {
    "latitude": 55.69626,
    "longitude": 37.42686
  },
  "courier_return_warehouse_info": {
    "comment": "Комментарий",
    "courier_return_warehouse_id": 0,
    "is_courier_return_warehouse_match": false
  },
  "first_mile_type": "DROP_OFF",
  "drop_off_point_id": 1020002487458000,
  "cut_in_time": 0,
  "timeslot_id": 0,
  "return_point_id": 0,
  "is_kgt": false,
  "name": "Склад",
  "options": {
    "comment": "Комментарий",
    "courier_phones": [
      "+7(999)999-99-99"
    ],
    "is_auto_assembly": true,
    "is_waybill_enabled": true
  },
  "phone": "+7(999)999-99-99",
  "working_days": [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY"
  ]
}
```

## Ответы сервера

### HTTP 200 - Склад создан

```json
{
  "operation_id": "a0cfefee-9a5a-4580-bc32-2f9a6c7973e3"
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/create", {
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
