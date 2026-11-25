---
title: "Получить отчёт по заказам в оплате за заказ — все товары"
description: "Получить отчёт по заказам в оплате за заказ — все товары"
---

# Получить отчёт по заказам в оплате за заказ — все товары

<Badge type="info" text="GET" /> `/api/client/statistics/all_sku_promo/orders/generate`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/orders/generate`
- **Описание**：

> В параметрах запроса `timeBounds.from` и `timeBounds.to` укажите промежуток времени.
> 
> Performance API асинхронный.
> Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
> 
> Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistics/all_sku_promo/orders/generate/json`.
> 
> Отчёт содержит:
> - период отчёта;
> - дату;
> - идентификатор заказа;
> - номер заказа;
> - SKU;
> - SKU продвигаемого товара;
> - артикул;
> - название товара;
> - количество;
> - стоимость, ₽;
> - стоимость продажи, ₽;
> - ставку, %;
> - ставку, ₽;
> - расход, ₽.
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `timeBounds.from` | `query` | Нет | Начальная дата периода отчёта в формате RFC 3339. |
| `timeBounds.to` | `query` | Нет | Конечная дата периода отчёта в формате RFC 3339. |

## Ответы сервера

### HTTP 200 - Статистика по кампании

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsGenerateAllSkuPromoOrdersReportResponse"
}
```
:::

### HTTP default - Ошибка

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/orders/generate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/orders/generate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/all_sku_promo/orders/generate", {
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
