---
title: "Позаказный отчёт о реализации товаров"
description: "Позаказный отчёт о реализации товаров"
---

# Позаказный отчёт о реализации товаров

<Badge type="tip" text="POST" /> `/v1/finance/realization/posting`

## Обзор метода

- **Категория**：📊 Финансы и отчёты
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/finance/realization/posting`
- **Описание**：

> <aside class="warning">
> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> </aside>
> 
> Отчёт о реализации доставленных и возвращённых товаров с детализацией по каждому заказу. Отмены и невыкупы не включаются. Отчёт доступен с настоящего времени по август 2023 года включительно.
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
  "month": 2,
  "year": 2025
}
```

## Ответы сервера

### HTTP 200 - Позаказный отчёт о реализации

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1GetRealizationReportPostingResponse"
}
```
:::

### HTTP 400 - Неверный параметр

```json
{
  "message": "The requested report is too large. Use /v1/report/realization/posting/create."
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/finance/realization/posting" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/realization/posting"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/realization/posting", {
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
