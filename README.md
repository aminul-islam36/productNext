# ProductNest 🛍️

## Project Live Link

https://productnext-coral.vercel.app/

A modern, full-stack product management platform built with Next.js that allows users to explore, manage, and add products with a clean and intuitive interface.

## 📋 Project Description

ProductNest is a comprehensive product management system that provides users with the ability to browse products, view detailed information, and manage inventory through a secure authentication system. The platform features a responsive design, fast performance, and seamless user experience across all devices.

## 🚀 Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/aminul-islam36/productNext.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_IMAGE_BB_KEY=your_imgbb_api_key
   NEXT_PUBLIC_API_URL=your_backend_api_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗺️ Route Summary

| Route            | Description                                       | Access Level              |
| ---------------- | ------------------------------------------------- | ------------------------- |
| `/`              | Homepage with hero, features, and product preview | Public                    |
| `/products`      | Browse all available products                     | Public                    |
| `/products/[id]` | View detailed product information                 | Public                    |
| `/login`         | User authentication page                          | Public                    |
| `/register`      | User registration page                            | Public                    |
| `/add-product`   | Add new products to the catalog                   | Protected (Auth Required) |

### ⚡ Performance & Technical

- **Next.js 16**: Latest framework with App Router
- **Fast Loading**: Optimized images and lazy loading
- **SEO Friendly**: Proper meta tags and structure
- **Type Safety**: Modern JavaScript with proper error handling
- **Production Deployment**: Vercel-optimized build configuration

### Responsive Design

Built with a mobile-first approach using Tailwind CSS and DaisyUI components. The interface adapts seamlessly across devices with optimized layouts for mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS, DaisyUI
- **Forms**: React Hook Form
- **Icons**: React Icons, Lucide
- **Alerts**: SweetAlert2
- **Image Hosting**: ImgBB API
- **Deployment**: Vercel
