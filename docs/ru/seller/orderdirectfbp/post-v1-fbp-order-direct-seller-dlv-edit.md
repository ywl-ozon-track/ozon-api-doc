---
title: "Обновить информацию о доставке силами продавца"
description: "Обновить информацию о доставке силами продавца"
---

# Обновить информацию о доставке силами продавца

<Badge type="tip" text="POST" /> `/v1/fbp/order/direct/seller-dlv/edit`

## Обзор метода

- **Категория**：📌 OrderDirectFBP
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit`
- **Описание**：

> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1FbpOrderDirectSellerDlvEditRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация обновлена

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1FbpOrderDirectSellerDlvEditResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/order/direct/seller-dlv/edit", {
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
