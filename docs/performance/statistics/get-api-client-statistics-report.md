---
title: "获取отчёты"
description: "获取отчёты"
---

# 获取отчёты

<Badge type="info" text="GET" /> `/api/client/statistics/report`

## 接口概览

- **所属模块**：📊 广告效果与转化统计
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/statistics/report`
- **详细说明**：

> При успешном запросе ссылка на скачивание отчёта в формате CSV или ZIP появится в поле `link` при использовании метода [«Статус отчета»](#operation/StatisticsCheck).
> 
> Формат отчёта в заголовке ответа указан в поле `content-type`. Формат зависит от того, сколько кампаний в поле `campaigns` исходного запроса:
> - CSV — если в списке одна кампания.
> - ZIP-архив — если в списке несколько кампаний. Каждый файл соответствует одной кампании из списка. Имя файла вида `<идентификатор кампании>.csv`.
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `UUID` | `query` | 否 (No) | - |

## 返回响应 (Responses)

### HTTP 200 - Отчёт

### HTTP 404 - Некорректный UUID

```json
{
  "error": "report not found"
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
curl -X GET "https://api-performance.ozon.ru/api/client/statistics/report" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/statistics/report"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/statistics/report", {
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
