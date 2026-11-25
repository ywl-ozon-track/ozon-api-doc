---
title: "Получить информацию о локальности продаж по кластерам"
description: "Получить информацию о локальности продаж по кластерам"
---

# Получить информацию о локальности продаж по кластерам

<Badge type="tip" text="POST" /> `/v1/analytics/local-sale/clusters-items/info`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/analytics/local-sale/clusters-items/info`
- **Описание**：

> Метод соответствует разделу [**Аналитика → Планирование поставок → Локальность продаж**](https://seller.ozon.ru/app/analytics/sales-geography/local-packaging).
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2335-Novye-beta-metody-dlia-polucheniia-lokalnosti-prodazh/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/analytics.v1.AnalyticsLocalSaleClustersItemsInfoRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о локальности продаж по кластерам

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/analytics.v1.AnalyticsLocalSaleClustersItemsInfoResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/local-sale/clusters-items/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/local-sale/clusters-items/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/local-sale/clusters-items/info", {
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
