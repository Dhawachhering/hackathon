# KaamKhoj - Nepal Job Portal

A modern, mobile-first job portal designed specifically for Nepali youth (ages 18-30). Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, colorful, and youth-focused UI inspired by Internshala, Duolingo, and Behance
- **Mobile-First**: Fully responsive design optimized for mobile devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **Job Search**: Advanced search and filtering capabilities
- **User Authentication**: Separate flows for job seekers and employers
- **Dashboard**: Personalized dashboards for different user types

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **State Management**: React Context API
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd nepal-job-portal
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
nepal-job-portal/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── jobs/             # Jobs pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Navbar.tsx        # Navigation component
│   ├── JobCard.tsx       # Job card component
│   └── ...
├── contexts/             # React contexts
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Sky blue gradient (sky-400 to sky-600)
- **Secondary**: Rose gradient (rose-400 to rose-600)
- **Accent**: Amber gradient (amber-400 to amber-600)
- **Neutral**: Slate color palette

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good contrast

### Components
- **Buttons**: Rounded corners (rounded-xl) with gradient backgrounds
- **Cards**: Subtle shadows with hover effects
- **Forms**: Clean inputs with focus states
- **Tags**: Pill-shaped with various color variants

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations
- Form plugin for better form styling
- Custom utility classes

### Environment Variables
Create a `.env.local` file for environment-specific variables:
\`\`\`env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
\`\`\`

## 📱 Responsive Design

The application is built mobile-first with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎯 Future Enhancements

- [ ] Real-time notifications
- [ ] Advanced job matching algorithm
- [ ] Video interviews integration
- [ ] Mobile app (React Native)
- [ ] Multi-language support (Nepali/English)
- [ ] Payment integration for premium features
- [ ] Company verification system
- [ ] Skills assessment tests

## 📞 Support

For support, email support@kaamkhoj.com or join our Discord community.

---

Made with ❤️ for Nepali youth
