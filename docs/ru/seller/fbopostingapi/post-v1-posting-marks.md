---
title: "Получить маркировки экземпляров из отправления"
description: "Получить маркировки экземпляров из отправления"
---

# Получить маркировки экземпляров из отправления

<Badge type="tip" text="POST" /> `/v1/posting/marks`

## Обзор метода

- **Категория**：📦 Заказы FBO
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/posting/marks`
- **Описание**：

> Возвращает статусы выдачи экземпляров и коды маркировки «Честный ЗНАК» для каждого отправления.
> 
> Укажите в чеке и выведите из оборота маркировки экземпляров из параметра `issued_exemplars` в ответе.
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
  "$ref": "#/components/schemas/v1PostingMarksRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Список экземпляров отправления с маркировками

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1PostingMarksResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/marks" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/marks"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/marks", {
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
