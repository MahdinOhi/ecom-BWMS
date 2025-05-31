# 🛍️ Basic SEO Guide for Django + React E-Commerce Platform

This guide covers best practices for implementing SEO during development of your Django (backend) + React (frontend) based e-commerce platform.

---

## 📦 Project Structure (Example)

```
ecommerce-platform/
│
├── backend/ (Django)
│   ├── manage.py
│   ├── core/
│   ├── products/
│   └── templates/
│       └── sitemap.xml
│
├── frontend/ (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   └── components/
│   │       └── ProductPage.jsx
│   └── ...
```

---

## ✅ 1. Meta Tags in React

Update `public/index.html` and dynamic pages with SEO-relevant meta tags.

### `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Your Store - Best Online Shop</title>
    <meta name="description" content="Buy electronics, fashion, and more from Your Store." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://yourdomain.com/" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

### Dynamic Meta Tags (e.g., ProductPage.jsx)

Use `react-helmet`:

```bash
npm install react-helmet
```

```jsx
import { Helmet } from "react-helmet";

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{product.name} | Your Store</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://yourdomain.com/products/${product.slug}`} />
      </Helmet>
      <h1>{product.name}</h1>
      {/* Product details */}
    </>
  );
}
```

---

## ✅ 2. SEO-Friendly URLs

In Django:

```python
# backend/products/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("api/products/<slug:slug>/", views.ProductDetailAPIView.as_view(), name="product-detail"),
]
```

In React (React Router):

```jsx
<Route path="/products/:slug" element={<ProductPage />} />
```

---

## ✅ 3. Sitemap and Robots.txt in Django

### robots.txt

```python
# backend/core/views.py
from django.http import HttpResponse

def robots_txt(request):
    lines = [
        "User-Agent: *",
        "Disallow: /admin/",
        "Sitemap: https://yourdomain.com/sitemap.xml",
    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")
```

```python
# backend/core/urls.py
urlpatterns = [
    path("robots.txt", views.robots_txt, name="robots-txt"),
]
```

### sitemap.xml

```python
# backend/core/views.py
from django.contrib.sitemaps import Sitemap
from .models import Product

class ProductSitemap(Sitemap):
    def items(self):
        return Product.objects.all()

    def location(self, item):
        return f"/products/{item.slug}/"

# In urls.py
from django.contrib.sitemaps.views import sitemap
from .views import ProductSitemap

sitemaps = {"products": ProductSitemap}

urlpatterns += [
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),
]
```

---

## ✅ 4. Schema Markup (React)

Use `react-helmet` again to embed JSON-LD.

```jsx
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: product.imageUrl,
      description: product.description,
      sku: product.sku,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: product.price,
        availability: "https://schema.org/InStock"
      }
    })}
  </script>
</Helmet>
```

---

## ✅ 5. Performance Optimization

### In React
- Use lazy loading for product images:
  ```jsx
  <img src={product.image} alt={product.name} loading="lazy" />
  ```

- Split components using `React.lazy` and `Suspense`.

### In Django
- Enable GZip Middleware:
  ```python
  MIDDLEWARE = [
      'django.middleware.gzip.GZipMiddleware',
      ...
  ]
  ```

- Cache views with `@cache_page`.

---

## ✅ 6. Image Optimization

- Use WebP images when possible.
- Compress images before uploading.
- Always use descriptive `alt` text:
  ```html
  <img src="/images/shoes.webp" alt="Red Running Shoes for Men" />
  ```

---

## ✅ 7. Mobile-First Design

- Use responsive units (%, `vw`, `vh`).
- Test on Chrome DevTools with different screen sizes.
- Tailwind CSS or MUI helps enforce responsive design.

---

## ✅ 8. Internal Linking

Link between related products or categories:

```jsx
<Link to={`/products/${relatedProduct.slug}`}>
  {relatedProduct.name}
</Link>
```

Add breadcrumb component:

```jsx
<ol className="breadcrumb">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/category/shoes">Shoes</Link></li>
  <li>{product.name}</li>
</ol>
```

---

## ✅ 9. Canonical URLs

Add this to `Helmet` on product pages:

```jsx
<link rel="canonical" href={`https://yourdomain.com/products/${product.slug}`} />
```

---

## ✅ 10. Additional Tools

- Use [Google Search Console](https://search.google.com/search-console) to monitor performance.
- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to audit SEO.
- Generate sitemaps with Django, but ping Google:
  ```
  https://www.google.com/ping?sitemap=https://yourdomain.com/sitemap.xml
  ```

---

## ✅ Summary Checklist

- [ ] Semantic HTML
- [ ] Meta Tags
- [ ] SEO-friendly URLs
- [ ] Sitemap and robots.txt
- [ ] Schema Markup
- [ ] Performance Optimization
- [ ] Image Optimization
- [ ] Mobile Responsiveness
- [ ] Internal Linking
- [ ] Canonical Tags

---

Feel free to adapt the structure or code based on your project setup.