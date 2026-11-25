---
title: "ProductAPI ImportProductsV3"
description: "Создать или обновить товар"
---

# ProductAPI ImportProductsV3

<Badge type="tip" text="POST" /> `/v3/product/import`

## Endpoint Overview

- **Category**：📦 Products & Uploads
- **Method**：`POST`
- **Request URL**：`https://api-seller.ozon.ru/v3/product/import`

::: details View Official Description (Russian)
> 
> Метод для создания товаров и обновления информации о них.
> 
> В сутки можно создать или обновить определённое количество товаров. Чтобы узнать лимит, используйте
> [/v4/product/info/limit](#operation/ProductAPI_GetUploadQuota). Если количество загрузок и обновлений товаров
> превысит лимит, появится ошибка `item_limit_exceeded`.
> 
> У метода есть лимит на количество операций c товарами в минуту. Если вы превысите лимит, вернётся ошибка `429` с описанием в поле `message` и заголовками:
> - `Item-Retry-After` — время в минутах до обновления лимита. Для суточного лимита — время до 03:00 по московскому времени.
> - `Item-Rate-Limit-Remaining` — остаток операций до следующего сброса лимита.
> 
> В одном запросе можно передать до 100 товаров. Каждый товар — это отдельный элемент в массиве `items`. Укажите
> всю информацию о товаре: его характеристики, штрихкод, изображения, габариты, цену и валюту цены.
> 
> При обновлении товара передайте в запросе всю информацию о нём.
> 
> Указанная валюта должна совпадать с той, которая установлена в настройках личного кабинета. По умолчанию передаётся `RUB` — российский рубль.
> Например, если у вас установлена валюта юань, передавайте значение `CNY`, иначе вернётся ошибка.
> 
> Товар не будет создан или обновлён, если вы заполните неправильно или не укажете:
>    - **Обязательные характеристики**: характеристики отличаются для разных категорий — их можно посмотреть в [Базе знаний продавца](https://global-help.ozon.com/products/requirements/product-info/product-characteristics/#обязательные-характеристики) или получить методом [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes).
>    - **Реальные объёмно-весовые характеристики**: `depth`, `width`, `height`, `dimension_unit`, `weight`, `weight_unit`. Не пропускайте эти параметры в запросе и не указывайте 0.
> 
> Для некоторых характеристик можно использовать HTML-теги.
> 
> Получите статус модерации созданного или обновлённого товара в параметре `items.statuses.moderate_status` метода [/v3/product/info/list](#operation/ProductAPI_GetProductInfoList).
> После модерации товар появится в вашем личном кабинете, но не будет виден пользователям, пока вы не выставите его
> на продажу.
> 
> Каждый товар в запросе — отдельный элемент массива `items`.
> 
> Чтобы объединить две карточки, для каждой передайте `9048` в массиве `attributes`. Все атрибуты в этих карточках, кроме размера или цвета, должны совпадать.
> 
> ## Загрузка изображений
> 
> Для загрузки передайте в запросе ссылки на изображения в общедоступном облачном хранилище.
> Формат изображения по ссылке — JPG или PNG.
> 
> Изображения в массиве `images` располагайте в соответствии с желаемым порядком на сайте. Для загрузки главного
> изображения товара используйте параметр `primary_image`. Если не передать значение `primary_image`, главным будет
> первое изображение в массиве `images`.
> 
> Чтобы загрузить главное изображение для Ozon Селект:
> 1. Проверьте, что в ответе метода [/v1/description-category/attribute](#operation/DescriptionCategoryAPI_GetAttributes) возвращается характеристика с `result.id = 23500`.
> 2. Передайте ссылку на изображение в параметре `items.attributes.values.value` с `id = 23500`.
> 
> Для каждого товара вы можете загрузить до 50 изображений, включая главное.
> Если передать значение `primary_image`, максимальное количество изображений в `images` — 49.
> Если параметр `primary_image` пустой, то в `images` можно передать до 50 изображений.
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
> ## Загрузка видео
> 
> Для загрузки передайте в запросе ссылки на видео длительностью от 8 секунд до 5 минут. Формат видео по ссылке — MP4, MOV. 
> 
> [Подробнее о требованиях к видео в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/media/foto-i-video-tovara#каким-должно-быть-видео)
> 
> Для этого в параметре `complex_attributes` передайте объект. В нём в массиве `attributes` передайте 2 объекта с `complex_id = 100001`:
> 
> - В первом укажите `id = 21841` и в массиве `values` передайте объект с ссылкой на видео.
> 
>   __Пример__:
> 
>   ```
>   {
>     "complex_id": 100001,
>     "id": 21841,
>     "values": [
>       {
>         "value": "https://www.youtube.com/watch?v=ZwM0iBn03dY"
>       }
>     ]
>   }
>   ```
> 
> - Во втором укажите значение `id = 21837` и в массиве `values` передайте объект с названием видео.
> 
>   __Пример__:
> 
>   ```
>   {
>     "complex_id": 100001,
>     "id": 21837,
>     "values": [
>       {
>         "value": "videoName_1"
>       }
>     ]
>   }
>   ```
> 
> Если вы хотите загрузить несколько видео, передавайте значения для каждого видео в разных объектах массива `values`. Объекты в массиве располагайте в соответствии с желаемым порядком на сайте. Максимальное количество видео — 5.
> 
>   __Пример__:
> 
>   ```
>   {
>     "complex_id": 100001,
>     "id": 21837,
>     "values": [
>       {
>         "value": "videoName_1"
>       },
>       {
>         "value": "videoName_2"
>       }
>     ]
>   },
>   {
>     "complex_id": 100001,
>     "id": 21841,
>     "values": [
>       {
>         "value": "https://www.youtube.com/watch?v=ZwM0iBn03dY"
>       },
>       {
>         "value": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
>       }
>     ]
>   }
> ```
> 
> ## Загрузка видеообложки
> 
> Вы можете загрузить видеообложку через `complex_attributes`.
> 
> [Подробнее о требованиях к видеообложкам в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/trebovaniya-k-kartochkam-tovarov/media/foto-i-video-tovara#какои-должна-быть-видеообложка)
> 
> __Пример__:
> 
> ```
> "complex_attributes": [
>   {
>     "attributes": [
>       {
>         "id": 21845,
>         "complex_id": 100002,
>         "values": [
>           {
>           "dictionary_value_id": 0,
>           "value": "https://v.ozone.ru/vod/video-10/01GFATWQVCDE7G5B721421P1231Q7/asset_1.mp4"
>           }
>         ]
>       }
>     ]
>   }
> ]
> ```
> 
> [Подробнее о видеообложке в Базе знаний продавца](https://seller-edu.ozon.ru/libra/work-with-goods/zagruzka-tovarov/zagruzka-media/videooblozhka)
> 
> ## Загрузка таблицы размеров
> Вы можете добавить в карточку товара таблицу размеров, созданную с помощью [конструктора](https://table-constructor.ozon.ru/visual-editor). Передайте её в массиве `attributes` в формате JSON как Rich-контент `id = 13164`. <br><br>
> [Конструктор в формате JSON](https://table-constructor.ozon.ru/schema.json)<br>
> [Подробнее о конструкторе в Базе знаний продавца](https://global-help.ozon.com/products/requirements/size-table-constructor/)
> 
:::

## Parameters

| Parameter | In | Required | Description |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | No | Unique Client ID from seller cabinet |
| `Api-Key` | `header` | No | API Key generated in seller cabinet |

## Request Body

Content-Type: `application/json`

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/v3ImportProductsRequest"
}
```
:::

## Responses

### HTTP 200 - Создан новый товар / Информация о товаре обновлена

```json
{
  "result": {
    "task_id": 172549793
  }
}
```

### HTTP 400 - Неверный параметр

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 403 - Доступ запрещён

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 404 - Ответ не найден

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

### HTTP 409 - Конфликт запроса

::: details View Schema Definition
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

::: details View Schema Definition
```json
{
  "$ref": "#/components/schemas/rpcStatus"
}
```
:::

## Code Examples

::: code-group
```bash [cURL]
curl -X POST "https://api-seller.ozon.ru/v3/product/import" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v3/product/import"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v3/product/import", {
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
