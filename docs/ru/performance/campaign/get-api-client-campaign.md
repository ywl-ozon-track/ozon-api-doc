---
title: "Список кампаний"
description: "Список кампаний"
---

# Список кампаний

<Badge type="info" text="GET" /> `/api/client/campaign`

## Обзор метода

- **Категория**：📢 Кампании и рекламируемые объекты
- **HTTP-метод**：`GET`
- **URL запроса**：`https://api-performance.ozon.ru/api/client/campaign`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | Нет | Список идентификаторов кампаний, для которых необходимо вывести информацию.

Если передать значение, то в ответе будет информация по кампаниям, которые указаны
в поле `campaigns`. Если поле пустое, информация будет отдана по всем кампаниям.
 |
| `advObjectType` | `query` | Нет | Тип рекламируемой кампании:
- `SKU` — Оплата за клик;
- `BANNER` — Баннерная рекламная кампания;
- `SEARCH_PROMO` — Оплата за заказ;
- `VIDEO_BANNER` — Видеобаннер.

[Подробнее о типах рекламных кампаний](https://seller-edu.ozon.ru/docs/advertising/reklamnye-kampanii.html)
 |
| `state` | `query` | Нет | Состояние кампании.

Возможные значения:
- `CAMPAIGN_STATE_RUNNING` — активная кампания;
- `CAMPAIGN_STATE_PLANNED` — кампания, сроки проведения которой ещё не наступили;
- `CAMPAIGN_STATE_STOPPED` — кампания, приостановленная из-за нехватки бюджета;
- `CAMPAIGN_STATE_INACTIVE` — кампания, остановленная владельцем;
- `CAMPAIGN_STATE_ARCHIVED` — архивная кампания;
- `CAMPAIGN_STATE_MODERATION_DRAFT` — отредактированная кампания до отправки на модерацию;
- `CAMPAIGN_STATE_MODERATION_IN_PROGRESS` — кампания, отправленная на модерацию;
- `CAMPAIGN_STATE_MODERATION_FAILED` — кампания, непрошедшая модерацию;
- `CAMPAIGN_STATE_FINISHED` — кампания завершена, дата окончания в прошлом, такую кампанию нельзя изменить, можно
только клонировать или создать новую.
 |
| `page` | `query` | Нет | Номер страницы. Пагинация начинается с единицы. |
| `pageSize` | `query` | Нет | Размер страницы. |

## Ответы сервера

### HTTP 200 - Список всех кампаний

::: details Посмотреть схему данных (Schema)
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignsList"
}
```
:::

### HTTP default - Ошибка запроса

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
curl -X GET "https://api-performance.ozon.ru/api/client/campaign" \
  -H "Authorization: Bearer YOUR_OAUTH_TOKEN" \
  -H "Content-Type: application/json"
```

```python [Python]
import requests

url = "https://api-performance.ozon.ru/api/client/campaign"
headers = {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-performance.ozon.ru/api/client/campaign", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
  },
});
const data = await response.json();
console.log(data);
```
:::
