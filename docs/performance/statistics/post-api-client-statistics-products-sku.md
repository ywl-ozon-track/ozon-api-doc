---
title: "获取商品"
description: "Получить статистику по товарам в оплате за клик"
---

# 获取商品

<Badge type="tip" text="POST" /> `/api/client/statistics/products/sku`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/products/sku`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="notice">
> Не расходует лимиты Performance API.
> </aside>
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsSearchPromoProductsSKUStatisticsRequest"
}
```
:::

## 返回响应

### HTTP 200 - Статистика по товарам

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsSearchPromoProductsSKUStatisticsResponse"
}
```
:::

### HTTP default - Ошибка

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics/products/sku" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/products/sku"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/products/sku", {
  method: "POST",
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
