---
title: "获取продвигаемых объектов в кампании列表"
description: "Список продвигаемых объектов в кампании"
---

# 获取продвигаемых объектов в кампании列表

<Badge type="info" text="GET" /> `/api/client/campaign/{campaignId}/objects`

## 接口概览

- **所属模块**：📢 广告推广计划与对象
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/objects`

::: details 查看官方详细说明 (Официальное описание)
> 
> Метод для получения списка продвигаемых объектов в кампаниях «Оплата за клик», «Баннеры» и «Видеобаннеры».
> 
> Чтобы получить товары в кампании «Оплата за заказ», используйте [POST /campaign/search_promo/v2/products](#operation/ExternalCampaign_ListSearchPromoProductsV2).
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 | Идентификатор кампании. |

## 返回响应

### HTTP 200 - Список рекламируемых объектов в кампании

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignObjectsList"
}
```
:::

### HTTP default - Ошибка запроса

::: details 查看数据结构定义 (Schema)
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
