import { useAuth } from '../components/auth/AuthProvider';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Building2, LogOut, User } from 'lucide-react';

const Index = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  Sistema Contable
                </h1>
                <p className="text-sm text-slate-500">{user?.empresa}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900">{user?.nombre}</p>
                <p className="text-xs text-slate-500 capitalize">{user?.rol}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="ml-4"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Módulos disponibles según permisos */}
          {user?.permisos.includes('dashboard') && (
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Vista general del sistema y métricas principales
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('facturacion') && (
            <Card>
              <CardHeader>
                <CardTitle>Facturación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Gestión de facturas y documentos comerciales
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('clientes') && (
            <Card>
              <CardHeader>
                <CardTitle>Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Administración de clientes y contactos
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('productos') && (
            <Card>
              <CardHeader>
                <CardTitle>Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Catálogo de productos y servicios
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('inventario') && (
            <Card>
              <CardHeader>
                <CardTitle>Inventario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Control de stock y movimientos
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('plan_cuentas') && (
            <Card>
              <CardHeader>
                <CardTitle>Plan de Cuentas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Estructura contable y cuentas
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('libro_diario') && (
            <Card>
              <CardHeader>
                <CardTitle>Libro Diario</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Registro de asientos contables
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('balance') && (
            <Card>
              <CardHeader>
                <CardTitle>Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Estados financieros y balances
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('reportes') && (
            <Card>
              <CardHeader>
                <CardTitle>Reportes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Informes y análisis financieros
                </p>
              </CardContent>
            </Card>
          )}

          {user?.permisos.includes('configuracion') && (
            <Card>
              <CardHeader>
                <CardTitle>Configuración</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Ajustes del sistema y preferencias
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
