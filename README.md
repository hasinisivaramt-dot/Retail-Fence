# Smart Geo-Offer

### AI-Driven Geo-Fencing-Based Intelligent Offer Recommendation System for Retail POS

Smart Geo-Offer is an intelligent retail marketing platform that combines **Geo-Fencing, Artificial Intelligence, POS transaction data, and real-time notifications** to deliver personalized promotional offers to customers based on their location and purchasing behavior.

The system detects when a customer enters a store's geo-fenced area, analyzes previous purchase patterns, generates relevant offers, and delivers them through real-time notifications. Retailers can manage their own store, geo-fence, products, offers, customers, POS activity, and analytics, while administrators manage retailers, customers, stores, and overall system health.

---

## 🚀 Problem Statement

Traditional retail promotions often send generic offers without considering a customer's location, shopping behavior, or the right time to engage them.

**Smart Geo-Offer combines real-time Geo-Fencing with AI-driven purchase analysis to deliver the right offer to the right customer at the right place and time.**

---

## 💡 Solution

Smart Geo-Offer connects three major data sources:

- **Customer Location** — identifies when a customer enters or exits a store's geo-fenced area.
- **POS Purchase History** — provides customer purchasing behavior.
- **AI Recommendation Engine** — identifies product associations and generates personalized promotional offers.

When a customer enters the geo-fenced area, the system can trigger a personalized offer and send it through Firebase Cloud Messaging.

---

## ✨ Key Features

### Customer Portal

- Customer registration and login
- Personalized dashboard
- Real-time location detection
- Geo-fence entry and exit detection
- Nearby stores with interactive map
- Store directions and navigation
- Personalized AI recommendations
- "Why this offer?" explanations
- Nearby and trending offers
- Coupon management
- QR/code-based offer redemption
- Purchase history
- Loyalty points and rewards
- Savings dashboard
- Shopping insights
- Favorites
- Real-time notifications
- Feedback and ratings

### Retailer Portal

- Retailer registration and admin approval
- Store dashboard
- Store profile management
- Store location management
- Interactive store map
- Geo-fence creation and radius configuration
- Update store location
- Customer footfall monitoring
- Customer engagement analytics
- Product and inventory management
- Create and manage promotional offers
- AI-assisted offer targeting
- POS transaction monitoring
- Offer redemption analytics
- Sales analytics
- Customer analytics
- Inventory alerts
- Store notifications
- Reports and analytics

### Admin Portal

- Admin authentication
- Retailer approval and verification
- Retailer account management
- Customer management
- Store management
- Platform-wide analytics
- System health monitoring
- Platform configuration
- Account activation/deactivation
- Notifications and audit monitoring

---

## 🧠 AI & Recommendation

The recommendation component analyzes customer purchase behavior to identify useful product associations.

The system can use the **Apriori algorithm** for association rule mining:

```text
Customer frequently buys:
Coffee + Biscuits

        ↓
Product association discovered

        ↓
Personalized Offer:
20% OFF Coffee + Biscuits
```

Recommendation signals can include:

- Frequently purchased products
- Frequently bought-together products
- Customer purchase history
- Store availability
- Customer proximity
- Offer availability

---

## 📍 Geo-Fencing Workflow

```text
Customer Location
       ↓
Nearby Store Detection
       ↓
Store Geo-Fence
       ↓
Customer Enters Zone
       ↓
ENTRY DETECTED
       ↓
Purchase History Analysis
       ↓
AI Recommendation Engine
       ↓
Personalized Offer
       ↓
Firebase Notification
       ↓
Customer Views Offer
       ↓
Customer Redeems at POS
       ↓
Purchase / Redemption Updated
       ↓
Customer Exits Geo-Fence
       ↓
EXIT DETECTED
```

---

## 🏗️ High-Level Architecture

```text
                    SMART GEO-OFFER
                          │
          ┌───────────────┼────────────────┐
          │               │                │
          ▼               ▼                ▼
      CUSTOMER         RETAILER          ADMIN
       PORTAL           PORTAL           PORTAL
          │               │                │
          └───────────────┼────────────────┘
                          ▼
                    FASTAPI BACKEND
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
        GEO-FENCING    AI ENGINE      POS DATA
             │            │            │
             │        Apriori /       │
             │        ML Models       │
             │            │            │
             └────────────┼────────────┘
                          ▼
                       MongoDB
                          │
                          ▼
                 Firebase Cloud Messaging
                          │
                          ▼
                 Customer Notifications
```

---

## 🛠️ Technology Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Recharts

### Backend
- Python
- FastAPI
- REST APIs

### Database
- MongoDB

### AI / Machine Learning
- Python
- Scikit-learn
- Apriori Algorithm
- Association Rule Mining

### Geo-Fencing & Location
- GPS / Location Services
- GeoPy
- Map integration

### Notifications
- Firebase Cloud Messaging (FCM)

### Development Tools
- Git
- GitHub
- VS Code
- Postman / API testing tools

---

## 👥 Three-Portal Architecture

### Customer Portal

```text
Discover Store
      ↓
View Map
      ↓
Get Directions
      ↓
Enter Geo-Fence
      ↓
Receive Personalized Offer
      ↓
Redeem Offer
      ↓
Earn Rewards
```

### Retailer Portal

```text
Store Management
      ↓
Store Location
      ↓
Geo-Fence
      ↓
Products & Inventory
      ↓
Offers
      ↓
Customers
      ↓
POS
      ↓
Analytics
```

### Admin Portal

```text
Retailer Approval
      ↓
Customer Management
      ↓
Store Management
      ↓
Platform Analytics
      ↓
System Health
```

---

## 🌟 Unique Features

1. **AI + Geo-Fencing Integration** — combines customer location with purchasing behavior.
2. **Real-Time Entry Detection** — detects when customers enter a store's geo-fenced area.
3. **Personalized Offers** — generates offers according to customer purchase patterns.
4. **POS-Driven Recommendations** — uses transaction history to identify relevant products.
5. **Real-Time Notifications** — delivers offers when customers are near participating stores.
6. **Map-Based Store Discovery** — customers can discover nearby stores and navigate to them.
7. **Dynamic Store Geo-Fence** — retailers can update store location and geo-fence radius.
8. **Inventory-Aware Promotions** — promotional campaigns can be aligned with product availability.
9. **Loyalty & Gamification** — customers can earn points, rewards, badges, and savings.
10. **Three-Level Platform Architecture** — separate Customer, Retailer, and Admin portals.

---

## 🔄 Example Use Case

```text
1. Customer opens Smart Geo-Offer.
2. Nearby participating stores appear on the map.
3. Customer selects a store.
4. Customer receives directions to the store.
5. Customer enters the store's geo-fenced area.
6. System detects: ENTRY DETECTED.
7. Customer purchase history is analyzed.
8. AI identifies relevant product associations.
9. A personalized offer is generated.
10. Customer receives a real-time notification.
11. Customer views the offer.
12. Customer redeems the offer at the POS.
13. Redemption and purchase information are updated.
14. Customer earns loyalty points and savings.
15. Customer exits the geo-fence.
16. System records: EXIT DETECTED.
```

---

## 📊 Retailer Analytics

Retailers can monitor:

- Store visitors
- Customers inside the geo-fence
- New customers
- Returning customers
- Offer views
- Offer redemptions
- Redemption rate
- POS transactions
- Sales trends
- Popular products
- Customer purchase patterns
- Inventory levels
- Store footfall
- Peak visiting hours

---

## 🎯 Future Enhancements

- Advanced recommendation models
- Real-time inventory-aware recommendations
- Dynamic pricing
- Customer churn prediction
- Demand forecasting
- Multi-store recommendation optimization
- Advanced loyalty personalization
- A/B testing for promotional campaigns
- More detailed customer segmentation
- Predictive retail analytics

---

## 📁 Suggested Project Structure

```text
smart-geo-offer/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── assets/
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── models/
│   ├── services/
│   ├── recommendation/
│   └── database/
│
├── ml/
│   ├── data/
│   ├── preprocessing/
│   ├── models/
│   └── notebooks/
│
├── docs/
│   ├── architecture/
│   └── diagrams/
│
└── README.md
```

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd smart-geo-offer
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend

Create and activate a Python virtual environment:

```bash
python -m venv venv
```

Windows:

```bash
venv\\Scripts\\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

### 4. Environment Variables

Configure environment variables for:

```text
MongoDB connection
Backend API URL
Firebase configuration
Map provider/API key
JWT configuration
```

Do not commit private credentials or API secrets to the repository.

---

## 🧪 Testing Flow

### Customer Flow

```text
Login
 ↓
Location Permission
 ↓
Nearby Store
 ↓
Map & Directions
 ↓
Geo-Fence Entry
 ↓
Offer Generation
 ↓
Notification
 ↓
Offer Redemption
 ↓
POS Update
 ↓
Loyalty/Savings Update
 ↓
Geo-Fence Exit
```

### Retailer Flow

```text
Retailer Registration
 ↓
Admin Approval
 ↓
Store Setup
 ↓
Update Store Location
 ↓
Configure Geo-Fence
 ↓
Create Offer
 ↓
Monitor Customers
 ↓
Track Redemption
 ↓
View Analytics
```

---

## 🏆 Project Objective

Smart Geo-Offer aims to transform traditional retail promotions into a **location-aware, data-driven, and personalized retail experience** by connecting:

**AI + Geo-Fencing + POS Intelligence + Real-Time Notifications**

> **Right Offer. Right Customer. Right Place. Right Time.**

---

## 📌 Project Information

| Item | Details |
|---|---|
| **Project** | Smart Geo-Offer |
| **Category** | AI + Retail Technology + Geo-Fencing |
| **Application** | Intelligent Retail Marketing & Personalized Offers |
| **Portals** | Customer \| Retailer \| Admin |
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | FastAPI + Python |
| **Database** | MongoDB |
| **AI/ML** | Scikit-learn + Apriori |
| **Location** | GPS + Geo-Fencing + Map Integration |
| **Notifications** | Firebase Cloud Messaging |

---

## 📄 License

Add your preferred project license here.
