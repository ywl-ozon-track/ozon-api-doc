---
title: "Список складов"
description: "Список складов"
---

# Список складов

<Badge type="tip" text="POST" /> `/v1/warehouse/list`

## Обзор метода

- **Категория**：🏭 Работа со складами FBS и rFBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/list`
- **Описание**：

> <aside class="warning">
> Метод устаревает и будет отключён 7 апреля 2026 года. Переключитесь на <a href="#operation/WarehouseListV2">/v2/warehouse/list</a>.
> </aside>
> 
> Возвращает список складов FBS и rFBS. Чтобы получить список складов FBO, используйте метод [/v1/cluster/list](#operation/SupplyDraftAPI_DraftClusterList).
> 
> Метод можно использовать 1 раз в минуту.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

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

## Ответы сервера

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

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
