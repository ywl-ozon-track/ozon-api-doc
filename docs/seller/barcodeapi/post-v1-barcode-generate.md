---
title: "为商品生成条形码"
description: "Создать штрихкод для товара"
---

# 为商品生成条形码

<Badge type="tip" text="POST" /> `/v1/barcode/generate`

## 接口概览

- **所属模块**：🏷️ 商品条形码管理
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/barcode/generate`

::: details 查看官方详细说明 (Официальное описание)
> Если у товара нет штрихкода, вы можете создать его с помощью этого метода.
> Если штрихкод уже есть, но он не указан в системе Ozon, вы можете привязать его через метод [/v1/barcode/add](#operation/add-barcode).
> 
> За один запрос вы можете создать штрихкоды не больше чем для 100 товаров.
> С одного аккаунта продавца можно использовать метод не больше 20 раз в минуту.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "product_ids": [
    "99887766"
  ]
}
```

## 返回响应

### HTTP 200 - Штрихкод создан

```json
{
  "errors": [
    {
      "code": "123-123",
      "error": "does not exist",
      "barcode": "112772873170",
      "product_id": 9988776612
    }
  ]
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/barcode/generate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/barcode/generate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/barcode/generate", {
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
