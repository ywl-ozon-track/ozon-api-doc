---
title: "获取广告推广营销活动列表"
description: "获取广告推广营销活动列表"
---

# 获取广告推广营销活动列表

<Badge type="info" text="GET" /> `/api/client/campaign`

## 接口概览

- **所属模块**：📢 广告推广计划与对象
- **请求方法**：`GET`
- **接口地址**：`https://api-performance.ozon.ru/api/client/campaign`

## 请求参数 (Parameters)

| 参数名 | 位置 (In) | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `campaignIds` | `query` | 否 (No) | Список идентификаторов кампаний, для которых необходимо вывести информацию.

Если передать значение, то в ответе будет информация по кампаниям, которые указаны
в поле `campaigns`. Если поле пустое, информация будет отдана по всем кампаниям.
 |
| `advObjectType` | `query` | 否 (No) | Тип рекламируемой кампании:
- `SKU` — Оплата за клик;
- `BANNER` — Баннерная рекламная кампания;
- `SEARCH_PROMO` — Оплата за заказ;
- `VIDEO_BANNER` — Видеобаннер.

[Подробнее о типах рекламных кампаний](https://seller-edu.ozon.ru/docs/advertising/reklamnye-kampanii.html)
 |
| `state` | `query` | 否 (No) | Состояние кампании.

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
| `page` | `query` | 否 (No) | Номер страницы. Пагинация начинается с единицы. |
| `pageSize` | `query` | 否 (No) | Размер страницы. |

## 返回响应 (Responses)

### HTTP 200 - Список всех кампаний

::: details 查看 Response Schema 定义
```json
{
  "$ref": "#/components/schemas/extcampaignCampaignsList"
}
```
:::

### HTTP default - Ошибка запроса

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
