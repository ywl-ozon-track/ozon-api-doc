---
title: "Получить статистику по товарам в оплате за клик"
description: "Получить статистику по товарам в оплате за клик"
---

# Получить статистику по товарам в оплате за клик

<Badge type="tip" text="POST" /> `/api/client/statistics/products/sku`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistics/products/sku`
- **Описание**：

> <aside class="notice">
> Не расходует лимиты Performance API.
> </aside>
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsSearchPromoProductsSKUStatisticsRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Статистика по товарам

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsSearchPromoProductsSKUStatisticsResponse"
}
```
:::

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics/products/sku" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/products/sku"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/products/sku", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
