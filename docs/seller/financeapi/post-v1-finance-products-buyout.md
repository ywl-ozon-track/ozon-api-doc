---
title: "Отчёт о выкупленных товарах"
description: "Отчёт о выкупленных товарах"
---

# Отчёт о выкупленных товарах

<Badge type="tip" text="POST" /> `/v1/finance/products/buyout`

## 接口概览

- **所属模块**：📊 财务流水与结算报表
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/finance/products/buyout`

::: details 查看官方详细说明 (Официальное описание)
> Возвращает отчёт о товарах, которые выкупил Ozon. Соответствует разделу **Финансы → Документы → УПД по сделкам с юр. лицами → УПД по выкупленным товарам** в личном кабинете.
> 
> [Подробнее о выкупе товаров в Базе знаний](https://seller-edu.ozon.ru/commissions-tariffs/commissions-tariffs-ozon/prodaji-tovarov-v-eaes-i-drugie-strany?search=выкупленные+товары)
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
  "date_from": "YYYY-MM-DD",
  "date_to": "YYYY-MM-DD"
}
```

## 返回响应

### HTTP 200 - Отчёт по выкупленным товарам

```json
{
  "products": [
    {
      "name": "Футболка Daniele Patrici",
      "offer_id": "y9604060-S",
      "sku": "985111329",
      "posting_number": "0208194185-0001-1",
      "seller_price_per_instance": 95,
      "deduction_by_category_percent": "3.13",
      "buyout_price": 92.3,
      "vat_percent": 20,
      "quantity": 1,
      "amount": 92.3
    },
    {
      "name": "Сабо T.TACCARDI",
      "offer_id": "W1496390-41",
      "sku": "1505091950",
      "posting_number": "84189625-0009-3",
      "seller_price_per_instance": 2086,
      "deduction_by_category_percent": "3.01",
      "buyout_price": 2023.3,
      "vat_percent": 20,
      "quantity": 1,
      "amount": 2023.3
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/products/buyout" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/products/buyout"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/products/buyout", {
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
