---
title: "Редактировать черновик поставки со способом доставки сторонней транспортной компанией"
description: "Редактировать черновик поставки со способом доставки сторонней транспортной компанией"
---

# Редактировать черновик поставки со способом доставки сторонней транспортной компанией

<Badge type="tip" text="POST" /> `/v1/fbp/draft/direct/tpl-dlv/edit`

## 接口概览

- **所属模块**：📌 DraftDirectFBP
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/fbp/draft/direct/tpl-dlv/edit`
- **详细说明**：

> Вы можете оставить обратную связь о работе метода в [комментариях](https://dev.ozon.ru/community/1700-FBP-metody/) в сообществе разработчиков Ozon for dev.
> 


## 鉴权请求头 (Headers)

| 参数名 | 必填 | 示例 / 说明 |
| :--- | :--- | :--- |
| `Client-Id` | 是 | 卖家后台唯一识别码 |
| `Api-Key` | 是 | 卖家后台生成的 API 访问令牌 |

## 请求体 (Request Body)

Content-Type: `application/json`

::: details 查看 Request Schema 结构定义
```json
{
  "$ref": "#/components/schemas/v1FbpDraftDirectTplDlvEditRequest"
}
```
:::

## 返回响应 (Responses)

### HTTP 200 - Черновик изменён

```json
{
  "errors": [
    "ERROR_TYPE_UNSPECIFIED"
  ],
  "is_error": "true",
  "row_version": 0
}
```

### HTTP default - Ошибка

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/googlerpcStatus"
}
```
:::

## 调用示例代码

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/fbp/draft/direct/tpl-dlv/edit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/fbp/draft/direct/tpl-dlv/edit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/fbp/draft/direct/tpl-dlv/edit", {
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
