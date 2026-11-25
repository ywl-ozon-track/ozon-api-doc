---
title: "删除грузоместо в заявке на поставку"
description: "删除грузоместо в заявке на поставку"
---

# 删除грузоместо в заявке на поставку

<Badge type="tip" text="POST" /> `/v1/cargoes/delete`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/cargoes/delete`
- **详细说明**：

> Метод для удаления грузомест в заявке на поставку.
> 
> Чтобы проверить статус удаления, используйте метод [/v1/cargoes/delete/status](#operation/CargoesAPI_CargoesDeleteStatus).
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
  "cargo_ids": [
    "box-001"
  ],
  "supply_id": 123456
}
```

## 返回响应 (Responses)

### HTTP 200 - Грузоместо удалено

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1CargoesDeleteResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/cargoes/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/cargoes/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/cargoes/delete", {
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
