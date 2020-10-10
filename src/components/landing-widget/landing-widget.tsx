import React, {Markdown} from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import md from '!!raw-loader!./landing-widget.md'
import {IonCard, IonItem, IonCardContent, IonTitle, IonLabel, IonImg, IonRow, IonCol, IonNote} from '@ionic/react';
import './_landing-widget.scss';

type Props = {}

export default function LandingWidget({}: Props) {
    const imgAlt = 'image of Cliff Crerar software engineer'
    const src = 'http://cdn-cloudflare.ga.s3.amazonaws.com/assets/me/scquare-me-on-the-bridge.png'
    return (
        <IonCard className="landing-widget">

            <IonCardContent>
                <IonItem>
                    <IonTitle class="ion-text-center">Introduction</IonTitle>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonImg src={src} alt={imgAlt}/>
                    </IonCol>
                    <IonCol>
                        <Markdown source={md}/>
                    </IonCol>
                </IonRow>
            </IonCardContent>

        </IonCard>
    );
}
