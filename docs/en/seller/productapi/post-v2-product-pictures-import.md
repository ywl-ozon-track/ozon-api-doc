---
title: "Загрузить или обновить изображения товара"
description: "Загрузить или обновить изображения товара"
---

# Загрузить или обновить изображения товара

<Badge type="tip" text="POST" /> `/v2/product/pictures/import`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v2/product/pictures/import`
- **详细说明**：

> При каждом вызове метода передавайте все изображения, которые должны быть на карточке товара. Например, если вы вызвали метод и загрузили 10 изображений, а затем вызвали метод второй раз и загрузили ещё одно,
> то все 10 предыдущих сотрутся.
> 
> Для загрузки передайте адрес ссылки на изображение в общедоступном облачном хранилище.
> Формат изображения по ссылке — JPG или PNG.
> 
> Изображения в массиве `items.images` располагайте в соответствии с желаемым порядком на сайте. Главным будет
> первое изображение в массиве.
> 
> Для каждого товара вы можете загрузить до 50 изображений.
> 
> Для загрузки маркетингового цвета используйте поле `items.color_image`.
> 
> [Подробнее о требованиях к фото в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/media/foto-i-video-tovara#какие-общие-требования-есть-для-фотографии-товара)
> 
> Если вы хотите изменить состав или порядок изображений, получите информацию с помощью метода
> [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList) — в нём отображается текущий порядок и
> состав изображений. Скопируйте данные полей `items.images` и `items.color_image`, измените и дополните состав или
> порядок при необходимости.
> 
> У метода есть лимит на количество операций c товарами в минуту и в сутки. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
> - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени.
> - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита.
> 
> Чтобы узнать лимит, используйте метод [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota).
> 


## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | 否 (No) | Ozon 卖家唯一 Client ID |
| `Api-Key` | `header` | 否 (No) | Ozon 开发者 API Key |

## 请求体 (Request Body)

Content-Type: `application/json`

```json
{
  "items": [
    {
      "offer_id": "PROD-2023-001",
      "primary_image": "https://example.com/cloud-storage/images/main-image-front.jpg",
      "color_image": "",
      "images": []
    }
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Изображения загружены или обновлены

```json
{
  "task_id": 0
}
```

### HTTP 400 - Неверный параметр

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 429 - Слишком много запросов

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 500 - Внутренняя ошибка сервера

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
curl -X POST "https://api-seller.ozon.ru/v2/product/pictures/import" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v2/product/pictures/import"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v2/product/pictures/import", {
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
