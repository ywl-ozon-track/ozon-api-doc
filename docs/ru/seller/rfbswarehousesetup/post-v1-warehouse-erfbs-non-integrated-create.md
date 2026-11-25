---
title: "Создать склад с методом доставки «Вы или сторонняя служба»"
description: "Создать склад с методом доставки «Вы или сторонняя служба»"
---

# Создать склад с методом доставки «Вы или сторонняя служба»

<Badge type="tip" text="POST" /> `/v1/warehouse/erfbs/non-integrated/create`

## Обзор метода

- **Категория**：📌 rFBSWarehouseSetup
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create`
- **Описание**：

> [Подробнее о схеме realFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express)
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
  "$ref": "#/components/schemas/v1WarehouseERFBSNonIntegratedCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Склад создан

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1WarehouseERFBSNonIntegratedCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/erfbs/non-integrated/create", {
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
