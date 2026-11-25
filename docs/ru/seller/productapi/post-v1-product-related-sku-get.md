---
title: "Получить связанные SKU"
description: "Получить связанные SKU"
---

# Получить связанные SKU

<Badge type="tip" text="POST" /> `/v1/product/related-sku/get`

## Обзор метода

- **Категория**：📦 Загрузка и обновление товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/related-sku/get`
- **Описание**：

> Метод для получения единого SKU по старым идентификаторам SKU FBS и SKU FBO. 
> В ответе будут все SKU, связанные с переданными.
> 
> Метод может обработать любые SKU, даже скрытые или удалённые.
> 
> Передавайте до 200 SKU в одном запросе.
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
  "sku": [
    "88997766"
  ]
}
```

## Ответы сервера

### HTTP 200 - Информация об SKU

```json
{
  "items": [
    {
      "availability": "AVAILABLE",
      "deleted_at": "2019-08-24T14:15:22Z",
      "delivery_schema": "SDS",
      "product_id": "door",
      "sku": "88997766"
    }
  ],
  "errors": [
    {
      "code": "das",
      "sku": "88997766",
      "message": "sku does not exist"
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
curl -X POST "https://api-seller.ozon.ru/v1/product/related-sku/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/related-sku/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/related-sku/get", {
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
