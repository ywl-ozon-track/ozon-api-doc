---
title: "Лимиты на ассортимент, создание и обновление товаров"
description: "Лимиты на ассортимент, создание и обновление товаров"
---

# Лимиты на ассортимент, создание и обновление товаров

<Badge type="tip" text="POST" /> `/v4/product/info/limit`

## 接口概览

- **所属模块**：📦 商品管理与创建更新
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v4/product/info/limit`

::: details 查看官方详细说明 (Официальное описание)
> Метод для получения информации о лимитах:
> - На ассортимент — сколько всего товаров можно создать в вашем личном кабинете.
> - На создание товаров — сколько товаров можно создать в сутки.
> - На обновление товаров — сколько товаров можно отредактировать в сутки.
> - На работу с товарами — сколько товаров можно создать в минуту.
> - На разархивацию — сколько товаров можно восстановить из архива за сутки.
> 
> Если у вас есть лимит на ассортимент и вы израсходуете его, вы не сможете создавать новые товары.
> 
> [Подробнее о лимитах в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/zagruzka-tovarov/creating-goods/limit)
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 返回响应

### HTTP 200 - Лимиты на ассортмент, создание и обновление товаров

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v4GetUploadQuotaResponse"
}
```
:::

### HTTP 400 - Неверный параметр

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v4/product/info/limit" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v4/product/info/limit"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v4/product/info/limit", {
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
