# Free Deployment & Custom Domain Guide

## 🚀 Free Deployment Options

### Option 1: Vercel (Recommended)
**Pros:** Fast, automatic deployments, free SSL, custom domains
**Free Tier:** Unlimited personal projects

#### Steps:
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Custom Domain** (if you have one)
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your domain and follow DNS instructions

#### Custom Domain Setup:
- **For Freenom/Other Domains:**
  1. Add domain in Vercel dashboard
  2. Add DNS records in your domain provider:
     - Type: `A` Record, Name: `@`, Value: `76.76.21.21`
     - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

---

### Option 2: Netlify
**Pros:** Easy drag-and-drop, form handling, serverless functions
**Free Tier:** 100GB bandwidth/month

#### Steps:
1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Custom Domain:**
   - Go to Site Settings → Domain Management → Add Custom Domain
   - Update DNS records:
     - Type: `A` Record, Name: `@`, Value: `75.2.60.5`
     - Type: `CNAME`, Name: `www`, Value: `yoursite.netlify.app`

---

### Option 3: GitHub Pages (Currently Using)
**Pros:** Free, integrated with GitHub, simple
**Free Tier:** Unlimited static sites

#### Steps:
1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Custom Domain:**
   - Create `CNAME` file in `public/` folder with your domain name
   - In GitHub: Settings → Pages → Custom Domain
   - Update DNS records:
     - Type: `A` Records, Name: `@`, Values:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - Type: `CNAME`, Name: `www`, Value: `yourusername.github.io`

---

### Option 4: Render
**Pros:** Auto-deploy from Git, free SSL, databases
**Free Tier:** 750 hours/month

#### Steps:
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on push

---

## 🌐 Free Domain Options

### 1. Freenom (Free for 1 year)
**Domains:** `.tk`, `.ml`, `.ga`, `.cf`, `.gq`

#### Steps:
1. Go to [Freenom.com](https://www.freenom.com)
2. Search for available domain
3. Register (requires email verification)
4. Manage DNS in Freenom dashboard

**⚠️ Note:** Freenom domains can be reclaimed if not used properly. Not ideal for professional portfolios.

---

### 2. Free Subdomains (Best for Starting)

#### is-a.dev (Free `.is-a.dev` subdomain)
1. Fork [is-a-dev/register](https://github.com/is-a-dev/register)
2. Add your domain in `domains/` folder
3. Create pull request
4. Example: `yourname.is-a.dev`

#### js.org (Free `.js.org` for JavaScript projects)
1. Fork [js-org/js.org](https://github.com/js-org/js.org)
2. Add your domain to `cnames_active.js`
3. Create pull request

---

### 3. Student Domains (If you're a student)

#### GitHub Student Developer Pack
- Free `.me` domain for 1 year via Namecheap
- Apply at [education.github.com](https://education.github.com)

---

## 🎯 Recommended Setup for Your Portfolio

### Best Free Option:
**Vercel + is-a.dev subdomain**

1. **Get free subdomain:**
   - Register `yourname.is-a.dev`

2. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Connect domain:**
   - Add `yourname.is-a.dev` in Vercel
   - Update DNS in is-a.dev PR:
     ```json
     {
       "owner": {
         "username": "yourgithub"
       },
       "record": {
         "CNAME": "your-project.vercel.app"
       }
     }
     ```

---

## 💰 Affordable Paid Domains (Best Long-term)

If you want a professional domain:

### Namecheap
- `.xyz` - ~$1/year first year
- `.tech` - ~$2/year first year
- `.site` - ~$1/year first year

### Porkbun
- `.dev` - ~$12/year
- `.com` - ~$9/year
- Free WHOIS privacy

### Cloudflare Registrar
- At-cost pricing (no markup)
- `.com` - ~$9/year
- Requires Cloudflare account

---

## 🔧 DNS Configuration Cheat Sheet

### For Vercel:
```
Type: A     | Name: @   | Value: 76.76.21.21
Type: CNAME | Name: www | Value: cname.vercel-dns.com
```

### For Netlify:
```
Type: A     | Name: @   | Value: 75.2.60.5
Type: CNAME | Name: www | Value: yoursite.netlify.app
```

### For GitHub Pages:
```
Type: A | Name: @ | Value: 185.199.108.153
Type: A | Name: @ | Value: 185.199.109.153
Type: A | Name: @ | Value: 185.199.110.153
Type: A | Name: @ | Value: 185.199.111.153
Type: CNAME | Name: www | Value: yourusername.github.io
```

---

## ✅ Quick Start (Fastest Way)

1. **Deploy to Vercel (2 minutes):**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Get your free URL:**
   - You'll get: `your-project.vercel.app`

3. **Optional - Add custom domain later:**
   - Get free subdomain from is-a.dev
   - Or buy cheap domain from Namecheap

---

## 🆘 Troubleshooting

### Domain not working?
- Wait 24-48 hours for DNS propagation
- Check DNS settings with [whatsmydns.net](https://www.whatsmydns.net)
- Ensure HTTPS is enabled in deployment platform

### Build failing?
- Check build command matches your project
- Verify output directory (usually `dist` or `build`)
- Check environment variables if needed

---

## 📝 Notes

- **Free domains** (like Freenom) can be unreliable for professional use
- **Free subdomains** (like is-a.dev) are great for portfolios
- **Paid domains** are best for serious professional presence
- All deployment platforms offer **free SSL certificates**
- DNS changes can take **up to 48 hours** to propagate
