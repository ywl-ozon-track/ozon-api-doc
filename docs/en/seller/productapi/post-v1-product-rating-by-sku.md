---
title: "Получить контент-рейтинг товаров по SKU"
description: "Получить контент-рейтинг товаров по SKU"
---

# Получить контент-рейтинг товаров по SKU

<Badge type="tip" text="POST" /> `/v1/product/rating-by-sku`

## 接口概览

- **所属模块**：📦 Products & Uploads
- **请求方法**：`POST`
- **接口地址**：`https://api-seller.ozon.ru/v1/product/rating-by-sku`
- **详细说明**：

> Метод для получения контент-рейтинга товаров, а также рекомендаций по его увеличению.
> 
> [Подробнее о контент-рейтинге](https://seller-edu.ozon.ru/docs/work-with-goods/content-rating.html)
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
  "skus": [
    "179737222"
  ]
}
```

## 返回响应 (Responses)

### HTTP 200 - Контент-рейтинг товаров

```json
{
  "products": [
    {
      "sku": 179737222,
      "rating": 42.5,
      "groups": [
        {
          "key": "media",
          "name": "Медиа",
          "rating": 70,
          "weight": 25,
          "conditions": [
            {
              "key": "media_images_2",
              "description": "Добавлено 2 изображения",
              "fulfilled": true,
              "cost": 50
            },
            {
              "key": "media_images_3",
              "description": "Добавлено 3 изображения и более",
              "fulfilled": true,
              "cost": 20
            },
            {
              "key": "media_image_3d",
              "description": "Добавлено 3D-изображение",
              "fulfilled": false,
              "cost": 15
            },
            {
              "key": "media_video",
              "description": "Добавлено видео",
              "fulfilled": false,
              "cost": 15
            }
          ],
          "improve_attributes": [
            {
              "id": 4074,
              "name": "Код ролика на YouTube"
            },
            {
              "id": 4080,
              "name": "3D-изображение"
            }
          ],
          "improve_at_least": 2
        },
        {
          "key": "important_attributes",
          "name": "Важные атрибуты",
          "rating": 50,
          "weight": 30,
          "conditions": [
            {
              "key": "important_2",
              "description": "Заполнено 2 атрибута и более",
              "fulfilled": true,
              "cost": 50
            },
            {
              "key": "important_50_percent",
              "description": "Заполнено более 50% атрибутов",
              "fulfilled": false,
              "cost": 25
            },
            {
              "key": "important_70_percent",
              "description": "Заполнено более 70% атрибутов",
              "fulfilled": false,
              "cost": 25
            }
          ],
          "improve_attributes": [
            {
              "id": 4385,
              "name": "Гарантийный срок"
            },
            {
              "id": 4389,
              "name": "Страна-изготовитель"
            },
            {
              "id": 8513,
              "name": "Количество в упаковке, шт"
            },
            {
              "id": 8590,
              "name": "Макс. диагональ, дюймы"
            },
            {
              "id": 8591,
              "name": "Мин. диагональ, дюймы"
            },
            {
              "id": 9336,
              "name": "Модель браслета/умных часов"
            },
            {
              "id": 11046,
              "name": "Покрытие"
            },
            {
              "id": 11047,
              "name": "Прозрачность покрытия"
            },
            {
              "id": 11048,
              "name": "Дополнительные свойства покрытия"
            },
            {
              "id": 11049,
              "name": "Вид стекла"
            },
            {
              "id": 11603,
              "name": "Размер циферблата"
            }
          ],
          "improve_at_least": 6
        },
        {
          "key": "other_attributes",
          "name": "Остальные атрибуты",
          "rating": 0,
          "weight": 25,
          "conditions": [
            {
              "key": "other_2",
              "description": "Заполнено 2 атрибута и более",
              "fulfilled": false,
              "cost": 50
            },
            {
              "key": "other_50_percent",
              "description": "Заполнено более 50% атрибутов",
              "fulfilled": false,
              "cost": 50
            }
          ],
          "improve_attributes": [
            {
              "id": 4382,
              "name": "Размеры, мм"
            }
          ],
          "improve_at_least": 1
        },
        {
          "key": "text",
          "name": "Текстовое описание",
          "rating": 50,
          "weight": 20,
          "conditions": [
            {
              "key": "text_annotation_100_chars",
              "description": "Аннотация более 100 знаков",
              "fulfilled": true,
              "cost": 25
            },
            {
              "key": "text_annotation_500_chars",
              "description": "Аннотация более 500 знаков",
              "fulfilled": true,
              "cost": 25
            },
            {
              "key": "text_rich",
              "description": "Заполнен Rich-контент",
              "fulfilled": false,
              "cost": 100
            }
          ],
          "improve_attributes": [
            {
              "id": 11254,
              "name": "Rich-контент JSON"
            }
          ],
          "improve_at_least": 1
        }
      ]
    }
  ]
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
curl -X POST "https://api-seller.ozon.ru/v1/product/rating-by-sku" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/rating-by-sku"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/rating-by-sku", {
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
