import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() is_login: boolean;
  @Input() pinned: boolean;
  @Input() hovered: boolean;
  @Output() login = new EventEmitter<boolean>();
  @Output() logout = new EventEmitter<boolean>();

  dropdowns: Array<any> = [
    // {
    //   title: 'Notificaciones', icon: 'fa fa-bell', badge: 'badge-warning',
    //   body: {
    //     iClass: 'text-warning',
    //     array: 'notifications',
    //     icon: true,
    //     detail: 'text',
    //     time: 'date'
    //   },
    //   footer: { text: 'Ver todas las notificaciones', href: '/notifications' }
    // },
    // {
    //   title: 'Mensajes', icon: 'fa fa-envelope', badge: 'badge-success',
    //   body: {
    //     iClass: 'text-success',
    //     array: 'messages',
    //     img: true,
    //     title: 'name',
    //     detail: 'text'
    //   },
    //   footer: { text: 'Ver todos los mensajes', href: '#' }
    // },
    {
      icon: 'fa fa-cog',
      body: {
        profile: true,
        logout: true
      }
    },
  ]
  notifications: Array<any> = [
    { type: 1, date: 'Hace 6 minutos', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { type: 2, date: 'hoy', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { type: 3, date: 'Ayer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
  ];
  messages: Array<any> = [
    { img: 'assets/images/profile-1.jpg', name: 'Carlos Rufino', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { img: 'assets/images/profile-2.jpg', name: 'Rodrigo Bueno', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { img: 'assets/images/profile-3.jpg', name: 'Alexis García', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
