---
title: "Создать черновик заявки на поставку для нескольких кластеров"
description: "Создать черновик заявки на поставку для нескольких кластеров"
---

# Создать черновик заявки на поставку для нескольких кластеров

<Badge type="tip" text="POST" /> `/v1/draft/multi-cluster/create`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/draft/multi-cluster/create`
- **Описание**：

> <aside class="warning">Черновик заявки на поставку не отображается в личном кабинете продавца и доступен 30 минут.</aside>
> 
> Вы можете создавать черновики заявки на поставку:
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
  "$ref": "#/components/schemas/v1DraftMultiClusterCreateRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Черновик создан

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1DraftCreateCommonResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/draft/multi-cluster/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/draft/multi-cluster/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/draft/multi-cluster/create", {
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
