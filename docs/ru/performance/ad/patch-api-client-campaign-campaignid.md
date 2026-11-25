---
title: "Параметры кампании"
description: "Параметры кампании"
---

# Параметры кампании

<Badge text="PATCH" /> `/api/client/campaign/{campaignId}`

## Обзор метода

- **Категория**：🖱️ Оплата за клик (CPC)
- **HTTP-метод**：`PATCH`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}`
- **Описание**：

> Метод для изменения параметров кампании.

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Да | - |

## Тело запроса

Content-Type: `application/json`

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignPatchProductCampaignRequest"
}
```
:::

## Ответы сервера

### HTTP 200 - Параметры кампании обновлены

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X PATCH "https://api-performance.ozon.ru/api/client/campaign/{campaignId}" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.patch(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}", {
  method: "PATCH",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
