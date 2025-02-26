# Financial Health Dashboard

The Financial Health Dashboard is a web application designed to help organizations monitor and analyze their financial health in real-time. It allows users to view various financial metrics, track trends, and receive alerts on significant changes, all through a user-friendly interface optimized for both desktop and mobile usage.

## Demo ##
Deployed on: `https://dulcet-bavarois-687da4.netlify.app/`

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend API Setup](#backend-api-setup)
- [Project Setup](#project-setup)
  
## Features
- **Task Dashboard:** A user-friendly interface for viewing, creating, updating, and deleting financial metrics.
- **Financial Ratios Analysis:** Users can view various financial ratios such as liquidity, profitability, and operating efficiency.
- **Real-time Updates:** The dashboard updates immediately to reflect new data as changes occur.
- **Responsive UI:** Optimized for desktop and mobile usage, ensuring access on various devices.
- **Alerts System:** Notifications for significant changes in financial metrics to prompt timely decision-making.

## Tech Stack
### Frontend
- **Angular**: For building a dynamic and responsive UI.
- **TypeScript**: Ensures type safety and scalability.
- **Highcharts**: For advanced charting capabilities.
- **CSS**: For styling components.

### Backend
- **Ruby on Rails**: For building a high-performance API.
- **MySQL**: For data storage and retrieval.

## Project Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js**: Required for managing the frontend.
- **MySQL**: For the database.

### Environment Variables
#### Frontend (.env)
- `ANGULAR_APP_API_URL=http://localhost:3000` (adjust port according to your backend configuration)

#### Backend (.env)
- `DATABASE_URL="Your MySQL database URL"`
- `RAILS_MASTER_KEY="Your Rails master key if using Rails 5.2+ for credentials"`

## Backend API Setup
1. **Navigate to the backend directory:**
