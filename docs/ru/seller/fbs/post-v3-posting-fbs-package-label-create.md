---
title: "Создать задание на формирование этикеток"
description: "Создать задание на формирование этикеток"
---

# Создать задание на формирование этикеток

<Badge type="tip" text="POST" /> `/v3/posting/fbs/package-label/create`

## Обзор метода

- **Категория**：📌 FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v3/posting/fbs/package-label/create`
- **Описание**：

> <aside class="warning">
> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href="https://seller-edu.ozon.ru/rfbs/scheme-of-work">Базе знаний продавца</a>.
> </aside>
> 
> Создаёт задания на асинхронное формирование этикеток для отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`.
> Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа.
> 
> Чтобы получить созданные этикетки, используйте [/v2/posting/fbs/package-label/get](#operation/PostingFbsPackageLabelGet).
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
  "$ref": "#/components/schemas/posting.v3.PostingFbsPackageLabelCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Задания на формирование этикеток

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/posting.v3.PostingFbsPackageLabelCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbs/package-label/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbs/package-label/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbs/package-label/create", {
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
