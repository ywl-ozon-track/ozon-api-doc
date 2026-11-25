---
title: "Получить зоны размещения товаров по SKU перед поставкой"
description: "Получить зоны размещения товаров по SKU перед поставкой"
---

# Получить зоны размещения товаров по SKU перед поставкой

<Badge type="tip" text="POST" /> `/v1/product/placement-zone/info`

## Обзор метода

- **Категория**：📂 Атрибуты и характеристики Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/placement-zone/info`
- **Описание**：

> Вы можете отправить не больше 10 запросов в секунду.
> 
> [Подробнее о зонах размещения в Базе знаний продавца](https://seller-edu.ozon.ru/libra/fbo/gruzomesta-i-podgotovka-k-otgruzke/k-kakoi-zone-otnositsya-tovar)
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GetProductPlacementZoneInfoRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о зонах размещения

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GetProductPlacementZoneInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/placement-zone/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/placement-zone/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/placement-zone/info", {
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
