---
title: "GetLimitsList"
description: "Лимиты ставок для инструментов продвижения"
---

# GetLimitsList

<Badge type="info" text="GET" /> `/api/client/limits/list`

## Endpoint Overview

- **Category**：📢 Campaigns & Objects
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/limits/list`

::: details View Official Description (Russian)
> 
> Вы можете получить лимиты ставок по инструментам:
> - Оплата за заказ:
>   - Минимальная и максимальная ставка для инструмента.
>   - Минимальные ставки за заказ для некоторых категорий товаров.
> - Спецразмещение и Оплата за клик:
>   - Минимальная и максимальная ставка за клик.
>   - Минимальные ставки за клик для некоторых категорий товаров.
> 
:::

## Authentication Headers

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `Authorization` | Yes | Bearer format OAuth 2.0 Access Token |

## Responses

### HTTP 200 - Лимиты ставок

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignListLimitsResponse"
}
```
:::

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X GET "https://api-performance.ozon.ru/api/client/limits/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/limits/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/limits/list", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
