---
title: "Валидация кодов маркировки"
description: "Валидация кодов маркировки"
---

# Валидация кодов маркировки

<Badge type="tip" text="POST" /> `/v5/fbs/posting/product/exemplar/validate`

## Обзор метода

- **Категория**：📌 FBS&rFBSMarks
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate`
- **Описание**：

> Метод для проверки кодов на соответствие требованиям системы «Честный ЗНАК» по количеству и составу символов, а также других маркировок.
> 
> Если у вас нет номера грузовой таможенной декларации (ГТД), вы можете его не указывать.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v5FbsPostingProductExemplarValidateV5Request"
}
```
:::

## Ответы сервера

### HTTP 200 - Результат валидации

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v5FbsPostingProductExemplarValidateV5Response"
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
curl -X POST "https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v5/fbs/posting/product/exemplar/validate", {
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
