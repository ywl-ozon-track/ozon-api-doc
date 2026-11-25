---
title: "Собрать заказ (версия 4)"
description: "Собрать заказ (версия 4)"
---

# Собрать заказ (версия 4)

<Badge type="tip" text="POST" /> `/v4/posting/fbs/ship`

## Обзор метода

- **Категория**：📌 FBS&rFBSMarks
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v4/posting/fbs/ship`
- **Описание**：

> <aside class="warning">
> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку заказа. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что заказ собран. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку заказа.
> </aside>
> 
> Делит заказ на отправления и переводит его в статус `awaiting_deliver`.
> 
> Каждый элемент в `packages` может содержать несколько элементов `products` или отправлений. 
> Каждый элемент в `products` — это товар, включённый в данное отправление.
> 
> Разделить заказ нужно, если:
>   - товары не помещаются в одну упаковку,
>   - товары нельзя сложить в одну упаковку.
>   
> Чтобы разделить заказ, передайте в массиве `packages` несколько объектов.
> 
> Пример запроса, когда заказ разделять не нужно: 2 товара будут в одном отправлении.
> ```
> {
>   "packages": [
>     {
>       "products": [
>         {
>           "product_id": 185479045,
>           "quantity": 2
>         }
>       ]
>     }
>   ],
>   "posting_number": "89491381-0072-1"
> }
> ```
> 
> Пример запроса, когда заказ нужно разделить: каждый товар будет в отдельном отправлении.
> 
> ```
> {
>   "packages": [
>     {
>       "products": [
>         {
>           "product_id": 185479045,
>           "quantity": 1
>         }
>       ]
>     },
>     {
>       "products": [
>         {
>           "product_id": 185479045,
>           "quantity": 1
>         }
>       ]
>     }
>   ],
>   "posting_number": "89491381-0072-1"
> }    
> ```  
> 
> Чтобы внести информацию по экземплярам, используйте метод [/v6/fbs/posting/product/exemplar/set](#operation/PostingAPI_FbsPostingProductExemplarSetV6).
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
  "packages": [
    {
      "products": [
        {
          "product_id": 185479045,
          "quantity": 1
        }
      ]
    }
  ],
  "posting_number": "89491381-0072-1",
  "with": {
    "additional_data": true
  }
}
```

## Ответы сервера

### HTTP 200 - Результат сборки заказа

```json
{
  "additional_data": [
    {
      "posting_number": "89491381-0072-1",
      "products": [
        {
          "currency_code": "RUB",
          "mandatory_mark": [
            "123"
          ],
          "name": "string",
          "offer_id": "17125",
          "price": "2000",
          "quantity": 1,
          "sku": 149618972
        }
      ]
    }
  ],
  "result": [
    "89491381-0072-1"
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
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/ship" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/ship"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/ship", {
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
