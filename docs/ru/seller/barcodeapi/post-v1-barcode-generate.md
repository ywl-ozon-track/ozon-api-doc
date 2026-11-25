---
title: "Создать штрихкод для товара"
description: "Создать штрихкод для товара"
---

# Создать штрихкод для товара

<Badge type="tip" text="POST" /> `/v1/barcode/generate`

## Обзор метода

- **Категория**：🏷️ Штрихкоды товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/barcode/generate`
- **Описание**：

> Если у товара нет штрихкода, вы можете создать его с помощью этого метода.
> Если штрихкод уже есть, но он не указан в системе Ozon, вы можете привязать его через метод [/v1/barcode/add](#operation/add-barcode).
> 
> За один запрос вы можете создать штрихкоды не больше чем для 100 товаров.
> С одного аккаунта продавца можно использовать метод не больше 20 раз в минуту.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "product_ids": [
    "99887766"
  ]
}
```

## Ответы сервера

### HTTP 200 - Штрихкод создан

```json
{
  "errors": [
    {
      "code": "123-123",
      "error": "does not exist",
      "barcode": "112772873170",
      "product_id": 9988776612
    }
  ]
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/barcode/generate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/barcode/generate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/barcode/generate", {
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
