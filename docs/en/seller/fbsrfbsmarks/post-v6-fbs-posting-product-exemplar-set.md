---
title: "PostingAPI FbsPostingProductExemplarSetV6"
description: "Проверить и сохранить данные экземпляров"
---

# PostingAPI FbsPostingProductExemplarSetV6

<Badge type="tip" text="POST" /> `/v6/fbs/posting/product/exemplar/set`

## Endpoint Overview

- **Category**：📌 FBS&rFBSMarks
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v6/fbs/posting/product/exemplar/set`

::: details View Official Description (Russian)
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
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v6FbsPostingProductExemplarSetV6Request"
}
```
:::

## Responses

### HTTP 200 - Запрос обработан

### HTTP default - Ошибка

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

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
