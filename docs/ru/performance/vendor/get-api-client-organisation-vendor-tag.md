---
title: "Метка организации для внешних рекламных кампаний"
description: "Метка организации для внешних рекламных кампаний"
---

# Метка организации для внешних рекламных кампаний

<Badge type="info" text="GET" /> `/api/client/organisation/vendor_tag`

## Обзор метода

- **Категория**：🌐 Аналитика внешнего трафика
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/organisation/vendor_tag`
- **Описание**：

> 
> Метод возвращает [префикс для метки UTM_CAMPAIGN](https://docs.ozon.ru/performance/analytics/#как-создать-ссылку-с-utm-метками) по идентификатору организации.
> 
> [Подробнее о ссылках для внешних рекламных кампаний](https://docs.ozon.ru/performance/analytics/)
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `orgId` | `query` | Да | - |

## Ответы сервера

### HTTP 200 - Метка организации

```json
{
  "tag": "vendor_org_42"
}
```

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
curl -X GET "https://api-performance.ozon.ru/api/client/organisation/vendor_tag" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/organisation/vendor_tag"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/organisation/vendor_tag", {
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
