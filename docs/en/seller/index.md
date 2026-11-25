---
title: "Ozon Seller API"
---

# Ozon Seller API

Полный набор методов для работы с товарами, остатками, ценами, заказами FBS/FBO и финансами на Ozon.

## 业务模块导航

| 模块分类 | 包含端点数 | 快速直达 |
| :--- | :--- | :--- |
| **🔑 API Keys & Permissions** | `1` 个接口 | [进入模块](/en/seller/apikey/post-v1-roles) |
| **🏢 Seller Account & Profile** | `2` 个接口 | [进入模块](/en/seller/sellerinfo/post-v1-seller-info) |
| **📂 Categories & Attributes** | `5` 个接口 | [进入模块](/en/seller/categoryapi/post-v1-description-category-tree) |
| **📦 Products & Uploads** | `21` 个接口 | [进入模块](/en/seller/productapi/post-v3-product-import) |
| **🏷️ Product Barcodes** | `3` 个接口 | [进入模块](/en/seller/barcodeapi/post-v1-barcode-add) |
| **💰 Prices & Stocks** | `11` 个接口 | [进入模块](/en/seller/pricesstocksapi/post-v2-products-stocks) |
| **🎁 Promotions & Discounts** | `16` 个接口 | [进入模块](/en/seller/promos/get-v1-actions) |
| **🎯 Pricing Strategies & Buybox** | `12` 个接口 | [进入模块](/en/seller/pricingstrategyapi/post-v1-pricing-strategy-competitors-list) |
| **🎫 Warehouse Gate Passes** | `7` 个接口 | [进入模块](/en/seller/pass/post-v1-pass-list) |
| **⭐ Brand Certifications** | `1` 个接口 | [进入模块](/en/seller/brandapi/post-v1-brand-company-certification-list) |
| **📜 Quality Certificates** | `18` 个接口 | [进入模块](/en/seller/certificationapi/get-v1-product-certificate-accordance-types) |
| **🏭 Warehouses (FBS & rFBS)** | `10` 个接口 | [进入模块](/en/seller/warehouseapi/post-v1-warehouse-list) |
| **📌 FBOWarehouse** | `1` 个接口 | [进入模块](/en/seller/fbowarehouse/post-v1-warehouse-ozon-list) |
| **📌 PolygonAPI** | `7` 个接口 | [进入模块](/en/seller/polygonapi/post-v1-polygon-create) |
| **📌 FBO** | `16` 个接口 | [进入模块](/en/seller/fbo/post-v2-posting-fbo-list) |
| **📌 FboSupplyRequest** | `25` 个接口 | [进入模块](/en/seller/fbosupplyrequest/post-v1-cluster-list) |
| **📌 FBS&rFBSMarks** | `7` 个接口 | [进入模块](/en/seller/fbsrfbsmarks/post-v4-posting-fbs-ship) |
| **📌 DeliveryFBS** | `29` 个接口 | [进入模块](/en/seller/deliveryfbs/post-v1-carriage-create) |
| **📌 DeliveryrFBS** | `7` 个接口 | [进入模块](/en/seller/deliveryrfbs/post-v2-fbs-posting-tracking-number-set) |
| **📌 FBS** | `25` 个接口 | [进入模块](/en/seller/fbs/post-v3-posting-fbs-unfulfilled-list) |
| **📌 RFBSReturnsAPI** | `3` 个接口 | [进入模块](/en/seller/rfbsreturnsapi/post-v2-returns-rfbs-list) |
| **📌 CancellationAPI** | `3` 个接口 | [进入模块](/en/seller/cancellationapi/post-v2-conditional-cancellation-list) |
| **↩️ Returns & Refunds** | `4` 个接口 | [进入模块](/en/seller/returnsapi/post-v1-returns-list) |
| **📌 ReturnAPI** | `8` 个接口 | [进入模块](/en/seller/returnapi/post-v1-returns-company-fbs-info) |
| **🗨️ Customer Support Chats** | `3` 个接口 | [进入模块](/en/seller/chatapi/post-v1-chat-send-file) |
| **📌 SupplierAPI** | `4` 个接口 | [进入模块](/en/seller/supplierapi/post-v2-invoice-create-or-update) |
| **📌 ReportAPI** | `11` 个接口 | [进入模块](/en/seller/reportapi/post-v1-report-info) |
| **📈 Analytics & Data Reports** | `3` 个接口 | [进入模块](/en/seller/analyticsapi/post-v2-analytics-stock-on-warehouses) |
| **📊 Finance & Settlements** | `10` 个接口 | [进入模块](/en/seller/financeapi/post-v2-finance-realization) |
| **📌 Receipt** | `3` 个接口 | [进入模块](/en/seller/receipt/post-v1-receipts-get) |
| **📌 SellerRating** | `4` 个接口 | [进入模块](/en/seller/sellerrating/post-v1-rating-summary) |
| **📌 Digital** | `3` 个接口 | [进入模块](/en/seller/digital/post-v1-posting-digital-codes-upload) |
| **💬 Reviews & Questions** | `12` 个接口 | [进入模块](/en/seller/reviewapi/post-v1-review-comment-create) |
| **📌 Questions&Answers** | `8` 个接口 | [进入模块](/en/seller/questionsanswers/post-v1-question-answer-create) |
| **📌 BetaMethod** | `24` 个接口 | [进入模块](/en/seller/betamethod/post-v1-analytics-manage-stocks) |
| **📌 SupplyOrderAPI** | `4` 个接口 | [进入模块](/en/seller/supplyorderapi/post-v1-supply-order-act-summary-get) |
| **📌 FBSWarehouseSetup** | `17` 个接口 | [进入模块](/en/seller/fbswarehousesetup/post-v1-warehouse-fbs-create-drop-off-list) |
| **📌 rFBSWarehouseSetup** | `7` 个接口 | [进入模块](/en/seller/rfbswarehousesetup/post-v1-warehouse-erfbs-aggregator-create) |
| **📌 SellerActions** | `18` 个接口 | [进入模块](/en/seller/selleractions/post-v1-seller-actions-create-discount) |
| **📌 PromosBeta** | `4` 个接口 | [进入模块](/en/seller/promosbeta/post-v1-actions-auto-add-products-list) |
| **📌 Notification** | `7` 个接口 | [进入模块](/en/seller/notification/post-v1-notification-set) |
| **📌 FBOTransport** | `14` 个接口 | [进入模块](/en/seller/fbotransport/post-v2-cargoes-get) |
| **📌 DraftDirectFBP** | `10` 个接口 | [进入模块](/en/seller/draftdirectfbp/post-v1-fbp-draft-direct-seller-dlv-create) |
| **📌 DraftDropOffFBP** | `8` 个接口 | [进入模块](/en/seller/draftdropofffbp/post-v1-fbp-draft-drop-off-create) |
| **📌 OrderDirectFBP** | `5` 个接口 | [进入模块](/en/seller/orderdirectfbp/post-v1-fbp-order-direct-cancel) |
| **📌 DeliveryFBP** | `11` 个接口 | [进入模块](/en/seller/deliveryfbp/post-v1-fbp-act-from-create) |
| **📝 FBP Pick-up Drafts** | `5` 个接口 | [进入模块](/en/seller/draftpickupfbp/post-v1-fbp-draft-pick-up-create) |
| **📄 FBP Drafts** | `3` 个接口 | [进入模块](/en/seller/deliveryfbpdraft/post-v1-fbp-warehouse-list) |
| **🏬 FBP Drop-off Supplies** | `3` 个接口 | [进入模块](/en/seller/orderdropofffbp/post-v1-fbp-order-drop-off-cancel) |
| **📦 FBP Pick-up Supplies** | `2` 个接口 | [进入模块](/en/seller/orderpickupfbp/post-v1-fbp-order-pick-up-cancel) |
| **🚛 Freight & Containers (FBS)** | `13` 个接口 | [进入模块](/en/seller/carriageapi/post-v1-carriage-container-create) |
| **💎 Premium Features & Chat** | `10` 个接口 | [进入模块](/en/seller/premium/post-v1-chat-send-message) |
| **❌ Cancellation Reasons** | `3` 个接口 | [进入模块](/en/seller/cancelreasonapi/post-v1-cancel-reason-list) |
| **🛣️ Delivery & Logistics** | `5` 个接口 | [进入模块](/en/seller/deliveryapi/post-v1-delivery-check) |
| **📋 Order Management** | `4` 个接口 | [进入模块](/en/seller/orderapi/post-v1-order-cancel) |
| **📦 FBO Orders & Postings** | `3` 个接口 | [进入模块](/en/seller/fbopostingapi/post-v1-posting-cancel) |
