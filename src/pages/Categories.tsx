import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { getCategories } from '../services/wordpressApi';

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        getCategories().then(response => setCategories(response.data));
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Categories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {categories.map((category) => (
                        <IonItem key={category.id} routerLink={`/category/${category.id}`}>
                            <IonLabel>{category.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Categories;
