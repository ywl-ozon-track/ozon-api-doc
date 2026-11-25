---
title: "Метка организации для внешних рекламных кампаний"
description: "Метка организации для внешних рекламных кампаний"
---

# Метка организации для внешних рекламных кампаний

<Badge type="info" text="GET" /> `/api/client/organisation/vendor_tag`

## 接口概览

- **所属模块**：🌐 外部流量与品牌方分析
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/organisation/vendor_tag`
- **详细说明**：

> 
> Метод возвращает [префикс для метки UTM_CAMPAIGN](https://docs.ozon.ru/performance/analytics/#как-создать-ссылку-с-utm-метками) по идентификатору организации.
> 
> [Подробнее о ссылках для внешних рекламных кампаний](https://docs.ozon.ru/performance/analytics/)
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `orgId` | `query` | 是 (Yes) | - |

## 返回响应 (Responses)

### HTTP 200 - Метка организации

```json
{
  "tag": "vendor_org_42"
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
curl -X GET "https://api-performance.ozon.ru/api/client/organisation/vendor_tag" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/organisation/vendor_tag"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/organisation/vendor_tag", {
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
