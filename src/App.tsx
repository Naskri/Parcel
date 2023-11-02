import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hi!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
