---
title: "Цена товара у конкурента"
description: "Цена товара у конкурента"
---

# Цена товара у конкурента

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/product/info`

## 接口概览

- **所属模块**：🎯 智能定价策略与竞品盯价
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/pricing-strategy/product/info`
- **详细说明**：

> Если вы добавили товар в стратегию ценообразования, метод вернёт цену и ссылку на товар у конкурента.


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "product_id": 7856197312
}
```

## 返回响应 (Responses)

### HTTP 200 - Цена товара у конкурента

```json
{
  "result": {
    "strategy_id": "b7cd30e6-5667-424d-b105-fbec30a52477",
    "is_enabled": true,
    "strategy_product_price": 500,
    "price_downloaded_at": "2022-11-17T15:33:53.936Z",
    "strategy_competitor_id": "b7cd30e6-5667-424d-b105-fbec30a524778",
    "strategy_competitor_product_url": "http://primerurl/pricing-strategy/product/info.ru"
  }
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/product/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/product/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/product/info", {
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
