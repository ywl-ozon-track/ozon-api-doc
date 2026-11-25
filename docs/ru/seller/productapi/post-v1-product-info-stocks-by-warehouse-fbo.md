---
title: "Получить информацию о стоках на складах FBO"
description: "Получить информацию о стоках на складах FBO"
---

# Получить информацию о стоках на складах FBO

<Badge type="tip" text="POST" /> `/v1/product/info/stocks-by-warehouse/fbo`

## Обзор метода

- **Категория**：📦 Загрузка и обновление товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo`
- **Описание**：

> Передайте в запросе `offer_ids` или `skus`.
> 
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/2177-Novyi-metod-dlia-polucheniia-ostatkov-FBO/) в сообществе разработчиков Ozon for dev.
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
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Информация о стоках.

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboResponse"
}
```
:::

### HTTP default - Ошибка.

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo", {
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
