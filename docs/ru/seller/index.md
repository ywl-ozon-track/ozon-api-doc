---
title: "Ozon Seller API (Основной API продавца)"
---

# Ozon Seller API (Основной API продавца)

Полный набор методов для работы с товарами, остатками, ценами, заказами FBS/FBO и финансами на Ozon.

## Навигация по разделам

| Категория | Количество методов | Перейти |
| :--- | :--- | :--- |
| **🔑 Информация по API-ключу** | `1 методов` | [Открыть раздел](/ru/seller/apikey/post-v1-roles) |
| **🏢 Информация по кабинету продавца** | `2 методов` | [Открыть раздел](/ru/seller/sellerinfo/post-v1-seller-info) |
| **📂 Атрибуты и характеристики Ozon** | `5 методов` | [Открыть раздел](/ru/seller/categoryapi/post-v1-description-category-tree) |
| **📦 Загрузка и обновление товаров** | `21 методов` | [Открыть раздел](/ru/seller/productapi/post-v3-product-import) |
| **🏷️ Штрихкоды товаров** | `3 методов` | [Открыть раздел](/ru/seller/barcodeapi/post-v1-barcode-add) |
| **💰 Цены и остатки товаров** | `11 методов` | [Открыть раздел](/ru/seller/pricesstocksapi/post-v2-products-stocks) |
| **🎁 Акции Ozon** | `16 методов` | [Открыть раздел](/ru/seller/promos/get-v1-actions) |
| **🎯 Стратегии ценообразования** | `12 методов` | [Открыть раздел](/ru/seller/pricingstrategyapi/post-v1-pricing-strategy-competitors-list) |
| **🎫 Пропуски на склад** | `7 методов` | [Открыть раздел](/ru/seller/pass/post-v1-pass-list) |
| **⭐ Сертификаты брендов** | `1 методов` | [Открыть раздел](/ru/seller/brandapi/post-v1-brand-company-certification-list) |
| **📜 Сертификаты качества** | `18 методов` | [Открыть раздел](/ru/seller/certificationapi/get-v1-product-certificate-accordance-types) |
| **🏭 Работа со складами FBS и rFBS** | `10 методов` | [Открыть раздел](/ru/seller/warehouseapi/post-v1-warehouse-list) |
| **📌 FBOWarehouse** | `1 методов` | [Открыть раздел](/ru/seller/fbowarehouse/post-v1-warehouse-ozon-list) |
| **📌 PolygonAPI** | `7 методов` | [Открыть раздел](/ru/seller/polygonapi/post-v1-polygon-create) |
| **📌 FBO** | `16 методов` | [Открыть раздел](/ru/seller/fbo/post-v2-posting-fbo-list) |
| **📌 FboSupplyRequest** | `25 методов` | [Открыть раздел](/ru/seller/fbosupplyrequest/post-v1-cluster-list) |
| **📌 FBS&rFBSMarks** | `7 методов` | [Открыть раздел](/ru/seller/fbsrfbsmarks/post-v4-posting-fbs-ship) |
| **📌 DeliveryFBS** | `29 методов` | [Открыть раздел](/ru/seller/deliveryfbs/post-v1-carriage-create) |
| **📌 DeliveryrFBS** | `7 методов` | [Открыть раздел](/ru/seller/deliveryrfbs/post-v2-fbs-posting-tracking-number-set) |
| **📌 FBS** | `25 методов` | [Открыть раздел](/ru/seller/fbs/post-v3-posting-fbs-unfulfilled-list) |
| **📌 RFBSReturnsAPI** | `3 методов` | [Открыть раздел](/ru/seller/rfbsreturnsapi/post-v2-returns-rfbs-list) |
| **📌 CancellationAPI** | `3 методов` | [Открыть раздел](/ru/seller/cancellationapi/post-v2-conditional-cancellation-list) |
| **↩️ Возвраты покупателей** | `4 методов` | [Открыть раздел](/ru/seller/returnsapi/post-v1-returns-list) |
| **📌 ReturnAPI** | `8 методов` | [Открыть раздел](/ru/seller/returnapi/post-v1-returns-company-fbs-info) |
| **🗨️ Чаты с покупателями** | `3 методов` | [Открыть раздел](/ru/seller/chatapi/post-v1-chat-send-file) |
| **📌 SupplierAPI** | `4 методов` | [Открыть раздел](/ru/seller/supplierapi/post-v2-invoice-create-or-update) |
| **📌 ReportAPI** | `11 методов` | [Открыть раздел](/ru/seller/reportapi/post-v1-report-info) |
| **📈 Аналитика продаж** | `3 методов` | [Открыть раздел](/ru/seller/analyticsapi/post-v2-analytics-stock-on-warehouses) |
| **📊 Финансы и отчёты** | `10 методов` | [Открыть раздел](/ru/seller/financeapi/post-v2-finance-realization) |
| **📌 Receipt** | `3 методов` | [Открыть раздел](/ru/seller/receipt/post-v1-receipts-get) |
| **📌 SellerRating** | `4 методов` | [Открыть раздел](/ru/seller/sellerrating/post-v1-rating-summary) |
| **📌 Digital** | `3 методов` | [Открыть раздел](/ru/seller/digital/post-v1-posting-digital-codes-upload) |
| **💬 Отзывы и вопросы покупателей** | `12 методов` | [Открыть раздел](/ru/seller/reviewapi/post-v1-review-comment-create) |
| **📌 Questions&Answers** | `8 методов` | [Открыть раздел](/ru/seller/questionsanswers/post-v1-question-answer-create) |
| **📌 BetaMethod** | `24 методов` | [Открыть раздел](/ru/seller/betamethod/post-v1-analytics-manage-stocks) |
| **📌 SupplyOrderAPI** | `4 методов` | [Открыть раздел](/ru/seller/supplyorderapi/post-v1-supply-order-act-summary-get) |
| **📌 FBSWarehouseSetup** | `17 методов` | [Открыть раздел](/ru/seller/fbswarehousesetup/post-v1-warehouse-fbs-create-drop-off-list) |
| **📌 rFBSWarehouseSetup** | `7 методов` | [Открыть раздел](/ru/seller/rfbswarehousesetup/post-v1-warehouse-erfbs-aggregator-create) |
| **📌 SellerActions** | `18 методов` | [Открыть раздел](/ru/seller/selleractions/post-v1-seller-actions-create-discount) |
| **📌 PromosBeta** | `4 методов` | [Открыть раздел](/ru/seller/promosbeta/post-v1-actions-auto-add-products-list) |
| **📌 Notification** | `7 методов` | [Открыть раздел](/ru/seller/notification/post-v1-notification-set) |
| **📌 FBOTransport** | `14 методов` | [Открыть раздел](/ru/seller/fbotransport/post-v2-cargoes-get) |
| **📌 DraftDirectFBP** | `10 методов` | [Открыть раздел](/ru/seller/draftdirectfbp/post-v1-fbp-draft-direct-seller-dlv-create) |
| **📌 DraftDropOffFBP** | `8 методов` | [Открыть раздел](/ru/seller/draftdropofffbp/post-v1-fbp-draft-drop-off-create) |
| **📌 OrderDirectFBP** | `5 методов` | [Открыть раздел](/ru/seller/orderdirectfbp/post-v1-fbp-order-direct-cancel) |
| **📌 DeliveryFBP** | `11 методов` | [Открыть раздел](/ru/seller/deliveryfbp/post-v1-fbp-act-from-create) |
| **📝 Черновики FBP pick-up** | `5 методов` | [Открыть раздел](/ru/seller/draftpickupfbp/post-v1-fbp-draft-pick-up-create) |
| **📄 Черновики FBP** | `3 методов` | [Открыть раздел](/ru/seller/deliveryfbpdraft/post-v1-fbp-warehouse-list) |
| **🏬 Поставки FBP drop-off** | `3 методов` | [Открыть раздел](/ru/seller/orderdropofffbp/post-v1-fbp-order-drop-off-cancel) |
| **📦 Поставки FBP pick-up** | `2 методов` | [Открыть раздел](/ru/seller/orderpickupfbp/post-v1-fbp-order-pick-up-cancel) |
| **🚛 Работа с грузоместами FBS** | `13 методов` | [Открыть раздел](/ru/seller/carriageapi/post-v1-carriage-container-create) |
| **💎 Premium-функционал** | `10 методов` | [Открыть раздел](/ru/seller/premium/post-v1-chat-send-message) |
| **❌ Причины отмены заказов** | `3 методов` | [Открыть раздел](/ru/seller/cancelreasonapi/post-v1-cancel-reason-list) |
| **🛣️ Доставка и логистика** | `5 методов` | [Открыть раздел](/ru/seller/deliveryapi/post-v1-delivery-check) |
| **📋 Управление заказами** | `4 методов` | [Открыть раздел](/ru/seller/orderapi/post-v1-order-cancel) |
| **📦 Заказы FBO** | `3 методов` | [Открыть раздел](/ru/seller/fbopostingapi/post-v1-posting-cancel) |
