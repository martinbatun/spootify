import { Params } from '@angular/router';

export enum ERole {
  Admin = 1
}

export interface MenuItems {
  name: string;
  url?: string;
  prms?: Params;
  role?: ERole[];
  icon?: string;
  children?: MenuItems[];
  header?: boolean;
}

export const MENUITEMS: MenuItems[] = [
  {
    name: "Discover",
    children: null,
    url: "/discover",
    icon: "fas fa-headphones-alt",
    role: [ERole.Admin]
  },
  {
    name: "Search",
    children: null,
    url: "/search",
    icon: "fas fa-search",
    role: [ERole.Admin]
  },
  {
    name: "Favorites",
    children: null,
    url: "/favorites",
    icon: "fas fa-heart",
    role: [ERole.Admin]
  },
  {
    name: "Playlists",
    children: null,
    url: "/playlists",
    icon: "fas fa-play-circle",
    role: [ERole.Admin]
  },
  {
    name: "Charts",
    children: null,
    url: "/charts",
    icon: "fas fa-bars",
    role: [ERole.Admin]
  },
]
