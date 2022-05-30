import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { fetchCats } from "store/cats/reducer";
import { AllCatsPage, FavouriteCatsPage } from "pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCatsPage />} />
          <Route path="/favouriteCats" element={<FavouriteCatsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
