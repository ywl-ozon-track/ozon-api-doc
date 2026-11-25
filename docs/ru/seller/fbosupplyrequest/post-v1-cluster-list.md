---
title: "Информация о кластерах и их складах"
description: "Информация о кластерах и их складах"
---

# Информация о кластерах и их складах

<Badge type="tip" text="POST" /> `/v1/cluster/list`

## Обзор метода

- **Категория**：📌 FboSupplyRequest
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/cluster/list`

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Client-Id` | Да | Идентификатор клиента (Client ID) |
| `Api-Key` | Да | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "cluster_type": "CLUSTER_TYPE_OZON"
}
```

## Ответы сервера

### HTTP 200 - Информация о кластерах

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/v1DraftClusterListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cluster/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cluster/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cluster/list", {
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
