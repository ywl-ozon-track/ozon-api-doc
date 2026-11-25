---
title: "获取список комментариев на отзыв"
description: "Получить список комментариев на отзыв"
---

# 获取список комментариев на отзыв

<Badge type="tip" text="POST" /> `/v1/review/comment/list`

## 接口概览

- **所属模块**：💬 商品买家评价与问答
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/review/comment/list`

::: details 查看官方详细说明 (Официальное описание)
> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
> 
> Метод возвращает информацию по комментариям на отзывы, которые прошли модерацию.
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
  "review_id": "0000-0000",
  "sort_dir": "ASC",
  "filters": {
    "sku": 0,
    "published_from": "2026-03-10T14:08:00.257Z",
    "published_to": "2026-03-10T14:08:00.257Z"
  },
  "limit": 100,
  "offset": 123
}
```

## 返回响应

### HTTP 200 - Информация о комментариях на отзыв

```json
{
  "comments": [
    {
      "id": "1234-5678",
      "text": "comment text",
      "parent_comment_id": "3333-3333",
      "is_owner": true,
      "is_official": false,
      "is_published": true,
      "is_rejected": true,
      "likes_amount": 0,
      "dislikes_amount": 0,
      "deviation_reason": "string",
      "published_at": "2021-09-03T07:04:53.220Z"
    }
  ],
  "offset": 124
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
curl -X POST "https://api-seller.ozon.ru/v1/review/comment/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/review/comment/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/review/comment/list", {
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
