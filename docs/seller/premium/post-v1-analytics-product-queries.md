---
title: "获取商品"
description: "Получить информацию о запросах моих товаров"
---

# 获取商品

<Badge type="tip" text="POST" /> `/v1/analytics/product-queries`

## 接口概览

- **所属模块**：💎 Premium买家高级客服
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/analytics/product-queries`

::: details 查看官方详细说明 (Официальное описание)
> Используйте метод, чтобы получить данные о запросах ваших товаров. Полная аналитика доступна с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro). Без подписки вы можете посмотреть часть показателей. Метод аналогичен вкладке **Товары в поиске → Запросы моего товара** в личном кабинете.
> 
> Аналитику по запросам можно проверить за определённые даты. Для этого укажите интервал в полях `date_from` и `date_to`. Данные за последний месяц доступны в любом интервале, кроме текущей даты — расчёт происходит в течение 1–2 дней. Аналитика за даты раньше месяца назад доступна только с подпиской [Premium](https://seller-edu.ozon.ru/seller-rating/about-rating/premium-program), [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro) и только по неделям — в запросе укажите параметр `date_from`.
> 
> [Подробнее о работе с запросами товара в Базе знаний продавца](https://seller-edu.ozon.ru/analytics-and-metrics/graphs/analitika-po-zaprosu)
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "date_from": "2019-08-24T14:15:22Z",
  "date_to": "2019-08-24T14:15:22Z",
  "page": 0,
  "page_size": 1000,
  "skus": [
    "string"
  ],
  "sort_by": "BY_SEARCHES",
  "sort_dir": "DESCENDING"
}
```

## 返回响应

### HTTP 200 - Информация о запросах моих товаров

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1AnalyticsProductQueriesResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v1/analytics/product-queries" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/analytics/product-queries"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/analytics/product-queries", {
  method: "POST",
  headers: {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
