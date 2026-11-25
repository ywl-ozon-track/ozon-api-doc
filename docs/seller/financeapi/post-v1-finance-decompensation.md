---
title: "Отчёт о декомпенсациях"
description: "Отчёт о декомпенсациях"
---

# Отчёт о декомпенсациях

<Badge type="tip" text="POST" /> `/v1/finance/decompensation`

## 接口概览

- **所属模块**：📊 财务流水与结算报表
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/finance/decompensation`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения отчёта о декомпенсациях. Соответствует отчёту из раздела **Финансы → Документы → Компенсации и прочие начисления** в личном кабинете.
> 
:::

## 鉴权请求头

| 参数名 | 必填 | 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

```json
{
  "date": "2023-09",
  "language": "RU"
}
```

## 返回响应

### HTTP 200 - Отчёт о декомпенсациях

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/CreateReportResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/finance/decompensation" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/finance/decompensation"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/finance/decompensation", {
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
