# AI Short Video Application

This is a **Next.js** application designed for creating and managing AI-generated short videos.

---

## 🚀 Features

- **Database**: SQL PostgreSQL on [Neon.tech](https://neon.tech/) with **Drizzle ORM** for schema management and migrations.
- **Authentication**: Powered by [Clerk.com](https://clerk.com) for seamless user authentication and management.
- **Cloud Services**: Integrated with **Cloudinary** for media storage and **Firebase** for additional services.
- **APIs**: Includes support for **Gemini API** and **Google API** for enhanced functionality.

---

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk.com](https://clerk.com)
- **Cloud Storage**: [Cloudinary](https://cloudinary.com)
- **Other APIs**: Gemini API, Google API, Firebase

---

## 📖 Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-short-video.git
   cd ai-short-video
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_DRIZZLE_DATABASE_URL=""
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
   CLERK_SECRET_KEY=""
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_GEMINI_API_KEY=""
   GOOGLE_API_KEY=""
   NEXT_PUBLIC_FIREBASE_API_KEY=""
   NEXT_CLOUDINARY_CLOUD_NAME=""
   NEXT_CLOUDINARY_API_KEY=""
   NEXT_CLOUDINARY_API_SECRET=""
   ASSEMBLY_API_KEY=""
   REPLICATE_API_TOKEN=""
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

helloooo shreya
