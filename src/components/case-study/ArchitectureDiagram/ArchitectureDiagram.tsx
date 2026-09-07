import {
  Database,
  HardDrive,
  LockKeyhole,
  Server,
  Smartphone,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";

function Connector() {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-8 w-px bg-zinc-700" />

      <span className="my-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
        REST / HTTPS
      </span>

      <div className="h-8 w-px bg-zinc-700" />
      <div className="h-2 w-2 rotate-45 border-b border-r border-zinc-500" />
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <div className="mt-10 rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <article
          className="
            w-full
            max-w-md
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            text-center
          "
        >
          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-blue-500
            "
          >
            <Smartphone size={24} />
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            Aplicación móvil
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Interfaz móvil encargada de catálogo, carrito, checkout,
            perfil, direcciones e historial de pedidos.
          </p>

          <div className="mt-4 flex justify-center">
            <Badge>Flutter</Badge>
          </div>
        </article>

        <Connector />

        <article
          className="
            w-full
            max-w-md
            rounded-2xl
            border
            border-border
            bg-card
            p-6
            text-center
          "
        >
          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-blue-500
            "
          >
            <Server size={24} />
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            API Backend
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            API REST responsable de la lógica de negocio, endpoints
            y comunicación entre la aplicación móvil y Supabase.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge>C#</Badge>
            <Badge>.NET</Badge>
            <Badge>Railway</Badge>
          </div>
        </article>

        <Connector />

        <article
          className="
            w-full
            rounded-2xl
            border
            border-border
            bg-card
            p-6
          "
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              Supabase
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Servicios de datos, autenticación y almacenamiento utilizados
              por la solución.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background/40 p-5 text-center">
              <Database
                size={22}
                className="mx-auto text-blue-500"
              />

              <h4 className="mt-3 font-semibold">
                PostgreSQL
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Usuarios, productos, pedidos, detalle de compra y direcciones.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background/40 p-5 text-center">
              <LockKeyhole
                size={22}
                className="mx-auto text-blue-500"
              />

              <h4 className="mt-3 font-semibold">
                Auth
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Registro, inicio de sesión y autenticación de peticiones.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background/40 p-5 text-center">
              <HardDrive
                size={22}
                className="mx-auto text-blue-500"
              />

              <h4 className="mt-3 font-semibold">
                Storage
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Imágenes y recursos multimedia del catálogo y de la aplicación.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}