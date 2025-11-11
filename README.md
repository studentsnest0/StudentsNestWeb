# Students Nest - Student Accommodation Platform

A simple and clean platform connecting students with accommodation and property owners. Built with React, Vite, Supabase, and Cloudinary.

## Features

### For Students
- Browse verified property listings
- Filter by city, property type, and rent
- View detailed property information with images
- Contact property owners directly

### For Property Owners
- Easy property listing form
- Upload multiple property images
- Track listing status (pending/approved/rejected)
- Receive inquiries from interested students

### For Admins
- Secure admin panel with authentication
- Review and approve/reject listings
- View all property details and owner information
- Filter listings by status

## Tech Stack

- **Frontend**: React + Vite
- **Database & Auth**: Supabase
- **Image Storage**: Cloudinary
- **Routing**: React Router DOM
- **Styling**: CSS (KISS principle - Keep It Simple, Stupid)

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account
- Cloudinary account

### 1. Clone and Install

```bash
cd StudentsNestWeb
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL script from `supabase-schema.sql` to create the database tables
4. Get your project URL and anon key from Settings > API

### 3. Cloudinary Setup

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Go to Settings > Upload
3. Create an unsigned upload preset:
   - Scroll to "Upload presets"
   - Click "Add upload preset"
   - Set signing mode to "Unsigned"
   - Save the preset name
4. Note your Cloud Name from the dashboard

### 4. Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Update the `.env` file with your credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
```

### 5. Create Admin User

In your Supabase dashboard:
1. Go to Authentication > Users
2. Click "Add user"
3. Create an admin user with email and password
4. Use these credentials to log into the admin panel

### 6. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## Project Structure

```
StudentsNestWeb/
├── src/
│   ├── admin/              # Admin panel components
│   │   ├── AdminLogin.jsx
│   │   ├── AdminLogin.css
│   │   ├── AdminDashboard.jsx
│   │   └── AdminDashboard.css
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── lib/               # Utility functions
│   │   ├── supabase.js    # Supabase client
│   │   └── cloudinary.js  # Cloudinary upload function
│   ├── pages/             # Main pages
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── ForOwners.jsx
│   │   ├── ForOwners.css
│   │   ├── ForStudents.jsx
│   │   └── ForStudents.css
│   ├── App.jsx            # Main app component with routing
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env                   # Environment variables (create this)
├── .env.example          # Environment variables template
├── supabase-schema.sql   # Database schema
├── package.json
└── README.md
```

## Usage

### Public Site

- **Home**: Landing page with platform overview
- **For Students**: Browse and filter accommodation listings
- **For Owners**: Submit property listings with details and images
- **Contact**: Contact form for inquiries

### Admin Panel

1. Navigate to `/admin`
2. Login with your Supabase admin credentials
3. Review pending listings
4. Approve or reject submissions
5. View all listings by status

## Database Schema

The `listings` table includes:
- Owner information (name, email, phone)
- Property details (type, address, city, rent, deposit)
- Property features (bedrooms, bathrooms, amenities)
- Images array (Cloudinary URLs)
- Status (pending/approved/rejected)
- Timestamps (created_at, updated_at)

## Security

- Row Level Security (RLS) enabled on Supabase
- Only approved listings visible to public
- Admin authentication required for approval actions
- Secure image uploads through Cloudinary

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **Cloudflare Pages**: Connect GitHub and configure build settings

Don't forget to add environment variables in your deployment platform!

## Future Enhancements

- Add user registration for students to save favorites
- Implement search functionality
- Add property ratings and reviews
- Email notifications for owners when listings are approved
- WhatsApp integration for quick contact
- Advanced filters (furnished/unfurnished, pet-friendly, etc.)
- Map integration to show property locations

## License

MIT

## Support

For issues or questions, use the Contact page or open an issue on GitHub.

