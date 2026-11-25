---
title: "检查与验证код курьера"
description: "检查与验证код курьера"
---

# 检查与验证код курьера

<Badge type="tip" text="POST" /> `/v1/posting/fbs/pick-up-code/verify`

## 接口概览

- **所属模块**：📌 FBS
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify`
- **详细说明**：

> Метод позволяет проверить код курьера при передаче отправлений realFBS Express. Подробнее о передаче отправлений в [Базе знаний продавца](https://seller-edu.ozon.ru/contract-for-sellers/regulations-fbs-realfbs/reglament-prodaji-so-svoego-sklada-fbs-express#7-порядок-передачи-отправлении-через-партнёров-ozon-при-экспресс-доставке).


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "pickup_code": "342341212312",
  "posting_number": "228245774-2229-1"
}
```

## 返回响应 (Responses)

### HTTP 200 - Результат проверки

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/v1PostingFBSPickupCodeVerifyResponse"
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
curl -X POST "https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/fbs/pick-up-code/verify", {
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
