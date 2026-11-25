---
title: "Привязать штрихкод к товару"
description: "Привязать штрихкод к товару"
---

# Привязать штрихкод к товару

<Badge type="tip" text="POST" /> `/v1/barcode/add`

## Обзор метода

- **Категория**：🏷️ Штрихкоды товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/barcode/add`
- **Описание**：

> Если у товара есть штрихкод, который не указан в системе Ozon, привяжите его с помощью этого метода.
> Чтобы сгенерировать штрихкод, используйте метод [/v1/barcode/generate]( #operation/generate-barcode).<br>
> [Подробнее о требованиях к штрихкодам в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/product-information/rabota-so-shtrihkodami#какие-требования-у-штрихкодов)
> 
> На одном товаре может быть до 100 штрихкодов. 
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
  "barcodes": [
    {
      "barcode": "112772873170",
      "sku": "99887766"
    }
  ]
}
```

## Ответы сервера

### HTTP 200 - Штрихкод привязан

```json
{
  "errors": [
    {
      "code": "123-123",
      "error": "does not exist",
      "barcode": "112772873170",
      "sku": 99887766
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
curl -X POST "https://api-seller.ozon.ru/v1/barcode/add" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/barcode/add"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/barcode/add", {
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
