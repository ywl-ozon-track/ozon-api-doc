---
title: "Отклонить заявку на скидку"
description: "Отклонить заявку на скидку"
---

# Отклонить заявку на скидку

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/decline`

## 接口概览

- **所属模块**：🎁 Promotions & Discounts
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/discounts-task/decline`
- **详细说明**：

> Вы можете отклонить заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
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
  "tasks": [
    {
      "id": 78901,
      "seller_comment": "Ok"
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Заявки отклонены

```json
{
  "result": {
    "fail_details": [
      {
        "task_id": 78901,
        "error_for_user": "Скидка отклонена"
      }
    ],
    "success_count": 5,
    "fail_count": 1
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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/decline" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/decline"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/decline", {
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
