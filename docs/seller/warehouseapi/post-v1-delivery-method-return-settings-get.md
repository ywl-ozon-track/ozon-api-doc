---
title: "获取информацию по возвратным настройкам rFBS и rFBS Express"
description: "Получить информацию по возвратным настройкам rFBS и rFBS Express"
---

# 获取информацию по возвратным настройкам rFBS и rFBS Express

<Badge type="tip" text="POST" /> `/v1/delivery-method/return/settings/get`

## 接口概览

- **所属模块**：🏭 FBS/rFBS仓库管理
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/delivery-method/return/settings/get`

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
  "$ref": "#/components/schemas/v1GetDeliveryMethodReturnSettingsV1Request"
}
```
:::

## 返回响应

### HTTP 200 - Информация получена

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1GetDeliveryMethodReturnSettingsV1Response"
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
curl -X POST "https://api-seller.ozon.ru/v1/delivery-method/return/settings/get" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/delivery-method/return/settings/get"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/delivery-method/return/settings/get", {
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
