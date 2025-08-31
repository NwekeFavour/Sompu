    "use client"; // This directive marks it as a client component

    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    interface ToastProviderProps {
      children: React.ReactNode;
    }

    export default function ToastProvider({ children }: ToastProviderProps) {
      return (
        <>
          {children}
          <ToastContainer position="top-left" autoClose={3000} closeOnClick={true} pauseOnHover={true}/>
        </>
      );
    }