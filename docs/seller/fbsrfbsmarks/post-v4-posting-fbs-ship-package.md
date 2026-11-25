---
title: "Частичная сборка отправления (версия 4)"
description: "Частичная сборка отправления (версия 4)"
---

# Частичная сборка отправления (версия 4)

<Badge type="tip" text="POST" /> `/v4/posting/fbs/ship/package`

## 接口概览

- **所属模块**：📌 FBS&rFBSMarks
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v4/posting/fbs/ship/package`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> Ответ с кодом <tt>200</tt> не гарантирует успешную сборку отправления. Используйте метод <a href="#operation/PostingAPI_GetFbsPostingV3">/v3/posting/fbs/get</a>, чтобы проверить, что отправление собрано. Если в ответе указан <tt>result.substatus = ship_failed</tt>, повторите сборку отправления.
> </aside>
> 
> Если в запросе передать часть товаров из отправления, метод разделит первичное отправление на две части. 
> В первичном несобранном отправлении останется часть товаров, которую не передали в запросе.
> 
> По умолчанию статус созданных отправлений `awaiting_packaging` — ожидает сборки.
> 
> Статус изначального отправления изменится только после изменения статуса отправлений, на которые он разделился.
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Request"
}
```
:::

## 返回响应

### HTTP 200 - Результат сборки отправления

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v4FbsPostingShipPackageV4Response"
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
curl -X POST "https://api-seller.ozon.ru/v4/posting/fbs/ship/package" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/posting/fbs/ship/package"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/posting/fbs/ship/package", {
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
