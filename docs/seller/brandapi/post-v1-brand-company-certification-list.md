---
title: "获取品牌列表"
description: "获取品牌列表"
---

# 获取品牌列表

<Badge type="tip" text="POST" /> `/v1/brand/company-certification/list`

## 接口概览

- **所属模块**：⭐ 品牌资质认证
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/brand/company-certification/list`
- **详细说明**：

> Метод для получения списка брендов, для которых требуется предоставить сертификат. Ответ содержит список брендов,
> товары которых есть в вашем личном кабинете.
> 
> Список брендов может изменяться, если Ozon получит требование от бренда предоставлять сертификат.
> 
> [Подробнее о работе с брендами в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/characteristics/brendy)
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
  "page": 1,
  "page_size": 50
}
```

## 返回响应 (Responses)

### HTTP 200 - Список брендов

```json
{
  "result": {
    "brand_certification": [
      {
        "brand_id": 135476863,
        "brand_name": "Sea of Spa",
        "has_certificate": false
      }
    ],
    "total": 1
  }
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
curl -X POST "https://api-seller.ozon.ru/v1/brand/company-certification/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/brand/company-certification/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/brand/company-certification/list", {
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
