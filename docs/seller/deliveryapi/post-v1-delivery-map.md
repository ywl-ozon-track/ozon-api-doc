---
title: "Отрисовать точки на карте"
description: "Отрисовать точки на карте"
---

# Отрисовать точки на карте

<Badge type="tip" text="POST" /> `/v1/delivery/map`

## 接口概览

- **所属模块**：🛣️ 物流服务与配送规则
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/delivery/map`

::: details 查看官方详细说明 (Официальное описание)
> Возвращает объединённые кластеры точек самовывоза на области из параметра `viewport`. 
> 
> Используйте значения из параметра `clusters.viewport`, чтобы получить список точек или мелких кластеров внутри большого кластера.
> 
> Используйте метод [/v1/delivery/point/info](#operation/DeliveryPointInfo), чтобы получить информацию о конкретной точке самовывоза.
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
  "$ref": "#/components/schemas/v1DeliveryMapRequest"
}
```
:::

## 返回响应

### HTTP 200 - Успешно

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1DeliveryMapResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/delivery/map" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery/map"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery/map", {
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
