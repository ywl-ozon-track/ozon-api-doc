---
title: "Обновить пропуск для возврата"
description: "Обновить пропуск для возврата"
---

# Обновить пропуск для возврата

<Badge type="tip" text="POST" /> `/v1/return/pass/update`

## Обзор метода

- **Категория**：🎫 Пропуски на склад
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/return/pass/update`

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "arrival_passes": [
    {
      "arrival_pass_id": 6000123456,
      "arrival_time": "2026-03-17T14:30:00Z",
      "driver_name": "Иванов Иван Иванович",
      "driver_phone": "+79991234567",
      "vehicle_license_plate": "А123БВ777",
      "vehicle_model": "ГАЗель NEXT"
    }
  ]
}
```

## Ответы сервера

### HTTP 200 - Пропуск обновлён

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
curl -X POST "https://api-seller.ozon.ru/v1/return/pass/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/return/pass/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/return/pass/update", {
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
