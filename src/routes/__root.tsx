import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AcademyShell } from "@/components/academy/AcademyShell";
import { Button } from "@/components/ui/button";

function NotFoundComponent() { return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><p className="archive-eyebrow">Registro ausente</p><h1 className="font-display text-8xl text-primary">404</h1><p className="mt-3 text-muted-foreground">Esta página não consta nos arquivos da Academia.</p><Button asChild className="mt-7"><Link to="/">Retornar ao arquivo</Link></Button></div></div>; }
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { console.error(error); const router=useRouter(); useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"});},[error]); return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="font-display text-4xl text-foreground">O arquivo não respondeu</h1><p className="mt-3 text-muted-foreground">O selo desta página falhou. Tente abri-la novamente.</p><Button className="mt-7" onClick={()=>{router.invalidate();reset();}}>Tentar novamente</Button></div></div>; }
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Karla:wght@300;400;500;600;700&display=swap"},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><AcademyShell><Outlet/></AcademyShell></QueryClientProvider>}
