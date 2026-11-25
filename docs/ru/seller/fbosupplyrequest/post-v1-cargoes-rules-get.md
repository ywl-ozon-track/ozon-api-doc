---
title: "Чек-лист по установке грузомест FBO"
description: "Чек-лист по установке грузомест FBO"
---

# Чек-лист по установке грузомест FBO

<Badge type="tip" text="POST" /> `/v1/cargoes/rules/get`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cargoes/rules/get`
- **Описание**：

> Метод для получения чек-листа с правилами по установке грузомест.

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "supply_ids": [
    2000007863,
    2000007864,
    2000007865
  ]
}
```

## Ответы сервера

### HTTP 200 - Чек-лист по установке грузомест

```json
{
  "supply_check_lists": [
    {
      "supply_id": 2000007863,
      "cargoes_presents_rule": {
        "count": 4,
        "satisfied": true,
        "cargo_count_per_type": [
          {
            "type": "BOX",
            "count": 3
          },
          {
            "type": "PALLET",
            "count": 1
          }
        ]
      },
      "edit_deadline_expire_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true
      },
      "expire_dates_presented_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true,
        "count_sku_with_expiration": 12,
        "count_sku_with_expiration_filled": 12
      },
      "is_valid_distribution_rule": {
        "is_applicable": true,
        "satisfied": true,
        "count_distributed_sku": 24,
        "count_sku_total": 24,
        "percents_int": 100
      },
      "package_units_with_distribution_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true,
        "count_all": 4,
        "count_with_distribution": 4
      },
      "placement_zones_rule": {
        "is_applicable": true,
        "satisfied": true,
        "count_cargoes_all": 4,
        "count_cargoes_with_mono_placement_zone": 4
      }
    },
    {
      "supply_id": 2000007864,
      "cargoes_presents_rule": {
        "count": 2,
        "satisfied": true,
        "cargo_count_per_type": [
          {
            "type": "BOX",
            "count": 2
          }
        ]
      },
      "edit_deadline_expire_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true
      },
      "expire_dates_presented_rule": {
        "is_applicable": false,
        "is_required": false,
        "satisfied": true,
        "count_sku_with_expiration": 0,
        "count_sku_with_expiration_filled": 0
      },
      "is_valid_distribution_rule": {
        "is_applicable": true,
        "satisfied": true,
        "count_distributed_sku": 8,
        "count_sku_total": 8,
        "percents_int": 100
      },
      "package_units_with_distribution_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true,
        "count_all": 2,
        "count_with_distribution": 2
      },
      "placement_zones_rule": {
        "is_applicable": true,
        "satisfied": true,
        "count_cargoes_all": 2,
        "count_cargoes_with_mono_placement_zone": 2
      }
    },
    {
      "supply_id": 2000007865,
      "cargoes_presents_rule": {
        "count": 0,
        "satisfied": false,
        "cargo_count_per_type": []
      },
      "edit_deadline_expire_rule": {
        "is_applicable": true,
        "is_required": true,
        "satisfied": true
      },
      "expire_dates_presented_rule": {
        "is_applicable": false,
        "is_required": false,
        "satisfied": true,
        "count_sku_with_expiration": 0,
        "count_sku_with_expiration_filled": 0
      },
      "is_valid_distribution_rule": {
        "is_applicable": false,
        "satisfied": false,
        "count_distributed_sku": 0,
        "count_sku_total": 5,
        "percents_int": 0
      },
      "package_units_with_distribution_rule": {
        "is_applicable": false,
        "is_required": false,
        "satisfied": false,
        "count_all": 0,
        "count_with_distribution": 0
      },
      "placement_zones_rule": {
        "is_applicable": false,
        "satisfied": false,
        "count_cargoes_all": 0,
        "count_cargoes_with_mono_placement_zone": 0
      }
    }
  ]
}
```

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/rules/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/rules/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/rules/get", {
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
