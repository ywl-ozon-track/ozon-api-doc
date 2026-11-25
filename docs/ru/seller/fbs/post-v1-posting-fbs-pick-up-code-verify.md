---
title: "Проверить код курьера"
description: "Проверить код курьера"
---

# Проверить код курьера

<Badge type="tip" text="POST" /> `/v1/posting/fbs/pick-up-code/verify`

## Обзор метода

- **Категория**：📌 FBS
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify`
- **Описание**：

> Метод позволяет проверить код курьера при передаче отправлений realFBS Express. Подробнее о передаче отправлений в [Базе знаний продавца](https://seller-edu.ozon.ru/contract-for-sellers/regulations-fbs-realfbs/reglament-prodaji-so-svoego-sklada-fbs-express#7-порядок-передачи-отправлении-через-партнёров-ozon-при-экспресс-доставке).

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "pickup_code": "342341212312",
  "posting_number": "228245774-2229-1"
}
```

## Ответы сервера

### HTTP 200 - Результат проверки

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1PostingFBSPickupCodeVerifyResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify", {
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
