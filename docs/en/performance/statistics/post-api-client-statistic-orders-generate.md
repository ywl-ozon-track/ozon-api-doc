---
title: "Получить отчёт по заказам в оплате за заказ — выбранные товары"
description: "Получить отчёт по заказам в оплате за заказ — выбранные товары"
---

# Получить отчёт по заказам в оплате за заказ — выбранные товары

<Badge type="tip" text="POST" /> `/api/client/statistic/orders/generate`

## 接口概览

- **所属模块**：📊 Advertising Statistics
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistic/orders/generate`
- **详细说明**：

> 
> В параметрах запроса `from` и `to` укажите промежуток времени.
> 
> Performance API асинхронный.
> Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт в формате CSV](#operation/DownloadStatistics).
> 
> Чтобы запросить отчёт в формате JSON, добавьте `/json` в адрес метода: `/api/client/statistic/orders/generate/json`.
>   
> Отчёт содержит:
> - период отчёта;
> - дату;
> - ID заказа;
> - номер заказа;
> - SKU;
> - SKU продвигаемого товара;
> - артикул;
> - наименование;
> - источник заказа;
> - количество;
> - стоимость, ₽;
> - ставку, %;
> - ставку, ₽;
> - расход, ₽.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Статистика по кампании

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extstatStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/statistic/orders/generate" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistic/orders/generate"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistic/orders/generate", {
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
