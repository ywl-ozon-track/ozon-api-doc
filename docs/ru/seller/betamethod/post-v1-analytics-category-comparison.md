---
title: "Получить информацию о сравнении категорий"
description: "Получить информацию о сравнении категорий"
---

# Получить информацию о сравнении категорий

<Badge type="tip" text="POST" /> `/v1/analytics/category/comparison`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/analytics/category/comparison`
- **Описание**：

> Соответствует разделу [**Аналитика → Категории**](https://seller.ozon.ru/app/analytics/what-to-sell/categories-comparison) в личном кабинете.
> 
> Метод доступен продавцам с подпиской [Premium Pro](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-premium-pro).
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2347-Novyi-metod-dlia-polucheniia-otcheta-Sravnenie-kategorii/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/analytics.v1.AnalyticsCategoryComparisonRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о сравнении категорий

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/analytics.v1.AnalyticsCategoryComparisonResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/category/comparison" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/category/comparison"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/category/comparison", {
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
