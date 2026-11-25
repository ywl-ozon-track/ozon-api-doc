---
title: "Создание отгрузки"
description: "Создание отгрузки"
---

# Создание отгрузки

<Badge type="tip" text="POST" /> `/v1/carriage/create`

## 接口概览

- **所属模块**：📌 DeliveryFBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/carriage/create`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> Перед началом работы проверьте возможность создания отгрузки методом <a href="#operation/CarriageAPI_CarriageDeliveryListV2">/v2/carriage/delivery/list</a>. <br> Если <code>methods.carriages.available_actions = create</code>, вы можете создать отгрузку.  
> 
> Если вы продавец не из России, обратите внимание на доступность <a href="https://seller-edu.ozon.ru/fbs/ozon-logistika/sobrat-zakazy#шаг-2-сформируите-отгрузку">рекомендованного времени</a> в личном кабинете.
> </aside>
> 
> Используйте метод для создания первой FBS отгрузки. В неё попадут все отправления со статусом «Готов к отгрузке». Созданная отгрузка получит статус `new`.
> 
> Для отгрузки в статусе `new` можно перезаписать состав отправлений методом [/v1/carriage/set-postings](#operation/CarriageAPI_SetPostings). Если из отгрузки исключить часть отправлений, они могут попасть в следующую отгрузку. 
> 
> Чтобы получить список отправлений в отгрузке, используйте метод [/v2/posting/fbs/act/get-postings](#operation/PostingAPI_ActPostingList).
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1CarriageCreateRequest"
}
```
:::

## 返回响应

### HTTP 200 - Информация об отгрузке

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1CarriageCreateResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/create" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/create"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/create", {
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
