# **LinkHub - Your Ultimate Social Gateway**

## **Overview**
LinkHub is a modern, responsive link-in-bio web application that allows you to showcase all your important social media links in one beautiful page. Perfect for content creators, influencers, entrepreneurs, and professionals who want to centralize their online presence.

## **Features**
- ✅ Beautiful gradient design with card-based layout
- ✅ Responsive design works on all devices
- ✅ Auto-updating copyright year
- ✅ Social media icons with brand colors
- ✅ YouTube subscribe button with call-to-action
- ✅ Social stats display (followers, videos, views)
- ✅ Easy customization

## **Customization Guide**

### **1. Basic Information**
Edit the `index.html` file to update:

```html
<!-- In the head section -->
<title>LinkHub | Your Name</title>
<meta name="description" content="Your professional description">

<!-- Profile section -->
<img src="profile.jpg" alt="Your Name"> <!-- Replace profile.jpg with your image -->
<h1 class="profile-name">Your Name</h1>
<p class="profile-bio">Your professional bio or tagline</p>
```

### **2. Social Media Links**
Update the links in the main section:

```html
<!-- Example for Instagram -->
<a href="https://instagram.com/yourusername" class="link-card">
    <div class="link-icon"><i class='bx bxl-instagram'></i></div>
    <div class="link-text">Instagram</div>
</a>
```

Replace `yourusername` with your actual social media handles.

### **3. Social Stats**
Update your statistics in the profile card:

```html
<div class="social-stats">
    <div class="stat-item">
        <div class="stat-number">10K+</div>
        <div class="stat-label">Followers</div>
    </div>
    <!-- More stat items -->
</div>
```

### **4. Colors & Styling**
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-blue: #4361ee; /* Change main brand color */
    --accent-red: #f72585;   /* Change accent color */
    /* Social media brand colors */
    --instagram: #E1306C;
    --twitter: #1DA1F2;
    /* ... */
}
```

### **5. App Identity**
Change the app name and tagline:

```html
<div class="app-logo">LinkHub</div>
<div class="app-tagline">Your Ultimate Social Gateway</div>
```

## **Deployment Options**

### **1. Netlify**
1. Drag and drop your folder to Netlify
2. Your site will be live instantly

### **2. GitHub Pages**
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in settings

### **3. Vercel**
1. Install Vercel CLI
2. Run `vercel` in your project directory

## **Requirements**
- Modern web browser
- Basic understanding of HTML/CSS (for customization)

## **Support**
For issues or feature requests, please open an issue on [GitHub](https://github.com/yourusername/linkhub).

---

**License**: MIT  
**Version**: 1.0.0  
**Created by**: Moai  

Enjoy using LinkHub! 🚀
