---
title: "Изменение состава отгрузки"
description: "Изменение состава отгрузки"
---

# Изменение состава отгрузки

<Badge type="tip" text="POST" /> `/v1/carriage/set-postings`

## 接口概览

- **所属模块**：📌 DeliveryFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/carriage/set-postings`
- **详细说明**：

> 
> <aside class="warning">
> Метод недоступен для продавцов из СНГ. <br>
> 
> Полностью перезаписывает список заказов в отгрузке. Передавайте только те заказы, которые находятся в статусе <code>Ожидает отгрузки</code>, и вы готовы их отгрузить.    
> 
> Менять состав можно только у отгрузок со статусом `new`.
> </aside>
> 
> <br>
> 
> <aside class="notice">
> Чтобы вернуться к списку заказов, удалите отгрузку с помощью метода <a href="#operation/CarriageAPI_CarriageCancel">/v1/carriage/cancel</a>, и создайте новую.
> </aside>
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
  "$ref": "#/components/schemas/v1SetPostingsRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация об отправлении

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1SetPostingsResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/set-postings" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/set-postings"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/set-postings", {
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
