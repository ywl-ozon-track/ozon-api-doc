---
title: "获取доступных перевозок列表"
description: "获取доступных перевозок列表"
---

# 获取доступных перевозок列表

<Badge type="tip" text="POST" /> `/v1/posting/carriage-available/list`

## 接口概览

- **所属模块**：📌 DeliveryFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/carriage-available/list`
- **详细说明**：

> <aside class="warning">
>   20 марта 2026 года отключим метод. Переключитесь на <a href="#operation/CarriageAPI_CarriageDeliveryListV2">/v2/carriage/delivery/list</a>.
> </aside>
> 
> Метод для получения перевозок, по которым нужно распечатать штрихкод для отгрузки и документы:
> - для продацов из России — лист отгрузки и транспортную накладную;
> - для продавцов из СНГ — акт и транспортную накладную.
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
  "$ref": "#/components/schemas/postingv1GetCarriageAvailableListRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Список перевозок

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/postingv1GetCarriageAvailableListResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/carriage-available/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/carriage-available/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/carriage-available/list", {
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
