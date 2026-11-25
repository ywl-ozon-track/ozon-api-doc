---
title: "Возможные причины отклонения сертификата"
description: "Возможные причины отклонения сертификата"
---

# Возможные причины отклонения сертификата

<Badge type="tip" text="POST" /> `/v1/product/certificate/rejection_reasons/list`

## Обзор метода

- **Категория**：📜 Сертификаты качества
- **HTTP-метод**：`POST`
- **URL запроса**：`https://api-seller.ozon.ru/v1/product/certificate/rejection_reasons/list`

## Параметры запроса

| Параметр | Расположение | Обязательный | Описание |
| :--- | :--- | :--- | :--- |
| `Client-Id` | `header` | Нет | Идентификатор клиента (Client ID) |
| `Api-Key` | `header` | Нет | API-ключ продавца (API Key) |

## Ответы сервера

### HTTP 200 - Причины отклонения сертификата

```json
{
  "result": [
    {
      "code": "incorrect_type",
      "name": "Необходим другой тип документа"
    },
    {
      "code": "not_all_pages",
      "name": "Предоставлены не все страницы документа"
    },
    {
      "code": "not_in_registry",
      "name": "Документа нет в едином реестре"
    },
    {
      "code": "not_match_information",
      "name": "Копия документа не соответствует указанной информации"
    },
    {
      "code": "not_signed",
      "name": "Документ не подписан или отсутствует печать"
    },
    {
      "code": "not_true",
      "name": "Информация в документе не соответствует действительности"
    },
    {
      "code": "not_valid_in_rf",
      "name": "Документ не действует на территории РФ"
    },
    {
      "code": "bad_quality",
      "name": "Качество копии не позволяет разобрать текст"
    },
    {
      "code": "annulled",
      "name": "Документ аннулирован в реестре"
    },
    {
      "code": "archive",
      "name": "Документ перенесен в архив"
    },
    {
      "code": "expired_document",
      "name": "Срок действия документа истек"
    }
  ]
}
```

### HTTP default - Ошибка

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
curl -X POST "https://api-seller.ozon.ru/v1/product/certificate/rejection_reasons/list" \
  -H "Client-Id: YOUR_CLIENT_ID" \
  -H "Api-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

```python [Python]
import requests

url = "https://api-seller.ozon.ru/v1/product/certificate/rejection_reasons/list"
headers = {
    "Client-Id": "YOUR_CLIENT_ID",
    "Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.post(url, headers=headers, json={})
print(response.status_code, response.json())
```

```javascript [Node.js]
const response = await fetch("https://api-seller.ozon.ru/v1/product/certificate/rejection_reasons/list", {
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
