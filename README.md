# 🚀 Job Application Tracker

A modern, intuitive web application to streamline your job search journey. Organize, track, and manage all your job applications in one beautiful Kanban board with real-time sync and secure authentication.

## ✨ Features

- **📋 Kanban Board** - Drag-and-drop interface to organize applications through different stages (Applied, Reviewed, Interview, Offer, Rejected)
- **🔐 Secure Authentication** - User registration and login with password hashing
- **💾 Real-time Sync** - MongoDB-backed persistence with instant updates
- **👤 Personalized Dashboard** - Custom job application boards for each user
- **📝 Rich Application Details** - Track job titles, companies, positions, application dates, and more
- **🎨 Beautiful UI** - Built with TailwindCSS and Radix UI components for a modern, responsive design
- **⚡ Lightning Fast** - Next.js 16 with server-side rendering and optimal performance
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

| Category           | Technology                        |
| ------------------ | --------------------------------- |
| **Frontend**       | Next.js 16, React 19, TailwindCSS |
| **Backend**        | Next.js API Routes                |
| **Database**       | MongoDB with Mongoose ODM         |
| **Authentication** | Better-Auth                       |
| **UI Components**  | Radix UI, Lucide Icons            |
| **Drag & Drop**    | dnd-kit                           |
| **Language**       | TypeScript                        |

## 📦 Prerequisites

- Node.js 18+
- npm or yarn package manager
- MongoDB instance (local or Atlas)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/arash-jj/job-application-tracker
cd job-application-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/job-tracker

# Authentication (Better-Auth)
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000

# Database
DB_NAME=job-tracker
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 5. (Optional) Seed Sample Data

```bash
npm run seed:jobs
```

## 📁 Project Structure

```
job-application-tracker/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── auth/                # Authentication endpoints
│   ├── dashboard/                # Dashboard page
│   ├── sign-in/                  # Login page
│   ├── sign-up/                  # Registration page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home/Landing page
├── components/                   # React components
│   ├── CreateJobApplicationDialog.tsx
│   ├── JobApplicationCard.tsx
│   ├── KanbanBoard.tsx           # Main Kanban component
│   ├── Navbar.tsx
│   └── ui/                       # Radix UI components
├── lib/
│   ├── db.ts                     # Database connection
│   ├── auth/                     # Authentication logic
│   ├── actions/                  # Server actions
│   ├── models/                   # Data models
│   └── hooks/                    # Custom React hooks
├── public/                       # Static assets
├── scripts/                      # Utility scripts
└── package.json                  # Dependencies
```

## 🎯 How to Use

1. **Sign Up** - Create a new account or sign in
2. **Access Dashboard** - View your personalized job application board
3. **Add Applications** - Click to create new job applications
4. **Organize** - Drag and drop applications between columns to track progress
5. **Track Updates** - Keep tabs on all your job opportunities

## 🔧 Available Scripts

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start development server on port 3000 |
| `npm run build`     | Build for production                  |
| `npm start`         | Start production server               |
| `npm run lint`      | Run ESLint checks                     |
| `npm run seed:jobs` | Seed database with sample job data    |

## 📊 Data Models

### Job Application

- Job Title
- Company Name
- Position Level
- Application Date
- Status (Applied, Reviewed, Interview, Offer, Rejected)
- Application Link
- Notes

### Board

- User-specific board
- Multiple columns for status tracking
- Real-time synchronization

## 🎨 UI Components

The project uses a combination of custom components and Radix UI:

- Buttons with variants
- Dialog modals
- Dropdown menus
- Tabs
- Input fields
- Avatar displays
- Cards and layouts

## 🔐 Authentication

Powered by **Better-Auth**, the application provides:

- Secure user registration
- Password hashing and validation
- Session management
- Protected routes

## 📈 Future Enhancements

- [ ] Email notifications for application updates
- [ ] Resume upload and management
- [ ] Interview reminders and scheduling
- [ ] Statistics dashboard with job market insights
- [ ] Export applications to CSV
- [ ] Team collaboration features
- [ ] Dark mode support
- [ ] Mobile app

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.


## 💡 Tips for Job Hunting Success

- **Stay Organized** - Use the Kanban board to never miss a follow-up
- **Track Everything** - Log all applications with detailed notes
- **Monitor Progress** - Regularly update application statuses
- **Follow Up** - Set reminders and don't lose track of opportunities

---

Built with ❤️ to help you land your dream job!
