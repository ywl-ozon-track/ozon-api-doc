---
title: "Оборачиваемость товара"
description: "Оборачиваемость товара"
---

# Оборачиваемость товара

<Badge type="tip" text="POST" /> `/v1/analytics/turnover/stocks`

## Обзор метода

- **Категория**：📈 Аналитика продаж
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/analytics/turnover/stocks`
- **Описание**：

> Используйте метод, чтобы узнать оборачиваемость товара и количество дней, на которое хватит текущего остатка. 
> Метод соответствует разделу [**FBO -> Управление остатками**](https://seller.ozon.ru/app/supply/stocks-management) в личном кабинете.
> Вы можете делать не больше 1 запроса в минуту по одному кабинету `Client-Id`.
>     
> Если вы запрашиваете список товаров по `sku`, параметры `limit` и `offset` необязательны.
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
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация об оборачиваемости

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1AnalyticsTurnoverStocksResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/turnover/stocks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/turnover/stocks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/turnover/stocks", {
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
