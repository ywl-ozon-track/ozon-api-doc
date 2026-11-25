---
title: "Обновить ставки товаров"
description: "Обновить ставки товаров"
---

# Обновить ставки товаров

<Badge type="warning" text="PUT" /> `/api/client/campaign/{campaignId}/products`

## 接口概览

- **所属模块**：🛒 CPC Promoted Products
- **请求方法**：`PUT`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products`
- **详细说明**：

> 
> Этот метод перезаписывает список стоп-слов и фразы со ставками. Исходные стоп-слова и фразы со ставками удаляются.
> 
> Чтобы обновить ставки в кампании с размещением в карточке товара, передайте значения параметров `sku` и `bid`.
> 
> Параметр `bid` учитывается только для кампании с включённой стратегией «Средняя стоимость клика».
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignId` | `path` | 是 (Yes) | - |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Ставки обновлены

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
curl -X PUT "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.put(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign/{campaignId}/products", {
  method: "PUT",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
