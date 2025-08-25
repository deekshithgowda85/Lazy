<!-- PROJECT BANNER -->
<p align="center">
  <img src="https://img.shields.io/badge/Lazy%20AI%20Website%20Builder-%F0%9F%9A%80-blueviolet?style=for-the-badge&logo=vercel&logoColor=white" alt="Lazy AI Website Builder"/>
</p>

<h1 align="center">🚀 Lazy AI Website Builder</h1>
<p align="center">
  <i>Transform text prompts into fully functional, production-ready websites in seconds.</i>
</p>

---

<!-- ANIMATED DIVIDER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="80%" />
</p>

---

## 🪄 Overview
Lazy AI Website Builder is an intelligent coding agent that **transforms simple text prompts into fully functional websites**.  
This revolutionary platform streamlines **web development workflows** by automating **code generation, execution, and deployment**, enabling developers and non-developers to create **production-ready websites in seconds**.

---


---

## 🔥 Features
- 🤖 **AI-Powered Generation** – Leverages **Google Gemini API** to generate websites from text prompts.  
- 🔒 **Secure Code Execution** – Integrated **E2B Sandbox** ensures safe and reliable execution.  
- ⚡ **Instant Deployment** – Build and deploy with one click using **Vercel**.  
- 🧩 **Modern Tech Stack** – Built for scalability and performance with **Next.js 14 & Prisma**.  
- 🔑 **User Authentication** – Seamless auth and project control with **Clerk**.  
- 🛠️ **Background Processing** – Reliable job management using **Inngest**.

---

## 🛠️ Tech Stack
| Layer                | Technology                                         |
|----------------------|--------------------------------------------------|
| **Frontend**         | ![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss) |
| **Backend**          | ![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript) |
| **Database**         | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql) |
| **AI Integration**   | ![Google Gemini](https://img.shields.io/badge/Gemini%20AI-Google-4285F4?logo=google) |
| **Code Execution**   | ![E2B](https://img.shields.io/badge/Sandbox-E2B-blue) |
| **Authentication**   | ![Clerk](https://img.shields.io/badge/Auth-Clerk-purple) |
| **Background Jobs**  | ![Inngest](https://img.shields.io/badge/Jobs-Inngest-orange) |
| **Deployment**       | ![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel) |

---

<!-- ANIMATED DIVIDER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="80%" />
</p>

---

## 📦 Installation

### 🔑 Prerequisites
- Node.js (v18+)
- PostgreSQL
- Google Gemini API key
- E2B API key
- Clerk account

---

### ⚙️ Setup Instructions
```bash
# Clone the repository
git clone https://github.com/deekshithgowda85/lazy-ai-website-builder.git
cd lazy-ai-website-builder

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

Create a `.env.local` file:

```env
# Database
DATABASE_URL=your_postgresql_connection_string

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# AI Services
GEMINI_API_KEY=your_gemini_api_key
E2B_API_KEY=your_e2b_api_key

# Background Jobs
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

Run database setup:
```bash
npx prisma migrate dev
npx prisma generate
```

Start the development server:
```bash
npm run dev
```
Your app will be available at: **http://localhost:3000**

---

## 🔗 Deployment
- 🚀 **Production:** Deployed on **Vercel**  
- 🌐 **Live Demo:** [lazy-dg.vercel.app](https://lazy-dg.vercel.app)

---

## 📡 API Documentation
| Endpoint                | Method           | Description                          |
|------------------------|-----------------|-------------------------------------|
| `/api/generate`        | POST            | Generate website from text prompt   |
| `/api/deploy`          | POST            | Deploy generated website            |
| `/api/projects`        | GET             | Retrieve user projects              |
| `/api/projects/[id]`   | GET/PUT/DELETE  | Manage a specific project           |

📂 Detailed documentation is available in the `docs/` directory.

---

## 🧪 Testing
```bash
# Run all tests
npm test

# Watch mode
npm run test:watch
```

---

## 📊 Performance Metrics
| Metric                              | Value                              |
|------------------------------------|-----------------------------------|
| Automation of manual coding tasks   | 80%+                              |
| Faster prototyping                 | 95%                               |
| Average generation time             | 15–30 seconds                     |
| Uptime                              | 99.9% with Vercel                 |

---

## 🤝 Contributing
Contributions are welcome!  
```bash
# Fork and create a branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m "Add AmazingFeature"

# Push and submit PR
git push origin feature/AmazingFeature
```

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments
- [Google Gemini](https://ai.google/) for AI code generation
- [E2B](https://e2b.dev/) for secure sandbox execution
- [Vercel](https://vercel.com/) for seamless deployments
- [Clerk](https://clerk.com/) for authentication solutions

---

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="80%" />
</p>

<p align="center">
  Made with ❤️ by Lazy AI
</p>
