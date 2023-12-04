import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonRow, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import {home} from "ionicons/icons";

const Result = () => {
    // const startScan = async () => {
    //     // Check camera permission
    //     // This is just a simple example, check out the better checks below
    //     await BarcodeScanner.checkPermission({ force: true });
    //     // make background of WebView transparent
    //     // note: if you are using ionic this might not be enough, check below
    //     BarcodeScanner.hideBackground();
    //     const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    //     // if the result has content
    //     if (result.hasContent) {
    //         console.log(result.content); // log the raw scanned content
    //     }
    // };

  return (
    <IonPage onClick={startScan}>
      {/*<IonHeader>*/}
      {/*  <IonToolbar>*/}
      {/*    <IonTitle>KonqresQr</IonTitle>*/}
      {/*  </IonToolbar>*/}

      {/*</IonHeader>*/}
      {/*  <IonButton onClick={startScan} >Check</IonButton>*/}
      {/*/!*<IonContent className="ion-padding">*!/*/}
      {/*/!*    <IonRow>*!/*/}
      {/*/!*        salam*!/*/}
      {/*/!*    </IonRow>*!/*/}

      {/*/!*</IonContent>*!/*/}
        <div className="sample-background">
        </div>
        <div className="container">
            <div className="barcode-scanner--area--container">
                <div className="relative">
                    {/*<p>QR kodu merkezde saxlayin</p>*/}
                </div>
                <div className="square surround-cover">
                    <div className="barcode-scanner--area--outer surround-cover">
                        <div  className="barcode-scanner--area--inner">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </IonPage>
  );
};

export default Result;


{/*<IonHeader collapse="condense">*/}
{/*  <IonToolbar>*/}
{/*    <IonTitle size="large">KonqresQr</IonTitle>*/}
{/*  </IonToolbar>*/}
{/*</IonHeader>*/}
{/*<ExploreContainer />*/}