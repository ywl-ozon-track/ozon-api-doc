---
title: "Список продвигаемых объектов в кампании"
description: "Список продвигаемых объектов в кампании"
---

# Список продвигаемых объектов в кампании

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/objects`

## 接口概览

- **所属模块**：📢 Campaigns & Objects
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects`
- **详细说明**：

> 
> Метод для получения списка продвигаемых объектов в кампаниях «Оплата за клик», «Баннеры» и «Видеобаннеры».
> 
> Чтобы получить товары в кампании «Оплата за заказ», используйте [POST /campaign/search_promo/v2/products](#operation/ExternalCampaign_ListSearchPromoProductsV2).
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | Идентификатор кампании. |

## 返回响应 (Responses)

### HTTP 200 - Список рекламируемых объектов в кампании

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignObjectsList"
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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects", {
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
