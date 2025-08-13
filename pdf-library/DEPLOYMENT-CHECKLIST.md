# Deployment Checklist

Use this checklist to ensure your PDF Library application is ready for production deployment.

## ✅ Pre-Deployment Checklist

### 1. Environment Variables
- [ ] `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- [ ] `STRIPE_SECRET_KEY` - Your Stripe secret key
- [ ] `STRIPE_WEBHOOK_SECRET` - Your Stripe webhook secret
- [ ] `SMTP_HOST` - Your SMTP server host
- [ ] `SMTP_PORT` - Your SMTP server port
- [ ] `SMTP_USER` - Your SMTP username
- [ ] `SMTP_PASS` - Your SMTP password
- [ ] `ADMIN_EMAIL` - Admin email for notifications
- [ ] `NEXT_PUBLIC_APP_URL` - Your production app URL

### 2. Database Setup
- [ ] Supabase project created and configured
- [ ] All database tables created (users, documents, categories, subscriptions, download_logs, pdf_requests)
- [ ] Row Level Security (RLS) policies configured
- [ ] Storage bucket created with proper policies
- [ ] Sample categories inserted
- [ ] Admin user created

### 3. Stripe Configuration
- [ ] Stripe account created
- [ ] Pro subscription product created
- [ ] Price configured for Pro plan
- [ ] Webhook endpoint configured
- [ ] Test mode verified

### 4. Application Testing
- [ ] User registration works
- [ ] User login works
- [ ] Dashboard loads correctly
- [ ] Navigation works between pages
- [ ] PDF request form submits
- [ ] Admin dashboard accessible (for admin users)
- [ ] Responsive design works on mobile

### 5. Security
- [ ] Environment variables are secure
- [ ] RLS policies are properly configured
- [ ] Admin routes are protected
- [ ] File upload restrictions in place

## 🚀 Deployment Steps

### 1. Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 2. Alternative Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Push to Railway Git
- **Render**: Connect GitHub repository

## 🔧 Post-Deployment Tasks

### 1. Verify Environment Variables
- [ ] All environment variables are set in production
- [ ] No development values remain

### 2. Test Production Features
- [ ] User registration works
- [ ] Authentication flows work
- [ ] PDF requests are sent to admin email
- [ ] Stripe checkout works (test mode)

### 3. Monitor Performance
- [ ] Check application logs
- [ ] Monitor database performance
- [ ] Verify email delivery

### 4. Set Up Monitoring
- [ ] Error tracking (Sentry, LogRocket)
- [ ] Performance monitoring
- [ ] Uptime monitoring

## 🐛 Common Issues & Solutions

### 1. Environment Variables Not Loading
- **Issue**: Environment variables not available in production
- **Solution**: Ensure all variables are set in your deployment platform

### 2. Database Connection Errors
- **Issue**: Can't connect to Supabase
- **Solution**: Verify Supabase URL and keys are correct

### 3. Email Not Sending
- **Issue**: PDF requests not reaching admin
- **Solution**: Check SMTP credentials and firewall settings

### 4. Stripe Integration Issues
- **Issue**: Payment processing not working
- **Solution**: Verify Stripe keys and webhook configuration

## 📱 Mobile Testing

- [ ] Test on iOS Safari
- [ ] Test on Android Chrome
- [ ] Verify responsive design
- [ ] Check touch interactions

## 🔒 Security Review

- [ ] No sensitive data in client-side code
- [ ] API endpoints properly protected
- [ ] User permissions correctly enforced
- [ ] File upload security measures

## 📊 Analytics Setup

- [ ] Google Analytics configured
- [ ] User behavior tracking
- [ ] Conversion tracking (subscriptions)
- [ ] Error tracking

## 🎯 Final Verification

Before going live:
- [ ] All features tested in production
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Security measures in place
- [ ] Backup procedures documented
- [ ] Support contact information available

## 📞 Support Resources

- **Supabase**: [docs.supabase.com](https://docs.supabase.com)
- **Stripe**: [stripe.com/docs](https://stripe.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)

---

**Remember**: Test thoroughly in staging before deploying to production!

