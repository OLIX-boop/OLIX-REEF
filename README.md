## 🚧🛠️👷 WORK IN PROGRESS

PREVIEW: https://olixtests.online

PS: To host this project, I utilized the following technologies:
- Mini Home Server & Proxmox: Created a virtual machine for efficient resource utilization. 🐧
- Ubuntu Server 24.04.1: Served as the operating system within the virtual environment. 🐧
- Node.js & Pocketbase (Linux): Used to compile and run the project.
- Nginx: Implemented as a reverse proxy for efficient traffic routing. 🌐
- ZeroSSL: Generated SSL certificates for enhanced security. 🔐
- ufw (Ubuntu Firewall): Restricted access and only opened necessary ports. 🛡️
- Router & Godaddy DNS: Configured to route external requests to my home server. 📡 🌐
- systemctl: Utilized to run database and project services in the background.

# OLIX REEF

![image](https://github.com/user-attachments/assets/36a9b483-68f1-4808-b3c7-7f3650c5a321)


# 🛒 Ecommerce website build with Next.js && Pocket base

## Project Description

This project is a full-stack e-commerce application built with [Next.js](https://nextjs.org/) for the front-end and for the APIs and [Pocketbase](https://pocketbase.io/) as database. 🎉

## 🚀 Project Setup

Follow these simple steps to set up and run the project on your local environment.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/OLIX-boop/ecommerce.git
   cd your-repo
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory of the project and add your environment variables. Example:

   ```env
      NEXT_PRODUCTION = "false" # true o false
      # if production is false these values wont be used
      NEXT_DB_IP = "127.0.0.1" # ip to connect to the db (used to get database's images)
      NEXT_DNS = "127.0.0.1" # website's dns, used for link sharing
      # se vuoi aggiungere un parametro aggiungilo nella sezione env di next.config.mjs
   ```

4. **Start the development server**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

5. **Start Pocketbase DB**

   ```bash
    .\pocketbase.exe serve
   ```

   PocketBase control panel will be avaible at [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)

## 🛠️ Tools and Technologies Used

- **Next.js** - React framework for server-side rendering
- **Pockebase** - Database
- **React** - Library for building user interfaces
- **Node.js** - JavaScript runtime environment

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

✨ Happy coding! ✨

---
