import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';

  navigation=[
    { path: '',
      label: 'Dashboard'
    },
    { path: '/users',
      label: 'Users'
    },
    { path: '/orders',
      label: 'Orders'
    },
    { path: '/shipments',
      label: 'Shipments'
    },
    { path: '/payments',
      label: 'Payments'
    },
    { path: '/login',
      label: 'Login'
    }
  ];

  constructor(private route: Router, private activatedRoute: ActivatedRoute){};

  shouldIbeDisplayed() {
  //  console.log(this.activatedRoute.snapshot); 
  //  location.href.edswith('login')  - not a good way
  if (this.route.url.endsWith('login') || this.route.url.endsWith('register')) {
    return false;
  } else {
    return true;
  }
  };
}
