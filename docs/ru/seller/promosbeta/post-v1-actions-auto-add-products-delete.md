---
title: "Удалить товары из автодобавления в акцию"
description: "Удалить товары из автодобавления в акцию"
---

# Удалить товары из автодобавления в акцию

<Badge type="tip" text="POST" /> `/v1/actions/auto-add/products/delete`

## Обзор метода

- **Категория**：📌 PromosBeta
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions/auto-add/products/delete`
- **Описание**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsAutoAddProductsDeleteV2">/v2/actions/auto-add/products/delete</a>.
> </aside>
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/2009-Novye-metody-dlia-upravleniia-avtodobavleniem-tovarov-v-aktsii/) в сообществе разработчиков Ozon for dev.
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
  "action_id": "250204",
  "auto_add_date": "2035-08-28T14:00:00Z",
  "product_ids": [
    "14914"
  ]
}
```

## Ответы сервера

### HTTP 200 - Товары удалены из автодобавления

```json
{
  "product_ids": [
    "14914"
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/auto-add/products/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/auto-add/products/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/auto-add/products/delete", {
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
