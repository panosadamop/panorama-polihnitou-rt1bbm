import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const Contact: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>Επικοινωνία</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="ion-padding">

                <p><strong>Ψάνης Ιγνάτης</strong></p>
                <p>Τηλέφωνο: 693 270 4096<br/>
                    <a href="mailto:ignatiospsanis@hotmail.com">ignatiospsanis@hotmail.com</a></p>


                <p><strong>Καναρίδης Πέτρος</strong></p>
                <p>Τηλέφωνο: 693 661 1407<br/>
                    <a href="mailto:petros.kanaridis@gmail.com">petros.kanaridis@gmail.com</a></p>


                <p><strong>Αδαμόπουλος Παναγιώτης</strong></p>
                <p>Τηλέφωνο: 694 205 2019<br/>
                    <a href="mailto:info@panoramapolihnitou.gr">info@panoramapolihnitou.gr</a></p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6194.305759504512!2d26.177683621153577!3d39.08021531469471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14baee89e7396f63%3A0x2973998e5b3c5e84!2zzqDOv867zrnPh869zq_PhM6_z4IgODEzIDAw!5e0!3m2!1sel!2sgr!4v1729243047167!5m2!1sel!2sgr"
                    width="100%" height="400" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </IonContent>
        </IonPage>
    );
};

export default Contact;
