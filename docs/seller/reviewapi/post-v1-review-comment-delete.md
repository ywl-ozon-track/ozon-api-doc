---
title: "删除комментарий на отзыв"
description: "Удалить комментарий на отзыв"
---

# 删除комментарий на отзыв

<Badge type="tip" text="POST" /> `/v1/review/comment/delete`

## 接口概览

- **所属模块**：💬 商品买家评价与问答
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/review/comment/delete`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
>   Метод устаревает. Переключитесь на <a href="#operation/ReviewCommentDeleteV2">/v2/review/comment/delete</a>.
> </aside>
> 
> Доступно для продавцов с подпиской [Управление отзывами](https://seller-edu.ozon.ru/libra/seller-rating/podpiska-upravlenie-otzyvami) или [Premium Pro](https://seller-edu.ozon.ru/seller-rating/about-rating/podpiska-premium-pro).
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
  "$ref": "#/components/schemas/v1CommentDeleteRequest"
}
```
:::

## 返回响应

### HTTP 200 - Комментарий удалён

::: details 查看数据结构定义 (Schema)
```json
{
  "type": "object"
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
curl -X POST "https://api-seller.ozon.ru/v1/review/comment/delete" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/review/comment/delete"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/review/comment/delete", {
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
