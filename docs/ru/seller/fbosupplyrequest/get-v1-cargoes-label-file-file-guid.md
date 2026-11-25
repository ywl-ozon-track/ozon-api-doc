---
title: "Получить PDF с этикетками грузовых мест"
description: "Получить PDF с этикетками грузовых мест"
---

# Получить PDF с этикетками грузовых мест

<Badge type="info" text="GET" /> `/v1/cargoes-label/file/{file_guid}`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`GET`
- **接口地址**：`https://api-seller.ozon.ru/v1/cargoes-label/file/{file_guid}`
- **详细说明**：

> <aside class="warning">
>   10 апреля 2026 года отключим метод. Переключитесь на <a href="#operation/CargoesAPI_CargoesLabelGet">/v1/cargoes-label/get</a>.
> </aside>
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 返回响应 (Responses)

### HTTP 200 - Этикетки грузовых мест

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

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
