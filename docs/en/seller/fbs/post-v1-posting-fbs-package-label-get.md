---
title: "PostingAPI GetLabelBatch"
description: "Получить файл с этикетками"
---

# PostingAPI GetLabelBatch

<Badge type="tip" text="POST" /> `/v1/posting/fbs/package-label/get`

## Endpoint Overview

- **Category**：📌 FBS
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v1/posting/fbs/package-label/get`

::: details View Official Description (Russian)
> <aside class="warning">
> C 5 октября 2026 года метод возвращает новые этикетки для отправлений FBS.<br>
> <a href="https://seller-edu.ozon.ru/libra/fbs/logistics-settings/metody#тестовыи-формат-этикетки">Подробнее о новых этикетках в Базе знаний продавца</a>
> 
> С 2 ноября 2026 года метод будет отключён. Переключитесь на <a href="#operation/PostingFbsPackageLabelGet">/v2/posting/fbs/package-label/get</a>.
> </aside>
> 
> Метод для получения этикеток после вызова [/v1/posting/fbs/package-label/create](#operation/PostingAPI_CreateLabelBatch).
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
  "task_id": "323231234-1234"
}
```

## Responses

### HTTP 200 - Статус формирования этикеток или файл с ними

```json
{
  "result": {
    "error": "",
    "status": "completed",
    "file_url": "https://ir.ozone.ru/s3/ord-tmp-12/small_label/ticket-00-0000-0000.pdf",
    "printed_postings_count": 1,
    "unprinted_postings_count": 0,
    "unprinted_postings": []
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/package-label/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/package-label/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/package-label/get", {
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
