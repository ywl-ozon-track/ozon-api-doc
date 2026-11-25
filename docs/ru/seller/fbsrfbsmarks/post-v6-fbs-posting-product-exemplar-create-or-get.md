---
title: "Получить данные созданных экземпляров"
description: "Получить данные созданных экземпляров"
---

# Получить данные созданных экземпляров

<Badge type="tip" text="POST" /> `/v6/fbs/posting/product/exemplar/create-or-get`

## Обзор метода

- **Категория**：📌 FBS&rFBSMarks
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get`
- **Описание**：

> Метод для получения информации по экземплярам товаров из отправления, переданных в методе [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).
> 
> Используйте метод для получения `exemplar_id`.
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
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarCreateOrGetV6Request"
}
```
:::

## Ответы сервера

### HTTP 200 - Данные экземпляров

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarCreateOrGetV6Response"
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
curl -X POST "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/create-or-get", {
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
