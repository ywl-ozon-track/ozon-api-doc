---
title: "获取仓库"
description: "Получить информацию о стоках на складах FBO"
---

# 获取仓库

<Badge type="tip" text="POST" /> `/v1/product/info/stocks-by-warehouse/fbo`

## 接口概览

- **所属模块**：📦 商品管理与创建更新
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo`

::: details 查看官方详细说明 (Официальное описание)
> Передайте в запросе `offer_ids` или `skus`.
> 
> Вы можете оставить обратную связь по этому методу в комментариях к [обсуждению](https://dev.ozon.ru/community/2177-Novyi-metod-dlia-polucheniia-ostatkov-FBO/) в сообществе разработчиков Ozon for dev.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboRequest"
}
```
:::

## 返回响应

### HTTP 200 - Информация о стоках.

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/product.v1.GetProductInfoStocksByWarehouseFboResponse"
}
```
:::

### HTTP default - Ошибка.

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/stocks-by-warehouse/fbo", {
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
