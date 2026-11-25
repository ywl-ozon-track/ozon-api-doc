---
title: "Обновить метод доставки «Партнёры Ozon»"
description: "Обновить метод доставки «Партнёры Ozon»"
---

# Обновить метод доставки «Партнёры Ozon»

<Badge type="tip" text="POST" /> `/v1/warehouse/erfbs/aggregator/delivery-method/update`

## 接口概览

- **所属模块**：📌 rFBSWarehouseSetup
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/erfbs/aggregator/delivery-method/update`
- **详细说明**：

> [Подробнее о схеме rFBS Express](https://seller-edu.ozon.ru/rfbs/scheme-of-work/rfbs-express#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-realfbs-express)
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
  "$ref": "#/components/schemas/v1WarehouseERFBSAggregatorDeliveryMethodUpdateRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Успешно

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1WarehouseERFBSAggregatorDeliveryMethodUpdateResponse"
}
```
:::

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/erfbs/aggregator/delivery-method/update" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/erfbs/aggregator/delivery-method/update"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/erfbs/aggregator/delivery-method/update", {
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
