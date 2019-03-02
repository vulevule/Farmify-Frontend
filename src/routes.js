import Manual from './components/Manual'
import Automatic from './components/Automatic'
import Home from './components/Home'
import Settings from "./components/Settings";
import Alarms from "./components/Alarms";

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manual',
    name: 'Manual',
    component: Manual
  },
  {
    path: '/automatic',
    name: 'Automatic',
    component: Automatic
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/Alarms",
    name: "Alarms",
    component: Alarms
  },

]
