---
title: "Создать заявку на поставку по черновику"
description: "Создать заявку на поставку по черновику"
---

# Создать заявку на поставку по черновику

<Badge type="tip" text="POST" /> `/v2/draft/supply/create`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v2/draft/supply/create`
- **Описание**：

> Вы можете создавать заявку на поставку по черновику:
> - 2 раза в минуту;
> - 50 раз в час;
> - 500 раз в день.
> 
> Если превысите лимит, вернётся ошибка 429.
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
  "$ref": "#/components/schemas/v2DraftSupplyCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Заявка создана

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v2DraftSupplyCreateResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/draft/supply/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/draft/supply/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/draft/supply/create", {
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
