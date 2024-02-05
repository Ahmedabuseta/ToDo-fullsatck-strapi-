import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../pages/Layout";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import StickyWallPage from "../pages/stickyWall";
// import Upcoming from "../pages/upcoming";
import ListPage from "../pages/ListPage";
import CreateTodo from "../components/todos/CreateTodo";
import TodoLayout from "../pages/TodoLayout";
const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route
          index
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <HomePage />
            </ProtectedRoute>
          }
        />
         
        <Route path='today' element={<TodoLayout />} >
          {/* <Route index element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <TodoLayout />
            </ProtectedRoute>
          } /> */}
          <Route path='createTodo' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <CreateTodo />
            </ProtectedRoute>
          } />
          <Route path='edit/:todoID' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <CreateTodo />
            </ProtectedRoute>
          } />
          </Route>
          
          <Route path='stickyWall' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <StickyWallPage />
            </ProtectedRoute>
          } />
          {/* <Route path='upcoming' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <Upcoming />
            </ProtectedRoute>
          } /> */}
          <Route path='calendar' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              {<h2>dfldfgj</h2>}
            </ProtectedRoute>
          } />
          <Route path='lists/:id' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <ListPage />
            </ProtectedRoute>
          } />
          <Route path='tag/:id' element={<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <ListPage />
            </ProtectedRoute>
          } />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/login" data={userData}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
