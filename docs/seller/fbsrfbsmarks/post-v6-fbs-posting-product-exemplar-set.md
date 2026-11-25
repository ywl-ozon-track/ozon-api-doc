---
title: "检查与验证и сохранить данные экземпляров"
description: "检查与验证и сохранить данные экземпляров"
---

# 检查与验证и сохранить данные экземпляров

<Badge type="tip" text="POST" /> `/v6/fbs/posting/product/exemplar/set`

## 接口概览

- **所属模块**：📌 FBS&rFBSMarks
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/set`
- **详细说明**：

> Асинхронный метод:
> - для проверки наличия экземпляров в обороте в системе «Честный ЗНАК»;
> - для сохранения данных экземпляров. 
> 
> Чтобы получить результаты проверок, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5). 
> Для получения данных о созданных экземплярах, используйте метод [/v6/fbs/posting/product/exemplar/create-or-get](#operation/PostingAPI_FbsPostingProductExemplarCreateOrGetV6).
> 
> Если у вас несколько одинаковых товаров в отправлении, укажите один `product_id` и массив `exemplars` для каждого товара из отправления.
> 
> Всегда передавайте полный набор данных по экземплярам и продуктам. 
> 
> Например, в вашей системе 10 экземпляров. 
> Вы передали их для проверки и сохранения. 
> Потом добавили в своей системе ещё 60 экземпляров.
> При повторной передаче экземпляров для проверки и сохранения укажите все экземпляры: и старые, и только что добавленные.
> 
> Код ответа 200 не гарантирует, что данные об экземплярах приняты. 
> Он указывает, что создана задача для добавления информации. 
> Чтобы проверить статус задачи, используйте метод [/v5/fbs/posting/product/exemplar/status](#operation/PostingAPI_FbsPostingProductExemplarStatusV5).
> 


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
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarSetV6Request"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Запрос обработан

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
curl -X POST "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/set" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/set"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/set", {
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
