---
title: "Подтвердить состав грузоместа"
description: "Подтвердить состав грузоместа"
---

# Подтвердить состав грузоместа

<Badge type="tip" text="POST" /> `/v1/carriage/container/approve`

## 接口概览

- **所属模块**：🚛 FBS货包与容器运送
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/carriage/container/approve`
- **详细说明**：

> Вы можете оставить обратную связь по этому методу в комментариях к обсуждению в [сообществе разработчиков Ozon for dev](https://dev.ozon.ru/community/2059-Beta-metody-dlia-raboty-s-doveritelnoi-priemkoi/).


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
  "$ref": "#/components/schemas/carriagev1CarriageContainerApproveRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Состав подтверждён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/carriagev1CarriageContainerApproveResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/carriage/container/approve" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/carriage/container/approve"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/carriage/container/approve", {
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
