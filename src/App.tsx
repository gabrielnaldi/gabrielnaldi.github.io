import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './pages/home-page';
import './styles/global.css';

function App() {

  return (
    <>
      <ToastContainer
        transition={Flip}
        theme="colored"
        autoClose={1500}
        position="bottom-right"
      />
      <div className="min-h-screen max-w-screen">
        <HomePage />
      </div>
    </>
    
  )
}

export default App
