---
title: "Загрузить коды цифровых товаров для отправления"
description: "Загрузить коды цифровых товаров для отправления"
---

# Загрузить коды цифровых товаров для отправления

<Badge type="tip" text="POST" /> `/v1/posting/digital/codes/upload`

## Обзор метода

- **Категория**：📌 Digital
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/posting/digital/codes/upload`
- **Описание**：

> Метод доступен только продавцам, работающим с цифровыми товарами. Вы можете загрузить коды цифровых товаров в течение 24 часов с момента получения заказа.
> 
> Передайте все коды цифровых товаров к каждому товару в заказе за один запрос. Если передадите не все коды, запрос вернётся с ошибкой.
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
  "exemplars_by_sku": [
    {
      "exemplar_qty": 3,
      "not_available_exemplar_qty": 0,
      "sku": "6605735423",
      "exemplar_keys": [
        "4235234234",
        "431234234",
        "912382368"
      ]
    }
  ],
  "posting_number": "33920151-0719-1"
}
```

## Ответы сервера

### HTTP 200 - Коды цифровых товаров загружены

```json
{
  "exemplars_by_sku": [
    {
      "sku": 123456,
      "received_qty": 3,
      "rejected_qty": 1,
      "failed_exemplars": [
        {
          "key": "23434252345",
          "message": "Некорректный формат кода"
        }
      ]
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/digital/codes/upload" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/digital/codes/upload"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/digital/codes/upload", {
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
