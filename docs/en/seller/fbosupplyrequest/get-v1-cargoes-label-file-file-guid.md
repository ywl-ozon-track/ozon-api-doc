---
title: "CargoesAPI CargoesLabelFile"
description: "Получить PDF с этикетками грузовых мест"
---

# CargoesAPI CargoesLabelFile

<Badge type="info" text="GET" /> `/v1/cargoes-label/file/{file_guid}`

## Endpoint Overview

- **Category**：📌 FboSupplyRequest
- **Method**：`GET`
- **Request URL**：`https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}`

::: details View Official Description (Russian)
> <aside class="warning">
>   10 апреля 2026 года отключим метод. Переключитесь на <a href="#operation/CargoesAPI_CargoesLabelGet">/v1/cargoes-label/get</a>.
> </aside>
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Responses

### HTTP 200 - Этикетки грузовых мест

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## Code Examples

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
