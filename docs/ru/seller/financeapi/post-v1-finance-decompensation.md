---
title: "Отчёт о декомпенсациях"
description: "Отчёт о декомпенсациях"
---

# Отчёт о декомпенсациях

<Badge type="tip" text="POST" /> `/v1/finance/decompensation`

## Обзор метода

- **Категория**：📊 Финансы и отчёты
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/finance/decompensation`
- **Описание**：

> Метод для получения отчёта о декомпенсациях. Соответствует отчёту из раздела **Финансы → Документы → Компенсации и прочие начисления** в личном кабинете.
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
  "date": "2023-09",
  "language": "RU"
}
```

## Ответы сервера

### HTTP 200 - Отчёт о декомпенсациях

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/CreateReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/decompensation" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/decompensation"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/decompensation", {
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
