---
title: "Отчёт по поисковым запросам"
description: "Отчёт по поисковым запросам"
---

# Отчёт по поисковым запросам

<Badge type="tip" text="POST" /> `/api/client/statistics/phrases`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/phrases`

::: details 查看官方详细说明 (Официальное описание)
> Метод находится на стадии тестирования.<br><br>
> Отчёт можно сформировать только для кампаний с оплатой за клик с признаком `placement = PLACEMENT_TOP_PROMOTION`.<br><br>
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/phrases/json`.
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体

Content-Type: `application/json`

## 返回响应

### HTTP 200 - Отчёт по поисковым запросам

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/extstatisticsStatisticsRequestID"
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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics/phrases" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/phrases"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/phrases", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({})
});
const data = await response.json();
console.log(data);
```
:::
