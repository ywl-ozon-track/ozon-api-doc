---
title: "Создать акцию с механикой «Скидка»"
description: "Создать акцию с механикой «Скидка»"
---

# Создать акцию с механикой «Скидка»

<Badge type="tip" text="POST" /> `/v1/seller-actions/create/discount`

## Обзор метода

- **Категория**：📌 SellerActions
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/seller-actions/create/discount`
- **Описание**：

> <aside class="warning">
> Недоступен для продавцов из СНГ.
> </aside>
> 
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1872-Novye-metody-dlia-raboty-s-aktsiiami-sellera) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/v1SellerActionsCreateDiscountRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Акция создана

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1SellerActionsCreateDiscountResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/seller-actions/create/discount" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/seller-actions/create/discount"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/seller-actions/create/discount", {
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
