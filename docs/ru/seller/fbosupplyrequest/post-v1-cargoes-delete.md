---
title: "Удалить грузоместо в заявке на поставку"
description: "Удалить грузоместо в заявке на поставку"
---

# Удалить грузоместо в заявке на поставку

<Badge type="tip" text="POST" /> `/v1/cargoes/delete`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cargoes/delete`
- **Описание**：

> Метод для удаления грузомест в заявке на поставку.
> 
> Чтобы проверить статус удаления, используйте метод [/v1/cargoes/delete/status](#operation/CargoesAPI_CargoesDeleteStatus).
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
  "cargo_ids": [
    "box-001"
  ],
  "supply_id": 123456
}
```

## Ответы сервера

### HTTP 200 - Грузоместо удалено

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CargoesDeleteResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/delete", {
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
