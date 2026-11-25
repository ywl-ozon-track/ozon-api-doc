---
title: "Суммы транзакций"
description: "Суммы транзакций"
---

# Суммы транзакций

<Badge type="tip" text="POST" /> `/v3/finance/transaction/totals`

## Обзор метода

- **Категория**：📊 Финансы и отчёты
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v3/finance/transaction/totals`
- **Описание**：

> 
> <aside class="warning">
> Метод устаревает и будет отключён 8 сентября 2026 года. Переключитесь на <a href="#operation/GetFinanceAccrualPostings">/v1/finance/accrual/postings</a>, <a href="#operation/GetFinanceAccrualTypes">/v1/finance/accrual/types</a>, <a href="#operation/GetFinanceAccrualByDay">/v1/finance/accrual/by-day</a>.
> <br><br>
> Данные могут не соответствовать информации в личном кабинете.
> </aside>
> 
> Возвращает итоговые суммы по транзакциям за указанный период. 
> 
> Если вы неправильно заполните номера отправлений, в ответе вернутся нулевые значения.
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
  "date": {
    "from": "2021-11-01T00:00:00.000Z",
    "to": "2021-11-02T00:00:00.000Z"
  },
  "posting_number": "",
  "transaction_type": "all"
}
```

## Ответы сервера

### HTTP 200 - Суммы транзакций

```json
{
  "result": {
    "accruals_for_sale": 96647.58,
    "sale_commission": -11456.65,
    "processing_and_delivery": -24405.68,
    "refunds_and_cancellations": -330,
    "services_amount": -1307.57,
    "compensation_amount": 0,
    "money_transfer": 0,
    "others_amount": 113.05
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v3/finance/transaction/totals" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/finance/transaction/totals"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/finance/transaction/totals", {
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
