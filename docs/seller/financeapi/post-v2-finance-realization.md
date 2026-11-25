---
title: "Отчёт о реализации товаров (версия 2)"
description: "Отчёт о реализации товаров (версия 2)"
---

# Отчёт о реализации товаров (версия 2)

<Badge type="tip" text="POST" /> `/v2/finance/realization`

## 接口概览

- **所属模块**：📊 财务流水与结算报表
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/finance/realization`

::: details 查看官方详细说明 (Официальное описание)
> <aside class="warning">
> Метод недоступен для продавцов, которые заключили договор с ТОО «ОЗОН Маркетплейс Казахстан».
> 
> Метод позволяет получить отчёт за период не раньше августа 2023 года. Отчёты за более ранние периоды доступны в личном кабинете.
> </aside>
> 
> Отчёт о реализации доставленных и возвращённых товаров за месяц. Отмены и невыкупы не включаются.
> Соответствует разделу **Финансы → Документы → Отчёты о реализации → Отчёт о реализации товара** в личном кабинете.
> 
> Отчёт придёт не позднее 5-го числа следующего месяца.
> 
> [Подробнее об отчёте в Базе знаний продавца](https://seller-edu.ozon.ru/docs/finances-documents/calculations-documents/otchet-o-realizacii-tovarov.html)
> 
:::

## 请求参数

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 | 卖家后台唯一识别码 |
| `Api-Key` | `header` | 否 | 卖家后台生成的 API 访问令牌 |

## 请求体

Content-Type: `application/json`

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v2GetRealizationReportRequestV2"
}
```
:::

## 返回响应

### HTTP 200 - Отчёт о реализации

::: details 查看数据结构定义 (Schema)
```json
{
  "$ref": "#/components/schemas/v2GetRealizationReportResponseV2"
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
curl -X POST "https://api-seller.ozon.ru/v2/finance/realization" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/finance/realization"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/finance/realization", {
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
