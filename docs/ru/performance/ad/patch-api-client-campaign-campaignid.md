---
title: "Параметры кампании"
description: "Параметры кампании"
---

# Параметры кампании

<Badge text="PATCH" /> `/api/client/campaign/{campaignId}`

## 接口概览

- **所属模块**：🖱️ Оплата за клик (CPC)
- **请求方法**：`PATCH`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}`
- **详细说明**：

> Метод для изменения параметров кампании.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | - |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/extcampaignPatchProductCampaignRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Параметры кампании обновлены

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignID"
}
```
:::

### HTTP default - Ошибка запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## 调用示例代码

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
