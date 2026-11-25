---
title: "Отчёт по вывозу и утилизации с поставки FBO"
description: "Отчёт по вывозу и утилизации с поставки FBO"
---

# Отчёт по вывозу и утилизации с поставки FBO

<Badge type="tip" text="POST" /> `/v1/removal/from-supply/list`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/removal/from-supply/list`
- **Описание**：

> Метод соответствует разделу [**FBO → Вывоз и утилизация**](https://seller.ozon.ru/app/fbo-operations/returns) в личном кабинете.
> 
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1608-Novye-metody-po-vyvozu-i-utilizatsii) в сообществе разработчиков Ozon for dev.
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
  "date_from": "2025-03-01",
  "date_to": "2025-03-30",
  "last_id": "",
  "limit": 500
}
```

## Ответы сервера

### HTTP 200 - Отчёт по вывозу и утилизации с поставки FBO

```json
{
  "returns_summary_report_rows": [
    {
      "name": "Шурупы",
      "offer_id": "Шуруп-0001",
      "sku": "12314324",
      "barcode": "",
      "quantity_for_return": 1,
      "quant_count": 0,
      "box_id": "202501272",
      "return_id": "934457",
      "stock_type": "Излишек",
      "return_created_at": "2025-03-13T06:49:37.591Z",
      "is_auto_return": false,
      "clearing_warehouse_name": "ХОРУГВИНО_РФЦ",
      "return_state": "Отклонено складом",
      "delivery_type": "Вывоз с ПВЗ/СЦ",
      "preliminary_delivery_price": 15,
      "box_length": 0.1,
      "box_width": 0.1,
      "box_height": 0.1,
      "box_volume": 34,
      "box_weight": 0.01,
      "box_state": "Доступно к вывозу",
      "destination_warehouse_name": "РАЗДОРЫ_4",
      "destination_warehouse_address": "Россия, 143082, обл. Московская, р-н Одинцовский, д. Раздоры, Россия, Московская область, Красногорск, улица Липовой Рощи, 2к1",
      "delivery_date": "2025-03-13T06:49:37.591Z",
      "given_out_date": "2025-03-13T06:49:37.591Z",
      "utilization_date": "2025-03-13T06:49:37.591Z"
    }
  ],
  "last_id": "whcReturnId:934457_boxId:202501272_itemIndex:0"
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
curl -X POST "https://api-seller.ozon.ru/v1/removal/from-supply/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/removal/from-supply/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/removal/from-supply/list", {
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
