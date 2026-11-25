---
title: "Создать задание на выгрузку этикеток"
description: "Создать задание на выгрузку этикеток"
---

# Создать задание на выгрузку этикеток

<Badge type="tip" text="POST" /> `/v1/posting/fbs/package-label/create`

## Обзор метода

- **Категория**：📌 FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/posting/fbs/package-label/create`
- **Описание**：

> <aside class="warning">
> C 5 октября 2026 года метод возвращает новые этикетки для отправлений FBS.<br>
> <a href="https://seller-edu.ozon.ru/libra/fbs/logistics-settings/metody#тестовыи-формат-этикетки">Подробнее о новых этикетках в Базе знаний продавца</a>
> 
> С 2 ноября 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFbsPackageLabelCreate">/v3/posting/fbs/package-label/create</a>.
> </aside>
> 
> Метод для создания задания на асинхронное формирование этикеток.
> 
> Для получения этикеток, созданных в результате вызова метода, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch).
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
  "posting_number": [
    "228245774-2229-1"
  ]
}
```

## Ответы сервера

### HTTP 200 - Идентификатор задания на формирование этикеток

```json
{
  "result": {
    "task_id": 5819327210249
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/package-label/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/package-label/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/package-label/create", {
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
