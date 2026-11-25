---
title: "Отчёт об уценённых товарах"
description: "Отчёт об уценённых товарах"
---

# Отчёт об уценённых товарах

<Badge type="tip" text="POST" /> `/v1/report/discounted/create`

## 接口概览

- **所属模块**：📌 ReportAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/report/discounted/create`
- **详细说明**：

> Запускает генерацию отчёта по уценённым товарам на складе Ozon.
> Ozon может сам уценить товар, например, при повреждении.
> 
> В результате запроса будет не сам отчёт, а его уникальный идентификатор. 
> Чтобы получить отчёт, отправьте идентификатор в запросе метода [/v1/report/info](#operation/ReportAPI_ReportInfo).
> 
> С одного аккаунта продавца можно отправить 1 запрос в минуту.
> Соответствует разделу **Аналитика → Отчёты → Продажи со склада Ozon → Товары, уценённые Ozon** в личном кабинете.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/reportCreateDiscountedRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Результат запроса

```json
{
  "code": "REPORT_seller_products_924336_1720170405_a9ea2f27-a473-4b13-99f9-d0cfcb5b1a69"
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v1/report/discounted/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/report/discounted/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/report/discounted/create", {
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
