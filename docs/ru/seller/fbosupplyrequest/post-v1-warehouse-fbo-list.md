---
title: "Поиск точек для отгрузки поставки"
description: "Поиск точек для отгрузки поставки"
---

# Поиск точек для отгрузки поставки

<Badge type="tip" text="POST" /> `/v1/warehouse/fbo/list`

## 接口概览

- **所属模块**：📌 FboSupplyRequest
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/warehouse/fbo/list`
- **详细说明**：

> Используйте метод, чтобы найти точки отгрузки для кросс-докинга и прямых поставок.
> 
> Вы можете посмотреть адреса всех точек на карте и в виде таблицы в [Базе знаний](https://seller-edu.ozon.ru/fbo/warehouses/adresa-skladov-fbo).
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/v1DraftGetWarehouseFboListRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Информация о складах

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1DraftGetWarehouseFboListResponse"
}
```
:::

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
curl -X POST "https://api-seller.ozon.ru/v1/warehouse/fbo/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/warehouse/fbo/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/warehouse/fbo/list", {
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
