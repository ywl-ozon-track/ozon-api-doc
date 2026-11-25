---
title: "GetVendorTag"
description: "Метка организации для внешних рекламных кампаний"
---

# GetVendorTag

<Badge type="info" text="GET" /> `/api/client/organisation/vendor_tag`

## Endpoint Overview

- **Category**：🌐 External Traffic Analytics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/organisation/vendor_tag`

::: details View Official Description (Russian)
> 
> Метод возвращает [префикс для метки UTM_CAMPAIGN](https://docs.ozon.ru/performance/analytics/#как-создать-ссылку-с-utm-метками) по идентификатору организации.
> 
> [Подробнее о ссылках для внешних рекламных кампаний](https://docs.ozon.ru/performance/analytics/)
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `orgId` | `query` | Yes | - |

## Responses

### HTTP 200 - Метка организации

```json
{
  "tag": "vendor_org_42"
}
```

### HTTP default - Ошибка запроса

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
