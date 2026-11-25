---
title: "Создать задание на формирование этикеток"
description: "Создать задание на формирование этикеток"
---

# Создать задание на формирование этикеток

<Badge type="tip" text="POST" /> `/v2/posting/fbs/package-label/create`

## Обзор метода

- **Категория**：📌 FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/posting/fbs/package-label/create`
- **Описание**：

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
    "4708216109137",
    "3697105098026"
  ]
}
```

## Ответы сервера

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
