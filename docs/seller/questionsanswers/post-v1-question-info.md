---
title: "查询вопросе详情"
description: "Информация о вопросе"
---

# 查询вопросе详情

<Badge type="tip" text="POST" /> `/v1/question/info`

## 接口概览

- **所属模块**：📌 Questions&Answers
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/question/info`

::: details 查看官方详细说明 (Официальное описание)
> Доступно для продавцов с подпиской [Premium Plus](https://seller-edu.ozon.ru/seller-rating/about-rating/subscription-premium-plus).
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "question_id": "string"
}
```

## 返回响应

### HTTP 200 - Информация о вопросе

```json
{
  "answers_count": "0",
  "author_name": "Пользователь OZON",
  "product_url": "https://www.ozon.ru/product/149829950/",
  "sku": 646399170,
  "id": "0192a009-769f-7ee9-b412-893045171a66",
  "text": "Можно выбрать цвет?",
  "question_link": "https://www.ozon.ru/product/149829950/questions/?qid=290125772&utm_campaign=reviews_sc_link&utm_medium=share_button&utm_source=smm",
  "published_at": "2024-10-08T10:09:29.099284Z",
  "status": "VIEWED"
}
```

### HTTP default - Ошибка

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v1QuestionAnswerCreateDefault"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/question/info" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/question/info"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/question/info", {
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
