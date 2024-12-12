# Task List Project

This project is a mobile application built with **React Native**, using **TanStack Query** for efficient data fetching and caching, along with other popular libraries like **React Navigation** and **React Native Paper** for a smooth and consistent user experience.

[View the Repository on GitHub](https://github.com/munaashe/task-list.git)

## Table of Contents

1. [Project Setup](#project-setup)
   - Prerequisites
   - Installation
   - Running the App
2. [Features](#features)
3. [Justifications for Tools and Libraries Used](#justifications-for-tools-and-libraries-used)
   - React Native
   - TanStack Query (formerly React Query)
   - React Navigation
   - React Native Paper
   - TypeScript
4. [Conclusion](#conclusion)

---

## Project Setup

### Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js** (v16.x or higher): Check by running:

   ```bash
   node -v
   ```

2. **React Native CLI:** Follow the official React Native environment setup guide. Install globally:

   ```bash
   npm install -g react-native-cli
   ```

3. **Android Studio or Xcode:** Required for building and running the app on Android or iOS devices.

4. **Expo CLI (Optional for quick testing):**

   ```bash
   npm install -g expo-cli
   ```

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/munaashe/task-list.git](https://github.com/munaashe/task-list.git)
   cd task-list
   ```

2. Install dependencies using either npm or Yarn:

   **Option 1: Using npm (Default)**

   ```bash
   npm install
   ```

   **Option 2: Using Yarn (Alternative)**

   If you prefer using Yarn, install it globally (if you haven't already):

   ```bash
   npm install -g yarn
   ```

   Then, install the dependencies:

   ```bash
   yarn install
   ```

3. Link native dependencies (if required):

   ```bash
   npx react-native link
   ```

### Running the App

**For Android:**

```bash
npx react-native run-android
```

**For iOS:**

```bash
npx react-native run-ios
```

**Or if you're using Expo:**

```bash
expo start
```

