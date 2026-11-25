---
title: "获取商品"
description: "获取商品"
---

# 获取商品

<Badge type="info" text="GET" /> `/api/client/statistics/all_sku_promo/products/generate`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/products/generate`
- **详细说明**：

> В параметрах запроса `timeBounds.from` и `timeBounds.to` укажите промежуток времени.
> 
> Performance API асинхронный.
> Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
> 
> Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistics/all_sku_promo/products/generate/json`.
> 
> Отчёт содержит:
> - дату;
> - статус продвижения: включено или выключено;
> - расход, ₽;
> - продажи из поиска, ₽;
> - продажи из рекомендаций, ₽;
> - количество заказов из поиска;
> - количество заказов из рекомендаций.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `timeBounds.from` | `query` | 否 (No) | Начальная дата периода отчёта в формате RFC 3339. |
| `timeBounds.to` | `query` | 否 (No) | Конечная дата периода отчёта в формате RFC 3339. |

## 返回响应 (Responses)

### HTTP 200 - Статистика по кампании

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatisticsGenerateAllSkuPromoProductsReportResponse"
}
```
:::

### HTTP default - Ошибка

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/products/generate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/products/generate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/products/generate", {
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
