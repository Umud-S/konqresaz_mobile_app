import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonRow, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import {home} from "ionicons/icons";
// import { useNavigate } from "react-router-dom";

const QrCheck = () => {
    // const navigate = useNavigate();

    const startScan = async () => {
        // Check camera permission
        // This is just a simple example, check out the better checks below
        await BarcodeScanner.checkPermission({ force: true });
        // make background of WebView transparent
        // note: if you are using ionic this might not be enough, check below
        BarcodeScanner.hideBackground();
        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
        // if the result has content
        if (result.hasContent) {
            debugger
            console.log(result.content); // log the raw scanned content
            checkIsQrChecked(result.content);
        }
    };

    const checkIsQrChecked = async (qrCode) =>{
        const arrayOfQr = qrCode.split("/");
        let appointmentId = arrayOfQr[1];
        try {
            const result = await axios.get('http://localhost:8180/qrchecker/'+appointmentId);
            console.log(result);
            if(result.success === true && result.is_qr_checked === 1) {
                console.success(result.message);
                alert(result.message);
                // navigate("/qrcheck");
            } else{
                console.error(result.message)
                alert(result.message);
                // navigate("/qrcheck");
            }
        } catch (error) {
            console.error(error);
        }
    }
    // 012 598 28 50

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

export default QrCheck;


{/*<IonHeader collapse="condense">*/}
{/*  <IonToolbar>*/}
{/*    <IonTitle size="large">KonqresQr</IonTitle>*/}
{/*  </IonToolbar>*/}
{/*</IonHeader>*/}
{/*<ExploreContainer />*/}