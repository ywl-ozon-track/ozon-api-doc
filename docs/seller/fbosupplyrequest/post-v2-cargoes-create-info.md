---
title: "获取информацию по установке грузомест"
description: "Получить информацию по установке грузомест"
---

# 获取информацию по установке грузомест

<Badge type="tip" text="POST" /> `/v2/cargoes/create/info`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/cargoes/create/info`

::: details 查看官方详细说明 (Официальное описание)
> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1721-Novyi-metod-dlia-peredachi-offer-id-pri-ustanovke-GM) в сообществе разработчиков Ozon for dev.
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v2CargoesCreateInfoV2Request"
}
```
:::

## 返回响应

### HTTP 200 - Результат запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v2CargoesCreateInfoV2Response"
}
```
:::

### HTTP default - Ошибка

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v2/cargoes/create/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/cargoes/create/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/cargoes/create/info", {
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
