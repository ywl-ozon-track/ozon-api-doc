---
title: "获取вопросов列表"
description: "获取вопросов列表"
---

# 获取вопросов列表

<Badge type="tip" text="POST" /> `/v1/question/list`

## 接口概览

- **所属模块**：📌 Questions&Answers
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/question/list`
- **详细说明**：

> Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "filter": {
    "date_from": "2019-08-24T14:15:22Z",
    "date_to": "2019-08-24T14:15:22Z",
    "status": "ALL"
  },
  "limit": 100,
  "last_id": "",
  "sort_dir": "ASC"
}
```

## 返回响应 (Responses)

### HTTP 200 - Список вопросов

```json
{
  "has_next": true,
  "questions": [
    {
      "answers_count": 1,
      "author_name": "Пользователь OZON",
      "id": "019294ff-6888-7009-89d8-26569e4e450d",
      "sku": 646399170,
      "product_url": "https://www.ozon.ru/product/1649246352/",
      "published_at": "2024-08-14T12:02:01.889Z",
      "question_link": "https://www.ozon.ru/product/1649246352/questions/?qid=290180206&utm_campaign=reviews_sc_link&utm_medium=share_button&utm_source=smm",
      "text": "Новый вопрос о товаре Света",
      "status": "PROCESSED"
    }
  ],
  "last_id": "019228a7-91d8-76af-a73a-e989dfac7ac8"
}
```

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1QuestionAnswerCreateDefault"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/question/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/question/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/question/list", {
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
