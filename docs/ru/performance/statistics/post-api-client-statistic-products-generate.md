---
title: "Получить отчёт по товарам в оплате за заказ — выбранные товары"
description: "Получить отчёт по товарам в оплате за заказ — выбранные товары"
---

# Получить отчёт по товарам в оплате за заказ — выбранные товары

<Badge type="tip" text="POST" /> `/api/client/statistic/products/generate`

## Обзор метода

- **Категория**：📊 Статистика рекламы
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/statistic/products/generate`
- **Описание**：

> 
> В параметрах запроса `from` и `to` укажите промежуток времени.
> 
> Performance API асинхронный.
> Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
> 
> Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistic/products/generate/json`.
> 
> Отчёт содержит:
> - период отчёта;
> - SKU;
> - артикул;
> - наименование;
> - категорию;
> - продвижение;
> - цену товара, ₽;
> - ставку, %;
> - ставку, ₽;
> - количество заказов;
> - сумму заказов, ₽;
> - расход, ₽;
> - продажи («Оплата за клик»), ₽;
> - расход («Оплата за клик»), ₽;
> - заказы («Оплата за клик»), шт;
> - в корзину;
> - ДРР, %;
> - последнее изменение.
> 

## Заголовки авторизации

| Параметр | Обязательный | Описание |
| :--- | :--- | :--- |
| `Authorization` | Да | OAuth 2.0 токен доступа в формате Bearer |

## Тело запроса

Content-Type: `application/json`

## Ответы сервера

### HTTP 200 - Статистика по кампании

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistic/products/generate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistic/products/generate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistic/products/generate", {
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
