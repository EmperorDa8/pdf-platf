# FUNCTIONAL-REQUIREMENTS.md

## 1. User Roles
- Free User
- Pro Subscriber
- Admin

## 2. User Features
- Register / Log in
- View PDFs by category
- Download PDFs (based on subscription level)
- Submit a document request form

## 3. Admin Features
- Upload PDFs with category + access level
- View download stats
- Receive requests via email
- Access analytics dashboard (downloads, subscriptions)

## 4. Payment Flow
- Upgrade to Pro via Stripe Checkout
- Receive Stripe webhooks
- Access Pro-only content post-subscription

## 5. UI Structure
- Pages: `/login`, `/dashboard`, `/admin`, `/documents/[id]`
- Components: AuthForm, PDFList, UploadForm, RequestForm

## 6. PDF Access Rules
- Free: accessible to all users
- Pro: accessible only to active subscribers
