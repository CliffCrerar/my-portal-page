import {IonContent, IonImg, IonHeader, IonText, IonPage, IonTitle, IonToolbar, IonFooter} from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';
import LandingWidget from "../components/landing-widget/landing-widget";

const Home: React.FC = () => {
    const alt = 'cc logo';
    const src = 'http://cdn-cloudflare.ga.s3.amazonaws.com/assets/own-logo/Own-icon-black-red.png';
    const square = '40px';
    return (
        <IonPage>

            <IonHeader>
                <IonToolbar class="ion-padding-horizontal">
                    <IonImg slot="start" style={{height: square, width: square}} alt={alt} src={src}/>
                    <IonTitle slot="start">Software Engineer</IonTitle>
                </IonToolbar>
                {/* <IonToolbar></IonToolbar> */}
            </IonHeader>
            <IonContent fullscreen color="light">

                <div className="img-container">
                    <img
                        className="ionImg"
                        src='http://cdn-cloudflare.ga.s3.amazonaws.com/assets/bg-material/639773.jpg'/>
                </div>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">CliffCrerar.tech</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <LandingWidget/>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonText>Footer</IonText>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Home;
