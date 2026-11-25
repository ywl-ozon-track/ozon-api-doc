---
title: "Список товаров, привязанных к сертификату"
description: "Список товаров, привязанных к сертификату"
---

# Список товаров, привязанных к сертификату

<Badge type="tip" text="POST" /> `/v1/product/certificate/products/list`

## Обзор метода

- **Категория**：📜 Сертификаты качества
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/certificate/products/list`
- **Описание**：

> <aside class="warning"> 28 сентября 2026 года отключим параметры <code>page</code> и <code>page_size</code> в запросе метода. Используйте параметры <code>last_id</code> и <code>limit</code>. </aside>

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "certificate_id": 624047,
  "product_status_code": "approved",
  "limit": 1000
}
```

## Ответы сервера

### HTTP 200 - Список товаров

```json
{
  "result": {
    "items": [
      {
        "product_id": 53110101,
        "sku": 0,
        "product_status_code": "approved"
      }
    ],
    "count": 1
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/products/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/products/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/products/list", {
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
