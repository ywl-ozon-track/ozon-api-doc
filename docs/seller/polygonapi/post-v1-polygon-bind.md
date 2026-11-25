---
title: "Свяжите метод доставки с полигоном доставки"
description: "Свяжите метод доставки с полигоном доставки"
---

# Свяжите метод доставки с полигоном доставки

<Badge type="tip" text="POST" /> `/v1/polygon/bind`

## 接口概览

- **所属模块**：📌 PolygonAPI
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/polygon/bind`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> Метод устаревает и будет отключён в будущем. Переключитесь на <a href="#operation/PolygonBind">/v2/polygon/bind </a>.
> </aside>
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
  "delivery_method_id": 0,
  "polygons": [
    {
      "polygon_id": "1323",
      "time": "30"
    }
  ],
  "warehouse_location": {
    "lat": "58.52391272075821",
    "lon": "31.236791610717773"
  }
}
```

## 返回响应

### HTTP 200 - Успешно

```json
{}
```

### HTTP 400 - Неверный параметр

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus_v1PolygonBind"
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
curl -X POST "https://api-seller.ozon.ru/v1/polygon/bind" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/polygon/bind"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/polygon/bind", {
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
