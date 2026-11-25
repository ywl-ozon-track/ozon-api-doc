---
title: "PatchProductCampaign"
description: "Параметры кампании"
---

# PatchProductCampaign

<Badge text="PATCH" /> `/api/client/campaign/{campaignId}`

## Endpoint Overview

- **Category**：🖱️ Cost-Per-Click (CPC) Ads
- **Method**：`PATCH`
- **Request URL**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}`

::: details View Official Description (Russian)
> Метод для изменения параметров кампании.
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | Yes | - |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignPatchProductCampaignRequest"
}
```
:::

## Responses

### HTTP 200 - Параметры кампании обновлены

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
}
```
:::

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
