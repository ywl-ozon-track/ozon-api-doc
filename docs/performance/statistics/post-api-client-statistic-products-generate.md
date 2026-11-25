---
title: "获取商品"
description: "Получить отчёт по товарам в оплате за заказ — выбранные товары"
---

# 获取商品

<Badge type="tip" text="POST" /> `/api/client/statistic/products/generate`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistic/products/generate`

::: details 查看官方详细说明 (Официальное описание)
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
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

## 返回响应

### HTTP 200 - Статистика по кампании

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
