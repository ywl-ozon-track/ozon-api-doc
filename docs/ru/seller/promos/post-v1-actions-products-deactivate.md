---
title: "Удалить товары из акции"
description: "Удалить товары из акции"
---

# Удалить товары из акции

<Badge type="tip" text="POST" /> `/v1/actions/products/deactivate`

## Обзор метода

- **Категория**：🎁 Акции Ozon
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/actions/products/deactivate`
- **Описание**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsProductsDeactivate">/v2/actions/products/deactivate</a>.
> </aside>
> 
> Метод для удаления товаров из акции.
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
  "action_id": 66011,
  "product_ids": [
    14975
  ]
}
```

## Ответы сервера

### HTTP 200 - Товары удалены из акции

```json
{
  "result": {
    "product_ids": [
      14975
    ],
    "rejected": []
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/products/deactivate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/products/deactivate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/products/deactivate", {
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
