import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  accessibilityOutline,
  archiveOutline,
  archiveSharp,
  arrowForwardCircleOutline,
  bookmarkOutline, chatboxOutline, documentOutline,
  heartOutline,
  heartSharp, homeOutline, informationOutline,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp, personOutline, searchOutline,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from 'ionicons/icons';
import './Menu.css';
import React, {useEffect, useState} from "react";
import {getCategories} from "../services/wordpressApi";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Αρχική',
    url: '/',
    iosIcon: mailOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Ποιοι είμαστε',
    url: '/about',
    iosIcon: paperPlaneOutline,
    mdIcon: accessibilityOutline
  },
  {
    title: 'Επικοινωνία',
    url: '/contact',
    iosIcon: heartOutline,
    mdIcon: chatboxOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then(response => setCategories(response.data));
  }, []);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Θεματολογία</IonListHeader>
          {categories.map((category) => (
              <IonItem key={category.id} className={location.pathname === category.url ? 'selected' : ''} routerLink={`/category/${category.id}`} routerDirection="none" lines="none" detail={false}>
               <IonIcon aria-hidden="true" slot="start" ios={arrowForwardCircleOutline} md={arrowForwardCircleOutline} />
                <IonLabel>{category.name}</IonLabel>
              </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
