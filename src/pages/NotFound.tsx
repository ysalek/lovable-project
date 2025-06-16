import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-slate-800">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700">
            Página no encontrada
          </h2>
          <p className="text-slate-600">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full max-w-xs mx-auto"
          >
            Volver al inicio
          </Button>
          
          <p className="text-sm text-slate-500">
            Si crees que esto es un error, por favor contacta al soporte técnico.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
