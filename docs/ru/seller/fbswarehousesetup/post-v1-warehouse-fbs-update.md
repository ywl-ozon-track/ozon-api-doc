---
title: "Обновить склад"
description: "Обновить склад"
---

# Обновить склад

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/update`

## Обзор метода

- **Категория**：📌 FBSWarehouseSetup
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/fbs/update`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "address_coordinates": {
    "latitude": 55.69626,
    "longitude": 37.42686
  },
  "name": "Склад Балашиха",
  "options": {
    "comment": "Заезд на склад через главные ворота",
    "courier_phones": [
      "+7(999)999-99-99"
    ],
    "is_auto_assembly": true,
    "is_waybill_enabled": true
  },
  "phone": "+7(XXX)XXX-XX-XX",
  "warehouse_id": 1020002929332000,
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

### HTTP 200 - Склад обновлён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1UpdateWarehouseFBSResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/update", {
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
