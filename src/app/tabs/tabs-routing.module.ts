import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
       {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../config/config.module').then(m => m.ConfigPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'pesquisa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pesquisa/pesquisa.module').then(m => m.PesquisaPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'cadastro-produto',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sobre/sobre.module').then(m => m.SobrePageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'privacidade',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../privacidade/privacidade.module').then(m => m.PrivacidadePageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'vendedor',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../vendedor/vendedor.module').then(m => m.VendedorPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
