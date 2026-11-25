---
title: "Отчёт о взаиморасчётах"
description: "Отчёт о взаиморасчётах"
---

# Отчёт о взаиморасчётах

<Badge type="tip" text="POST" /> `/v1/finance/mutual-settlement`

## Обзор метода

- **Категория**：📊 Финансы и отчёты
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/finance/mutual-settlement`
- **Описание**：

> Используйте метод, чтобы получить отчёт о взаиморасчетах. Соответствует разделу **Финансы → Документы → Аналитические отчеты → Отчет о взаиморасчетах** в личном кабинете.

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
  "$ref": "#/components/schemas/v1CreateMutualSettlementReportRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Результат запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/commonCreateReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/mutual-settlement" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/mutual-settlement"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/mutual-settlement", {
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
