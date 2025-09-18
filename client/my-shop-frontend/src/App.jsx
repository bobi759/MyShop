import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages";
import { BooksPage } from "./pages/books";
import { BookDetailsPage } from "./pages/book-details";
import { ProfilePage } from "./pages/profile-pages";
import { Cart } from "./pages/cart";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book-details" element={<BookDetailsPage />} />
          <Route path="/profile-details" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
