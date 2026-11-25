---
title: "删除товары из акции"
description: "删除товары из акции"
---

# 删除товары из акции

<Badge type="tip" text="POST" /> `/v1/actions/products/deactivate`

## 接口概览

- **所属模块**：🎁 官方促销与营销活动
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/products/deactivate`
- **详细说明**：

> <aside class="warning">
> 13 октября 2026 года отключим метод. Переключитесь на <a href="#operation/ActionsProductsDeactivate">/v2/actions/products/deactivate</a>.
> </aside>
> 
> Метод для удаления товаров из акции.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "action_id": 66011,
  "product_ids": [
    14975
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Товары удалены из акции

```json
{
  "result": {
    "product_ids": [
      14975
    ],
    "rejected": []
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/products/deactivate" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/products/deactivate"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/products/deactivate", {
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
