# 🧥 Clothify App

Clothify is a beautifully crafted **Expo E-Commerce App** for clothing. It provides a seamless and responsive shopping experience for users, allowing them to browse, search, and purchase fashion items directly from their mobile devices.

Built using **Expo**, **React Native**, **TypeScript**, **Firebase & FireStore** and **React Navigation**, the app is optimized for performance, modularity, and scalability.

---


## ✨ Features

- 🛒 **Product Listing & Categories**
- 🔍 **Search & Filter Functionality**
- 👕 **Product Details Page**
- ❤️ **Wishlist & Favorites**
- 🛍️ **Shopping Cart**
- ✅ **Checkout Flow**
- 🌙 **Dark & Light Theme Support**
- 🌍 **Payment Methods**
- 🔐 **User Authentication**
- 🧠 **Modular Architecture**
- 🚀 **Optimized Performance with Expo**

---

## 📁 Folder Structure

```
src/
├── assets/         # Images, fonts, icons
├── components/     # UI components (CouponCards, ProductCards, etc.)
├── hooks/          # Custom React hooks
├── navigation/     # React Navigation setup
├── screens/        # App screens (Home, Product, Cart, etc.)
├── service/        # API services (OtpService, AuthService, etc.)
├── styles/         # Global styles
├── themes/         # App theme configurations
└── utils/          # Strings and utilities
```

---

## 🛠️ Tech Stack

- **React Native** (with Expo)
- **TypeScript**
- **React Navigation**
- **Context API**
- **Firebase and FireStore**
- **AsyncStorage** for local persistence

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/lang/en/docs/cli/install/) (package manager)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

---

### 📦 Installation

```bash
# Clone the project
git clone https://github.com/SheetalAlbiorix/Clothify.git
cd Clothify

# Install dependencies
yarn expo install
# or
npx expo install
```

---

### ▶️ Running the App

```bash
# Start development server
npx expo start
# or
npx expo run android
```

Use:
- `i` to run on iOS simulator  
- `a` to run on Android emulator  
- Or scan the QR code with Expo Go


## 🌐 Environment Variables

Create a `.env` file at the root:

```env

Enter your api url from firebase or google service you use

GOOGLE_CLIENT_IDL=GOOGLE_CLIENT_ID
GOOGLE_ANDROID_CLIENT_ID=GOOGLE_ANDROID_CLIENT_ID
GOOGLE_IOS_CLIENT_ID=GOOGLE_IOS_CLIENT_ID
API_KEY=API_KEY
AUTHDOMAIN=AUTHDOMAIN
PROJECTID=PROJECTID
STORAGEBUCKET=STORAGEBUCKET
MESSAGINGSENDERID=MESSAGINGSENDERID
APPID=APPID
```

---

## 🧪 Testing

You can add:

- [Jest](https://jestjs.io/) for unit testing
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Preview Of Clothify
- 🎥 ![Watch Demo Video](src/assets/clothify.gif)