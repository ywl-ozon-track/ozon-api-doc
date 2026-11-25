---
title: "Частичная сборка отправления (версия 4)"
description: "Частичная сборка отправления (версия 4)"
---

# Частичная сборка отправления (версия 4)

<Badge type="tip" text="POST" /> `/v4/posting/fbs/ship/package`

## Обзор метода

- **Категория**：📌 FBS&rFBSMarks
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v4/posting/fbs/ship/package`
- **Описание**：

> <aside class="warning">
> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку отправления. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что отправление собрано. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку отправления.
> </aside>
> 
> Если в запросе передать часть товаров из отправления, метод разделит первичное отправление на две части. 
> В первичном несобранном отправлении останется часть товаров, которую не передали в запросе.
> 
> По умолчанию статус созданных отправлений `awaiting_packaging` — ожидает сборки.
> 
> Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился.
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
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Request"
}
```
:::

## Ответы сервера

### HTTP 200 - Результат сборки отправления

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Response"
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
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/ship/package" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/ship/package"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/ship/package", {
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
