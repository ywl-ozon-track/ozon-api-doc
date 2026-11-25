---
title: "创建задание на формирование этикеток"
description: "创建задание на формирование этикеток"
---

# 创建задание на формирование этикеток

<Badge type="tip" text="POST" /> `/v3/posting/fbs/package-label/create`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v3/posting/fbs/package-label/create`
- **详细说明**：

> <aside class="warning">
> Если вы работаете по схеме rFBS или rFBS Express, изучите процесс печати этикетки в <a href="https://seller-edu.ozon.ru/rfbs/scheme-of-work">Базе знаний продавца</a>.
> </aside>
> 
> Создаёт задания на асинхронное формирование этикеток для отправлений в статусе «Ожидает отгрузки» — `awaiting_deliver`.
> Рекомендуем запрашивать этикетки через 45–60 секунд после сборки заказа.
> 
> Чтобы получить созданные этикетки, используйте [/v2/posting/fbs/package-label/get](#operation/PostingFbsPackageLabelGet).
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
  "$ref": "#/components/schemas/posting.v3.PostingFbsPackageLabelCreateRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Задания на формирование этикеток

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/posting.v3.PostingFbsPackageLabelCreateResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v3/posting/fbs/package-label/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/posting/fbs/package-label/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/posting/fbs/package-label/create", {
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
