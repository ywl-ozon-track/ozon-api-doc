---
title: "查询指定广告营销计划的曝光、点击与花费报表"
description: "查询指定广告营销计划的曝光、点击与花费报表"
---

# 查询指定广告营销计划的曝光、点击与花费报表

<Badge type="info" text="GET" /> `/api/client/statistics/campaign/product`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/campaign/product`
- **详细说明**：

> <aside class="notice">
> Не расходует лимиты Performance API.
> </aside>
> 
> В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
> четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/product/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - название кампании,
> - тип объекта,
> - статус кампании,
> - недельный бюджет в рублях,
> - бюджет в рублях,
> - расход в рублях,
> - показы,
> - клики,
> - количество добавлений товара в корзину,
> - отношение числа кликов к числу показов (CTR),
> - средняя цена клика в рублях,
> - заказы в штуках,
> - заказы в рублях,
> - доля рекламных расходов (ДРР),
> - тип продвижения,
> - места размещения для спецразмещения.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | 否 (No) | - |
| `from` | `query` | 否 (No) | - |
| `to` | `query` | 否 (No) | - |
| `dateFrom` | `query` | 否 (No) | - |
| `dateTo` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Статистика по продуктовым кампаниям

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatStatisticsReport"
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/campaign/product" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/campaign/product"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/campaign/product", {
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
