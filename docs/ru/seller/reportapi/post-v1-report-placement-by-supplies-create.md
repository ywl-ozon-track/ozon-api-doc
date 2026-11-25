---
title: "Получить отчёт о стоимости размещения по поставкам"
description: "Получить отчёт о стоимости размещения по поставкам"
---

# Получить отчёт о стоимости размещения по поставкам

<Badge type="tip" text="POST" /> `/v1/report/placement/by-supplies/create`

## Обзор метода

- **Категория**：📌 ReportAPI
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/report/placement/by-supplies/create`
- **Описание**：

> Соответствует разделу **FBO → Стоимость размещения** в личном кабинете.
> 
> Отчёт можно получить не больше 5 раз в день.
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
  "$ref": "#/components/schemas/v1CreatePlacementBySuppliesReportRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Отчёт о стоимости размещения

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1CreatePlacementBySuppliesReportResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/report/placement/by-supplies/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/placement/by-supplies/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/placement/by-supplies/create", {
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
