---
title: "获取用于智能盯价对比的竞品店铺与竞争对手列表"
description: "Список конкурентов"
---

# 获取用于智能盯价对比的竞品店铺与竞争对手列表

<Badge type="tip" text="POST" /> `/v1/pricing-strategy/competitors/list`

## 接口概览

- **所属模块**：🎯 智能定价策略与竞品盯价
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения списка конкурентов — продавцов с похожими товарами в других интернет-магазинах и маркетплейсах.
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
  "page": 1,
  "limit": 20
}
```

## 返回响应

### HTTP 200 - Список конкурентов

```json
{
  "competitor": [
    {
      "id": 7820251,
      "name": "grenmarketshop.ru"
    }
  ],
  "total": 33
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
curl -X POST "https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/pricing-strategy/competitors/list", {
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
