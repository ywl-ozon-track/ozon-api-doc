---
title: "Позаказный отчёт о реализации товаров"
description: "Позаказный отчёт о реализации товаров"
---

# Позаказный отчёт о реализации товаров

<Badge type="tip" text="POST" /> `/v1/finance/realization/posting`

## 接口概览

- **所属模块**：📊 Finance & Settlements
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/finance/realization/posting`
- **详细说明**：

> <aside class="warning">
> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> </aside>
> 
> Отчёт о реализации доставленных и возвращённых товаров с детализацией по каждому заказу. Отмены и невыкупы не включаются. Отчёт доступен с настоящего времени по август 2023 года включительно.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "month": 2,
  "year": 2025
}
```

## 返回响应 (Responses)

### HTTP 200 - Позаказный отчёт о реализации

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1GetRealizationReportPostingResponse"
}
```
:::

### HTTP 400 - Неверный параметр

```json
{
  "message": "The requested report is too large. Use /v1/report/realization/posting/create."
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/finance/realization/posting" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/realization/posting"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/realization/posting", {
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
