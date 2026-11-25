---
title: "Лимиты ставок для инструментов продвижения"
description: "Лимиты ставок для инструментов продвижения"
---

# Лимиты ставок для инструментов продвижения

<Badge type="info" text="GET" /> `/api/client/limits/list`

## 接口概览

- **所属模块**：📢 Campaigns & Objects
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/limits/list`
- **详细说明**：

> 
> Вы можете получить лимиты ставок по инструментам:
> - Оплата за заказ:
>   - Минимальная и максимальная ставка для инструмента.
>   - Минимальные ставки за заказ для некоторых категорий товаров.
> - Спецразмещение и Оплата за клик:
>   - Минимальная и максимальная ставка за клик.
>   - Минимальные ставки за клик для некоторых категорий товаров.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 返回响应 (Responses)

### HTTP 200 - Лимиты ставок

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignListLimitsResponse"
}
```
:::

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
curl -X GET "https://api-performance.ozon.ru/api/client/limits/list" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/limits/list"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/limits/list", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
