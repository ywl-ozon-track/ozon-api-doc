---
title: "Получить информацию о выполнении плана отгрузок"
description: "Получить информацию о выполнении плана отгрузок"
---

# Получить информацию о выполнении плана отгрузок

<Badge type="tip" text="POST" /> `/v1/supply-order/shipment-plan-compliance/get`

## Обзор метода

- **Категория**：📌 BetaMethod
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/supply-order/shipment-plan-compliance/get`
- **Описание**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2383-Novyi-metod-dlia-polucheniia-informatsii-o-sobliudenii-plana-otgruzok/) в сообществе разработчиков Ozon for dev.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Информация о выполнении плана отгрузок

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/supply_order.v1.SupplyOrderShipmentPlanComplianceGetResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/supply-order/shipment-plan-compliance/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/supply-order/shipment-plan-compliance/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/supply-order/shipment-plan-compliance/get", {
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
