---
title: "Узнать информацию об уценке и основном товаре по SKU уценённого товара"
description: "Узнать информацию об уценке и основном товаре по SKU уценённого товара"
---

# Узнать информацию об уценке и основном товаре по SKU уценённого товара

<Badge type="tip" text="POST" /> `/v1/product/info/discounted`

## Обзор метода

- **Категория**：💰 Цены и остатки товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/info/discounted`
- **Описание**：

> Метод для получения информации о состоянии и дефектах уценённого товара по его SKU. Работает только с уценёнными товарами по схеме FBO. Также метод возвращает SKU основного товара.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "discounted_skus": [
    "635548518"
  ]
}
```

## Ответы сервера

### HTTP 200 - Информация об уценке и основном товаре

```json
{
  "items": [
    {
      "discounted_sku": 635548518,
      "sku": 320067758,
      "condition_estimation": "4",
      "packaging_violation": "",
      "warranty_type": "",
      "reason_damaged": "Механическое повреждение",
      "comment_reason_damaged": "повреждена заводская упаковка",
      "defects": "",
      "mechanical_damage": "",
      "package_damage": "",
      "shortage": "",
      "repair": "",
      "condition": ""
    }
  ]
}
```

### HTTP 400 - Неверный параметр

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/discounted" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/discounted"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/discounted", {
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
