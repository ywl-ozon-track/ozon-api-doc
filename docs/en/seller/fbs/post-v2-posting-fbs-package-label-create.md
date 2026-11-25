---
title: "PostingAPI CreateLabelBatchV2"
description: "Создать задание на формирование этикеток"
---

# PostingAPI CreateLabelBatchV2

<Badge type="tip" text="POST" /> `/v2/posting/fbs/package-label/create`

## Endpoint Overview

- **Category**：📌 FBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v2/posting/fbs/package-label/create`

::: details View Official Description (Russian)
> <aside class="warning">
> C 5 октября 2026 года метод возвращает новые этикетки для отправлений FBS.<br>
> <a href="https://seller-edu.ozon.ru/libra/fbs/logistics-settings/metody#тестовыи-формат-этикетки">Подробнее о новых этикетках в Базе знаний продавца</a>
> 
> С 2 ноября 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFbsPackageLabelCreate">/v3/posting/fbs/package-label/create</a>.
> 
> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href="https://seller-edu.ozon.ru/rfbs/scheme-of-work">Базе знаний продавца</a>.
> </aside>
> 
> Метод для создания задания на асинхронное формирование этикеток для отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`.
> Метод может вернуть несколько заданий: на формирование маленькой и большой этикетки.
> 
> Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа.
> 
> Чтобы получить созданные этикетки, используйте [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch).
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

```json
{
  "posting_number": [
    "4708216109137",
    "3697105098026"
  ]
}
```

## Responses

### HTTP 200 - Задания на формирование этикеток

```json
{
  "result": {
    "tasks": [
      {
        "task_id": 5819327210248,
        "task_type": "big_label"
      },
      {
        "task_id": 5819327210249,
        "task_type": "small_label"
      }
    ]
  }
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/posting/fbs/package-label/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/posting/fbs/package-label/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/posting/fbs/package-label/create", {
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
