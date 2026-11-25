---
title: "Ozon Seller API"
---

# Ozon Seller API

Comprehensive API endpoints for managing products, inventory, prices, FBS/FBO fulfillment orders, and financial reports on Ozon.

## Module Navigation

| Category | Endpoints | Direct Link |
| :--- | :--- | :--- |
| **🔑 API Keys & Permissions** | `1 endpoints` | [Enter Module](/en/seller/apikey/post-v1-roles) |
| **🏢 Seller Account & Profile** | `2 endpoints` | [Enter Module](/en/seller/sellerinfo/post-v1-seller-info) |
| **📂 Categories & Attributes** | `5 endpoints` | [Enter Module](/en/seller/categoryapi/post-v1-description-category-tree) |
| **📦 Products & Uploads** | `21 endpoints` | [Enter Module](/en/seller/productapi/post-v3-product-import) |
| **🏷️ Product Barcodes** | `3 endpoints` | [Enter Module](/en/seller/barcodeapi/post-v1-barcode-add) |
| **💰 Prices & Stocks** | `11 endpoints` | [Enter Module](/en/seller/pricesstocksapi/post-v2-products-stocks) |
| **🎁 Promotions & Discounts** | `16 endpoints` | [Enter Module](/en/seller/promos/get-v1-actions) |
| **🎯 Pricing Strategies & Buybox** | `12 endpoints` | [Enter Module](/en/seller/pricingstrategyapi/post-v1-pricing-strategy-competitors-list) |
| **🎫 Warehouse Gate Passes** | `7 endpoints` | [Enter Module](/en/seller/pass/post-v1-pass-list) |
| **⭐ Brand Certifications** | `1 endpoints` | [Enter Module](/en/seller/brandapi/post-v1-brand-company-certification-list) |
| **📜 Quality Certificates** | `18 endpoints` | [Enter Module](/en/seller/certificationapi/get-v1-product-certificate-accordance-types) |
| **🏭 Warehouses (FBS & rFBS)** | `10 endpoints` | [Enter Module](/en/seller/warehouseapi/post-v1-warehouse-list) |
| **📌 FBOWarehouse** | `1 endpoints` | [Enter Module](/en/seller/fbowarehouse/post-v1-warehouse-ozon-list) |
| **📌 PolygonAPI** | `7 endpoints` | [Enter Module](/en/seller/polygonapi/post-v1-polygon-create) |
| **📌 FBO** | `16 endpoints` | [Enter Module](/en/seller/fbo/post-v2-posting-fbo-list) |
| **📌 FboSupplyRequest** | `25 endpoints` | [Enter Module](/en/seller/fbosupplyrequest/post-v1-cluster-list) |
| **📌 FBS&rFBSMarks** | `7 endpoints` | [Enter Module](/en/seller/fbsrfbsmarks/post-v4-posting-fbs-ship) |
| **📌 DeliveryFBS** | `29 endpoints` | [Enter Module](/en/seller/deliveryfbs/post-v1-carriage-create) |
| **📌 DeliveryrFBS** | `7 endpoints` | [Enter Module](/en/seller/deliveryrfbs/post-v2-fbs-posting-tracking-number-set) |
| **📌 FBS** | `25 endpoints` | [Enter Module](/en/seller/fbs/post-v3-posting-fbs-unfulfilled-list) |
| **📌 RFBSReturnsAPI** | `3 endpoints` | [Enter Module](/en/seller/rfbsreturnsapi/post-v2-returns-rfbs-list) |
| **📌 CancellationAPI** | `3 endpoints` | [Enter Module](/en/seller/cancellationapi/post-v2-conditional-cancellation-list) |
| **↩️ Returns & Refunds** | `4 endpoints` | [Enter Module](/en/seller/returnsapi/post-v1-returns-list) |
| **📌 ReturnAPI** | `8 endpoints` | [Enter Module](/en/seller/returnapi/post-v1-returns-company-fbs-info) |
| **🗨️ Customer Support Chats** | `3 endpoints` | [Enter Module](/en/seller/chatapi/post-v1-chat-send-file) |
| **📌 SupplierAPI** | `4 endpoints` | [Enter Module](/en/seller/supplierapi/post-v2-invoice-create-or-update) |
| **📌 ReportAPI** | `11 endpoints` | [Enter Module](/en/seller/reportapi/post-v1-report-info) |
| **📈 Analytics & Data Reports** | `3 endpoints` | [Enter Module](/en/seller/analyticsapi/post-v2-analytics-stock-on-warehouses) |
| **📊 Finance & Settlements** | `10 endpoints` | [Enter Module](/en/seller/financeapi/post-v2-finance-realization) |
| **📌 Receipt** | `3 endpoints` | [Enter Module](/en/seller/receipt/post-v1-receipts-get) |
| **📌 SellerRating** | `4 endpoints` | [Enter Module](/en/seller/sellerrating/post-v1-rating-summary) |
| **📌 Digital** | `3 endpoints` | [Enter Module](/en/seller/digital/post-v1-posting-digital-codes-upload) |
| **💬 Reviews & Questions** | `12 endpoints` | [Enter Module](/en/seller/reviewapi/post-v1-review-comment-create) |
| **📌 Questions&Answers** | `8 endpoints` | [Enter Module](/en/seller/questionsanswers/post-v1-question-answer-create) |
| **📌 BetaMethod** | `24 endpoints` | [Enter Module](/en/seller/betamethod/post-v1-analytics-manage-stocks) |
| **📌 SupplyOrderAPI** | `4 endpoints` | [Enter Module](/en/seller/supplyorderapi/post-v1-supply-order-act-summary-get) |
| **📌 FBSWarehouseSetup** | `17 endpoints` | [Enter Module](/en/seller/fbswarehousesetup/post-v1-warehouse-fbs-create-drop-off-list) |
| **📌 rFBSWarehouseSetup** | `7 endpoints` | [Enter Module](/en/seller/rfbswarehousesetup/post-v1-warehouse-erfbs-aggregator-create) |
| **📌 SellerActions** | `18 endpoints` | [Enter Module](/en/seller/selleractions/post-v1-seller-actions-create-discount) |
| **📌 PromosBeta** | `4 endpoints` | [Enter Module](/en/seller/promosbeta/post-v1-actions-auto-add-products-list) |
| **📌 Notification** | `7 endpoints` | [Enter Module](/en/seller/notification/post-v1-notification-set) |
| **📌 FBOTransport** | `14 endpoints` | [Enter Module](/en/seller/fbotransport/post-v2-cargoes-get) |
| **📌 DraftDirectFBP** | `10 endpoints` | [Enter Module](/en/seller/draftdirectfbp/post-v1-fbp-draft-direct-seller-dlv-create) |
| **📌 DraftDropOffFBP** | `8 endpoints` | [Enter Module](/en/seller/draftdropofffbp/post-v1-fbp-draft-drop-off-create) |
| **📌 OrderDirectFBP** | `5 endpoints` | [Enter Module](/en/seller/orderdirectfbp/post-v1-fbp-order-direct-cancel) |
| **📌 DeliveryFBP** | `11 endpoints` | [Enter Module](/en/seller/deliveryfbp/post-v1-fbp-act-from-create) |
| **📝 FBP Pick-up Drafts** | `5 endpoints` | [Enter Module](/en/seller/draftpickupfbp/post-v1-fbp-draft-pick-up-create) |
| **📄 FBP Drafts** | `3 endpoints` | [Enter Module](/en/seller/deliveryfbpdraft/post-v1-fbp-warehouse-list) |
| **🏬 FBP Drop-off Supplies** | `3 endpoints` | [Enter Module](/en/seller/orderdropofffbp/post-v1-fbp-order-drop-off-cancel) |
| **📦 FBP Pick-up Supplies** | `2 endpoints` | [Enter Module](/en/seller/orderpickupfbp/post-v1-fbp-order-pick-up-cancel) |
| **🚛 Freight & Containers (FBS)** | `13 endpoints` | [Enter Module](/en/seller/carriageapi/post-v1-carriage-container-create) |
| **💎 Premium Features & Chat** | `10 endpoints` | [Enter Module](/en/seller/premium/post-v1-chat-send-message) |
| **❌ Cancellation Reasons** | `3 endpoints` | [Enter Module](/en/seller/cancelreasonapi/post-v1-cancel-reason-list) |
| **🛣️ Delivery & Logistics** | `5 endpoints` | [Enter Module](/en/seller/deliveryapi/post-v1-delivery-check) |
| **📋 Order Management** | `4 endpoints` | [Enter Module](/en/seller/orderapi/post-v1-order-cancel) |
| **📦 FBO Orders & Postings** | `3 endpoints` | [Enter Module](/en/seller/fbopostingapi/post-v1-posting-cancel) |
