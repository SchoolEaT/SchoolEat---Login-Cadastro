import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

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
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../config/config.module').then(m => m.ConfigPageModule)
          }
        ]
      },
      {
        path: 'pesquisa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pesquisa/pesquisa.module').then(m => m.PesquisaPageModule)
          }
        ]
      },
      {
        path: 'cadastro-produto',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoPageModule)
          }
        ]
      },
      {
        path: 'sobre',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sobre/sobre.module').then(m => m.SobrePageModule)
          }
        ]
      },
      {
        path: 'privacidade',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../privacidade/privacidade.module').then(m => m.PrivacidadePageModule)
          }
        ]
      },
      {
        path: 'vendedor',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../vendedor/vendedor.module').then(m => m.VendedorPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
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
