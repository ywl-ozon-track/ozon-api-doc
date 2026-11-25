---
title: "Получить описание товара"
description: "Получить описание товара"
---

# Получить описание товара

<Badge type="tip" text="POST" /> `/v1/product/info/description`

## 接口概览

- **所属模块**：📦 Загрузка и обновление товаров
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/info/description`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "offer_id": "5",
  "product_id": 73453843
}
```

## 返回响应 (Responses)

### HTTP 200 - Описание товара

```json
{
  "result": {
    "id": 73453843,
    "offer_id": "5",
    "name": "Онлайн курс по дрессировке собак \"Воспитанная собака за 3 недели\"",
    "description": "Экспресс-курс - это сокращённый вариант курса \"Собака: инструкция по применению\", дающий базовый минимум знаний, навыков, умений. Это оптимальный вариант для совершения первых шагов по воспитанию!<br/><br/>Что дает Экспресс-курс:<ul><li>Контакт с собакой </li></ul>К концу экспресс-курса дрессировки вы получаете воспитанного друга и соратника, который ориентируется на вас в любой ситуации.<ul><li>Уверенность в безопасности</li></ul>Благополучие собаки: больше не будет срывов с поводка, преследования кошек, попыток съесть что-либо на улице и т. д.<ul><li>Комфортная жизнь</li></ul>Принципиально другой уровень общения, без раздражения, криков и недовольства поведением животного."
  }
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v1/product/info/description" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/info/description"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/info/description", {
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
