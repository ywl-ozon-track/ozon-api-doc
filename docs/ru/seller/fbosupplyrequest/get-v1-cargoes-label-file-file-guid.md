---
title: "Получить PDF с этикетками грузовых мест"
description: "Получить PDF с этикетками грузовых мест"
---

# Получить PDF с этикетками грузовых мест

<Badge type="info" text="GET" /> `/v1/cargoes-label/file/{file_guid}`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}`
- **Описание**：

> <aside class="warning">
>   10 апреля 2026 года отключим метод. Переключитесь на <a href="#operation/CargoesAPI_CargoesLabelGet">/v1/cargoes-label/get</a>.
> </aside>
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Этикетки грузовых мест

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
curl -X GET "https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}", {
  method: "GET",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
