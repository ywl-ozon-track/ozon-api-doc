---
title: "为商品绑定条形码"
description: "Привязать штрихкод к товару"
---

# 为商品绑定条形码

<Badge type="tip" text="POST" /> `/v1/barcode/add`

## 接口概览

- **所属模块**：🏷️ 商品条形码管理
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/barcode/add`

::: details 查看官方详细说明 (Официальное описание)
> Если у товара есть штрихкод, который не указан в системе Ozon, привяжите его с помощью этого метода.
> Чтобы сгенерировать штрихкод, используйте метод [/v1/barcode/generate]( #operation/generate-barcode).<br>
> [Подробнее о требованиях к штрихкодам в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/product-information/rabota-so-shtrihkodami#какие-требования-у-штрихкодов)
> 
> На одном товаре может быть до 100 штрихкодов. 
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
  "barcodes": [
    {
      "barcode": "112772873170",
      "sku": "99887766"
    }
  ]
}
```

## 返回响应

### HTTP 200 - Штрихкод привязан

```json
{
  "errors": [
    {
      "code": "123-123",
      "error": "does not exist",
      "barcode": "112772873170",
      "sku": 99887766
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
curl -X POST "https://api-seller.ozon.ru/v1/barcode/add" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/barcode/add"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/barcode/add", {
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
