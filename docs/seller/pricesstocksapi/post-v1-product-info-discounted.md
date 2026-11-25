---
title: "Узнать информацию об уценке и основном товаре по SKU уценённого товара"
description: "Узнать информацию об уценке и основном товаре по SKU уценённого товара"
---

# Узнать информацию об уценке и основном товаре по SKU уценённого товара

<Badge type="tip" text="POST" /> `/v1/product/info/discounted`

## 接口概览

- **所属模块**：💰 商品价格与库存
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/discounted`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения информации о состоянии и дефектах уценённого товара по его SKU. Работает только с уценёнными товарами по схеме FBO. Также метод возвращает SKU основного товара.
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
  "discounted_skus": [
    "635548518"
  ]
}
```

## 返回响应

### HTTP 200 - Информация об уценке и основном товаре

```json
{
  "items": [
    {
      "discounted_sku": 635548518,
      "sku": 320067758,
      "condition_estimation": "4",
      "packaging_violation": "",
      "warranty_type": "",
      "reason_damaged": "Механическое повреждение",
      "comment_reason_damaged": "повреждена заводская упаковка",
      "defects": "",
      "mechanical_damage": "",
      "package_damage": "",
      "shortage": "",
      "repair": "",
      "condition": ""
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/discounted" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/discounted"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/discounted", {
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
