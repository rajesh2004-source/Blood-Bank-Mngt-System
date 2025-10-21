 
# 🩸 Blood Bank Management System (Real-Time Health Resource Locator)

<img width="500" height="471" alt="image" src="https://github.com/user-attachments/assets/235971ca-f64e-47cd-922c-87bd2cd349bc" />
<img width="500" height="469" alt="image" src="https://github.com/user-attachments/assets/b5838af9-ad6f-40a4-8437-938590eddab9" />

<img width="500" height="466" alt="image" src="https://github.com/user-attachments/assets/7787d96a-82c1-43d7-9db3-e0c0cf24849e" />
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/31794900-9606-4e34-833c-5d1aeae4107a" />


## 📖 Overview

This is a full-stack Blood Bank Management System developed using the MERN stack, designed to act as a Real-Time Health Resource Locator. The system efficiently connects hospitals, blood banks, and organizations to manage critical blood inventory and donor information with a focus on security, performance, and real-time updates for emergency use cases.

## ✨ Key Features

* **Role-Based Security:** Implemented secure, restricted access for different entities (Donors, Hospitals, Organizations, and Admins/Blood Banks) using JSON Web Tokens (JWT) and Bcrypt.
* **Real-Time Blood Locator:** A React.js interface allows users to quickly find nearby hospitals and check the availability of specific blood types in real-time.
* **Secure Data Handling:** Built robust backend services with Node.js and MongoDB for secure storage and management of sensitive donor and patient data.
* **Inventory & Transaction Management:** Tools for blood banks/admins to manage inventory levels, approve transactions, and maintain detailed logging of all blood requests and donations.
* **Scalable Architecture:** Designed and deployed the platform with a focus on scalability and accessibility to ensure reliability during high-demand emergency scenarios.

---

## 🛠️ Tech Stack

This application is built using the following technologies:

### Frontend
* **React.js:** For building the dynamic user interface.
* **HTML5 / CSS3**

### Backend
* **Node.js & Express.js:** For building secure, scalable RESTful APIs.
* **MongoDB (Mongoose):** As the NoSQL database for flexible storage of donor, inventory, and transaction data.

---

## Configure Environment Variables

Create a file named **`.env`** in the **root directory** (for the server) and a separate **`.env`** file inside the **`client`** directory (for the frontend). **You must provide your own MongoDB connection string and JWT secret.**

**Server (`.env`) Example:**

```
PORT=5000
MONGO_URI=[YOUR_MONGODB_CONNECTION_STRING_HERE]
JWT_SECRET=[A_RANDOM_SECRET_STRING_FOR_JWT]
DEV_MODE =[YOUR_DEV_MODE_VALUE]
```

**Client (`client/.env`) Example:**

```
REACT_APP_SERVER_URL=http://localhost:5000
```

## Install Dependencies & Run

#### **A. Install Dependencies**

Navigate to both the root and `client` directories to install dependencies:

```bash
# In the root directory:
npm install 

# Then, in the client directory:
cd client
npm install
cd ..
```

#### **B. Start the Application**

Start the server and client in separate terminals (or use your custom run command):

```bash
# To start the server (in the root directory):
npm start  
# OR: node server.js

# To start the client (in the client directory):
cd client
npm start
```

The application will typically be accessible at `http://localhost:[Your Client Port, e.g., 3000]`.

-----
## 📜 License
This project is distributed under the MIT License. See the LICENSE file in the repository root for full details.

-----
## 📧 Contact

**Mahale Rajesh** - [rajeshmahale103@gmail.com](mailto:rajeshmahale103@gmail.com)

**Project Link**: https://github.com/rajesh2004-source/Blood-Bank-Mngt-System

-----
