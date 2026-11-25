---
title: "Создать вызов курьера на забор отгрузки pick-up"
description: "Создать вызов курьера на забор отгрузки pick-up"
---

# Создать вызов курьера на забор отгрузки pick-up

<Badge type="tip" text="POST" /> `/v1/warehouse/fbs/pickup/courier/create`

## Обзор метода

- **Категория**：📌 FBSWarehouseSetup
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/courier/create`
- **Описание**：

> Метод позволяет запланировать приезд курьера для отгрузки ему отправлений. 
> 
> [Подробнее об отгрузках курьеру на FBS в Базе знаний](https://seller-edu.ozon.ru/fbs/ozon-logistika/otgruzka-kyruery)
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1WarehouseFbsPickUpCourierCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Вызов создан

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/courier/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/courier/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbs/pickup/courier/create", {
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
