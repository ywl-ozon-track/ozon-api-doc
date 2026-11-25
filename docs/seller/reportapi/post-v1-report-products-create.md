---
title: "Отчёт по товарам"
description: "Отчёт по товарам"
---

# Отчёт по товарам

<Badge type="tip" text="POST" /> `/v1/report/products/create`

## 接口概览

- **所属模块**：📌 ReportAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/report/products/create`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения отчёта с данными о товарах. Например, Ozon ID, количества товаров, цен, статуса.
> Соответствует разделу/действию **Товары и цены → Список товаров → Скачать → Товары CSV** в личном кабинете.
> 
> Пояснения к некоторым полям:
>   - __Ozon Product ID__ — идентификатор товара в нашей системе. Например, если вы продаёте товар со склада Ozon и со своего склада, Ozon Product ID будет для них одинаковым.
>   - __FBO Ozon SKU ID__ — идентификатор товара, который продаётся со склада Ozon.
>   - __FBS Ozon SKU ID__ — идентификатор товара, который продаётся с вашего склада.
>   - __CrossBorder Ozon SKU__ — идентификатор товара, который продаётся из-за границы.
>   - __Barcode__ — штрихкод товара, который печатается на маркировке.
>   - __Статус товара__ — можно ли купить товар на Ozon. Если статус «Готов к продаже», товар купить нельзя.
>   - __Доступно на складе Ozon, шт__ — сколько штук товара на складе доступно для продажи. Это количество не включает зарезервированные товары.
>   - __Зарезервировано, шт__ — сколько штук товара со статусом «Зарезервировано». Товар зарезервирован с момента получения заказа на Ozon и до упаковки для передачи покупателю.
>   - __Текущая цена с учётом скидки, руб.__ — цена, по которой товар продаётся сейчас (на момент загрузки отчёта, с учётом скидки). Если товар участвует в акции, указана цена без её учёта.
>   - __Базовая цена (цена до скидок), руб.__ — цена без учёта скидки.
>   - __Цена Premium, руб.__ — цена для покупателей с подпиской Ozon Premium.
>   - __Рекомендованная цена, руб.__ — минимальная цена на товар на другой торговой площадке.
>   - __Актуальная ссылка на рекомендованную цену__ — ссылка на товар с рекомендованной ценой на другой торговой площадке.
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
  "language": "DEFAULT",
  "offer_id": [],
  "search": "",
  "sku": [],
  "visibility": "ALL"
}
```

## 返回响应

### HTTP 200 - Отчёт по товарам

```json
{
  "result": {
    "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69"
  }
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/report/products/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/products/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/products/create", {
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
