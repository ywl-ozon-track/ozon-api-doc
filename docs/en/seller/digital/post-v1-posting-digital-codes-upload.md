---
title: "Загрузить коды цифровых товаров для отправления"
description: "Загрузить коды цифровых товаров для отправления"
---

# Загрузить коды цифровых товаров для отправления

<Badge type="tip" text="POST" /> `/v1/posting/digital/codes/upload`

## 接口概览

- **所属模块**：📌 Digital
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/posting/digital/codes/upload`
- **详细说明**：

> Метод доступен только продавцам, работающим с цифровыми товарами. Вы можете загрузить коды цифровых товаров в течение 24 часов с момента получения заказа.
> 
> Передайте все коды цифровых товаров к каждому товару в заказе за один запрос. Если передадите не все коды, запрос вернётся с ошибкой.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "exemplars_by_sku": [
    {
      "exemplar_qty": 3,
      "not_available_exemplar_qty": 0,
      "sku": "6605735423",
      "exemplar_keys": [
        "4235234234",
        "431234234",
        "912382368"
      ]
    }
  ],
  "posting_number": "33920151-0719-1"
}
```

## 返回响应 (Responses)

### HTTP 200 - Коды цифровых товаров загружены

```json
{
  "exemplars_by_sku": [
    {
      "sku": 123456,
      "received_qty": 3,
      "rejected_qty": 1,
      "failed_exemplars": [
        {
          "key": "23434252345",
          "message": "Некорректный формат кода"
        }
      ]
    }
  ]
}
```

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
curl -X POST "https://api-seller.ozon.ru/v1/posting/digital/codes/upload" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/posting/digital/codes/upload"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/posting/digital/codes/upload", {
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
