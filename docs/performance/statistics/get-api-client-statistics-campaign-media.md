---
title: "Статистика по медийным кампаниям"
description: "Статистика по медийным кампаниям"
---

# Статистика по медийным кампаниям

<Badge type="info" text="GET" /> `/api/client/statistics/campaign/media`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/campaign/media`
- **详细说明**：

> 
> В запросе укажите временной промежуток с помощью полей `from` и `to` или `dateFrom` и `dateTo`. Если заполнены все
> четыре поля, в ответе будет статистика по временному промежутку из полей `dateFrom` и `dateTo`.
> 
> Формат отчёта — CSV. 
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/campaign/media/json`.
> 
> Отчёт содержит:
> - идентификатор кампании,
> - название кампании,
> - формат кампании,
> - статус кампании,
> - дневной бюджет в рублях,
> - бюджет в рублях,
> - расход в рублях,
> - показы,
> - клики,
> - средняя цена 1000 показов в рублях,
> - отношение числа кликов к числу показов (CTR),
> - средняя цена клика в рублях,
> - заказы в штуках,
> - заказы после просмотра в штуках,
> - сумма заказов после просмотра,
> - доля рекламных расходов (ДРР),
> - сумма заказов,
> - тип оплаты,
> - тип бюджета.
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

### HTTP 200 - Статистика по медийным кампаниям

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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/campaign/media" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/campaign/media"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/campaign/media", {
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
