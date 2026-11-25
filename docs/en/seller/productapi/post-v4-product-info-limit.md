---
title: "ProductAPI GetUploadQuota"
description: "Лимиты на ассортимент, создание и обновление товаров"
---

# ProductAPI GetUploadQuota

<Badge type="tip" text="POST" /> `/v4/product/info/limit`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v4/product/info/limit`

::: details View Official Description (Russian)
> Метод для получения информации о лимитах:
> - На ассортимент — сколько всего товаров можно создать в вашем личном кабинете.
> - На создание товаров — сколько товаров можно создать в сутки.
> - На обновление товаров — сколько товаров можно отредактировать в сутки.
> - На работу с товарами — сколько товаров можно создать в минуту.
> - На разархивацию — сколько товаров можно восстановить из архива за сутки.
> 
> Если у вас есть лимит на ассортимент и вы израсходуете его, вы не сможете создавать новые товары.
> 
> [Подробнее о лимитах в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/zagruzka-tovarov/creating-goods/limit)
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Лимиты на ассортмент, создание и обновление товаров

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v4GetUploadQuotaResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v4/product/info/limit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/product/info/limit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/product/info/limit", {
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
