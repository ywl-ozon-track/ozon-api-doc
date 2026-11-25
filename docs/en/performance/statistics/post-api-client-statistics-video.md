---
title: "Статистика по показам видеобаннера"
description: "Статистика по показам видеобаннера"
---

# Статистика по показам видеобаннера

<Badge type="tip" text="POST" /> `/api/client/statistics/video`

## 接口概览

- **所属模块**：📊 Advertising Statistics
- **请求方法**：`POST`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/video`
- **详细说明**：

> 
> В запросе укажите временной промежуток с помощью полей `dateFrom` и `dateTo`.
> 
> Performance API асинхронный. Поэтому в результате запроса будет не сам отчёт, а уникальный идентификатор
> отправленного запроса, с помощью которого можно [проверить статус формирования отчёта](#operation/StatisticsCheck) и [скачать отчёт](#operation/DownloadStatistics).
> Формат отчёта — CSV. 
> 
> Отчёт содержит:
> - название;
> - идентификатор кампании;
> - период отчёта;
> - идентификатор баннера;
> - показы;
> - клики;
> - охват;
> - CTR;
> - доля видимых показов;
> - досмотры по квартилям: 25%, 50%, 75% и 100%;
> - доля досмотров: 25%, 50%, 75% и 100%;
> - просмотры со звуком;
> - заказы;
> - расход.
> 
> Чтобы запросить отчёт в формате JSON, добавьте в адрес метода `/json` и отправьте запрос по адресу `/api/client/statistics/video/json`.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Authorization` | 是 | Bearer 格式的 OAuth 2.0 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

## 返回响应 (Responses)

### HTTP 200 - Статистика по показам видеобаннера

```json
{
  "UUID": "0c159c60-ab92-46d9-9a6b-d225dbf5c7b1",
  "vendor": true
}
```

### HTTP default - Ошибка запроса

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
curl -X POST "https://api-performance.ozon.ru/api/client/statistics/video" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/video"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/video", {
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
