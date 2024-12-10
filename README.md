# Concepts in Practice

## React+Vite Template Description

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Concepts

---

- **Components** - Class and Functional Components, Component Lifecycle
- **Props**: Passing data to components
- **State**: Managing dynamic data within a component
- **Event Handling**: Handling events like clicks, form submissions, etc
- **Conditional Rendering**: Rendering components based on certain conditions
- **Hooks**
  - **useState**: Managing local state in functional components.
  - **useEffect**: Handling side effects like data fetching, subscriptions, and manual DOM updates.
  - **useContext**: Managing global state without Redux.
  - **useReducer**: Handling more complex state logic.
  - **useRef**: Accessing DOM elements or persisting values across renders.
  - **useMemo** and **useCallback**: Optimizing performance.
  - **Custom Hooks**: Encapsulating reusable logic.
- **Routing** - BrowserRouter / HashRouter, Route, Switch, and Navigate, Link / NavLink for navigation
- **State Management** - Context API, Redux / Redux Toolkit, Zustand, Recoil, or Jotai (alternative state management libraries)
- **Styling** - Inline Styling, CSS Modules, Styled Components / Emotion (CSS-in-JS solutions), Utility-first CSS frameworks like Tailwind CSS
- **Forms and Validation** - Controlled vs. Uncontrolled Components, Libraries like Formik or React Hook Form for complex forms, Input validation using libraries like Yup or Zod
- **API Integration**
  - Fetch API or Axios for data fetching
  - Handling loading states and errors
  - React Query / TanStack Query for server-state management
- **Performance Optimization**
  - React.memo: Preventing unnecessary re-renders
  - Lazy Loading with `React.lazy` and `Suspense`
  - Code Splitting using Webpack or dynamic imports
  - Optimizing rendering with virtualized lists (e.g., react-window)
- **Error Handling**
  - Error Boundaries.
  - Graceful fallback UI for failed components.

## Practice

---
