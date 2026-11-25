---
title: "Отрисовать точки на карте"
description: "Отрисовать точки на карте"
---

# Отрисовать точки на карте

<Badge type="tip" text="POST" /> `/v1/delivery/map`

## Обзор метода

- **Категория**：🛣️ Доставка и логистика
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/delivery/map`
- **Описание**：

> Возвращает объединённые кластеры точек самовывоза на области из параметра `viewport`. 
> 
> Используйте значения из параметра `clusters.viewport`, чтобы получить список точек или мелких кластеров внутри большого кластера.
> 
> Используйте метод [/v1/delivery/point/info](#operation/DeliveryPointInfo), чтобы получить информацию о конкретной точке самовывоза.
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
  "$ref": "#/components/schemas/v1DeliveryMapRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Успешно

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1DeliveryMapResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery/map" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery/map"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery/map", {
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
