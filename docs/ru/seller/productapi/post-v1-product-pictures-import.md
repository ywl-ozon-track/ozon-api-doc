---
title: "Загрузить или обновить изображения товара"
description: "Загрузить или обновить изображения товара"
---

# Загрузить или обновить изображения товара

<Badge type="tip" text="POST" /> `/v1/product/pictures/import`

## Обзор метода

- **Категория**：📦 Загрузка и обновление товаров
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/pictures/import`
- **Описание**：

> <aside class="warning">
> С 1 октября 2026 года метод будет отключён. Переключитесь на <a href="#operation/ProductImportPicturesV2">/v2/product/pictures/import</a>.
> </aside>
> 
> Метод для загрузки или обновления изображений товара.
> 
> При каждом вызове метода передавайте все изображения, которые должны быть на карточке товара. Например, если вы вызвали метод и загрузили 10 изображений, а затем вызвали метод второй раз и загрузили ещё одно,
> то все 10 предыдущих сотрутся.
> 
> Для загрузки передайте адрес ссылки на изображение в общедоступном облачном хранилище.
> Формат изображения по ссылке — JPG или PNG.
> 
> Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Главным будет
> первое изображение в массиве.
> 
> Для каждого товара вы можете загрузить до 50 изображений.
> 
> Для загрузки маркетингового цвета используйте поле `color_image`.
> 
> [Подробнее о требованиях к фото в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/media/foto-i-video-tovara#какие-общие-требования-есть-для-фотографии-товара)
> 
> Если вы хотите изменить состав или порядок изображений, получите информацию с помощью метода
> [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList) — в нём отображается текущий порядок и
> состав изображений. Скопируйте данные полей `images` и `color_image`, измените и дополните состав или
> порядок в соответствии с необходимостью.
> 
> Если вы обновили изображение по ссылке, но ссылка не изменилась, в методе [/v1/product/import/info](#operation/ProductAPI_GetImportProductsInfo) для изображения в параметре `result.items.status` вернётся `skipped`.
> 
> У метода есть лимит на количество операций c товарами в минуту и в сутки. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
> - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени.
> - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита.
> 
> Чтобы узнать лимит, используйте [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota).
> 

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Тело запроса

Content-Type: `application/json`

```json
{
  "color_image": "https://example.com/cloud-storage/color/marketing-color-red.jpg",
  "images": [
    "https://example.com/cloud-storage/images/main-image-front.jpg",
    "https://example.com/cloud-storage/images/secondary-image-side.jpg",
    "https://example.com/cloud-storage/images/secondary-image-back.jpg",
    "https://example.com/cloud-storage/images/secondary-image-detail1.jpg",
    "https://example.com/cloud-storage/images/secondary-image-detail2.jpg"
  ],
  "product_id": 123456789
}
```

## Ответы сервера

### HTTP 200 - Предварительный результат работы метода

```json
{
  "result": {
    "pictures": [
      {
        "is_color": true,
        "is_primary": true,
        "product_id": 123456789,
        "state": "uploaded",
        "url": ""
      }
    ]
  }
}
```

### HTTP 400 - Неверный параметр

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 429 - Слишком много запросов

```json
{
  "code": "RESOURCE_EXHAUSTED",
  "message": "You have reached operation items limits. Retry after 120 seconds. Remaining 10 items"
}
```

### HTTP 500 - Внутренняя ошибка сервера

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Примеры кода

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v1/product/pictures/import" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/pictures/import"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/pictures/import", {
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
