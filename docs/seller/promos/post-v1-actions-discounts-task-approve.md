---
title: "Согласовать заявку на скидку"
description: "Согласовать заявку на скидку"
---

# Согласовать заявку на скидку

<Badge type="tip" text="POST" /> `/v1/actions/discounts-task/approve`

## 接口概览

- **所属模块**：🎁 官方促销与营销活动
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/actions/discounts-task/approve`

::: details 查看官方详细说明 (Официальное описание)
> Вы можете согласовывать заявки в статусах: `NEW` — новые, `SEEN` — просмотренные.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "tasks": [
    {
      "id": 78901,
      "approved_price": 12500,
      "seller_comment": "ok",
      "approved_quantity_min": 3,
      "approved_quantity_max": 7
    }
  ]
}
```

## 返回响应

### HTTP 200 - Заявки согласованы

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
curl -X POST "https://api-seller.ozon.ru/v1/actions/discounts-task/approve" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/actions/discounts-task/approve"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/actions/discounts-task/approve", {
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
