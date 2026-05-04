# SunCart – Summer Essentials Store

## Live Website



---

## Project Overview

SunCart is a modern summer-themed eCommerce web application. Users can browse seasonal products like sunglasses, summer outfits, skincare, and accessories. Users can view product details and access protected pages after authentication.



## Key Features

### Home Page

* Hero banner with summer sale
* Popular Products section (3 items)
* Summer Care Tips section
* Top Brands section

### Products

* Products loaded from JSON file
* Each product shows image, name, description, rating, and price
* View Details button for each product

### Product Details Page (Protected)

* Accessible only after login
* Redirects to login if not authenticated
* Shows full product information including price, rating, stock, and description

### Authentication

* User registration with name, email, photo URL, and password
* User login with email and password
* Error and success messages using toast
* Google login button (UI implemented)


## Technologies Used

* Next.js (App Router)
* Tailwind CSS
* DaisyUI
* BetterAuth
* React Hot Toast
* Animate.css

## Environment Variables

This project uses environment variables to store sensitive configuration keys securely.

Example:

NEXT_PUBLIC_AUTH_URL=your_auth_url  
NEXT_PUBLIC_AUTH_KEY=your_auth_key

## Responsiveness

The website is fully responsive for mobile, tablet, and desktop devices.

---

## Deployment

The project is deployed on Vercel. All routes work properly without errors on reload.


## GitHub Commits

At least 10 meaningful commits with clear and descriptive messages have been included.


## Project Structure


app/
  components/
  data/
    products.json
  products/
    page.jsx
    [id]/page.jsx
  profile/
  login/
  register/
  layout.tsx
  page.tsx



## Sinthia Akter Esha
