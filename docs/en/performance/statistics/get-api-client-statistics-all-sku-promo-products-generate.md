---
title: "GenerateAllSkuPromoProductsReport"
description: "Получить отчёт по товарам в оплате за заказ — все товары"
---

# GenerateAllSkuPromoProductsReport

<Badge type="info" text="GET" /> `/api/client/statistics/all_sku_promo/products/generate`

## Endpoint Overview

- **Category**：📊 Advertising Statistics
- **Method**：`GET`
- **Request URL**：`https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/products/generate`

::: details View Official Description (Russian)
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
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `timeBounds.from` | `query` | No | Начальная дата периода отчёта в формате RFC 3339. |
| `timeBounds.to` | `query` | No | Конечная дата периода отчёта в формате RFC 3339. |

## Responses

### HTTP 200 - Статистика по кампании

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/extstatisticsGenerateAllSkuPromoProductsReportResponse"
}
```
:::

### HTTP default - Ошибка

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
