// // 'use client'
// // import React, { useState, useRef } from "react";
// // import { QrReader } from "react-qr-reader";
// // // import { useRouter } from "next/router";
// // import Head from "next/head";
// // import Link from "next/link";
// // // import axios from "axios";

// // export default function Scan() {
// //   // const router = useRouter();
// //   const [data, setData] = useState("No result");
// //   const [showModal, setShowModal] = useState(false);
// //   const qrRef = useRef(null);
// //   const [scannerActive, setScannerActive] = useState(true);

// //   const handleScan = (result, error) => {

// //     console.log(qrRef.current)




// //     if (!!result) {
// //       setData(result?.text);
// //       setShowModal(true);
// //       setScannerActive(false);
// //     }

// //     if (!!error) {
// //       console.info(error);
// //     }
// //   };

// //   const handleCloseModal = () => {
// //     setShowModal(false);
// //     // router.reload();
// //     // setScannerActive(true); // Start scanner again
// //     setScannerActive(true);
// //   };

// //   const handleOK =  () => {
// //     // await axios.post(`/api/postData`, { data });
// //     // router.reload();
// //     console.log(qrRef)
// //     if (scannerActive) {
// //       setScannerActive(false); // Stop scanner
// //       qrRef.current.stop();
// //     }
// //     console.log("Scanned something")
// //     console.log(data)
// //     router.push('/')
// //   };

// //   return (
// //     <>
// //       <Head>
// //         <title>QR Scan</title>
// //         <meta name="description" content="Generated by create next app" />
// //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>
// //       <main className="flex flex-col mt-[5rem] justify-center items-center">
// //         <div className="flex flex-col justify-center items-center">
// //           <h1 className="text-4xl font-bold mb-4">QR Scanner</h1>
// //           <div>

// //             <QrReader
// //               className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
// //               onResult={handleScan}
// //               constraints={{ facingMode: "environment" }}
// //               style={{ width: "40%", height: "40%" }}
// //               ref={qrRef}
// //             />
            

// //             {/* {scannerActive && (
// //               <QrReader
// //                 className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
// //                 onResult={handleScan}
// //                 constraints={{ facingMode: "environment" }}
// //                 style={{ width: "40%", height: "40%" }}
// //               />
// //             )} */}





// //           </div>
// //           <Link
// //             href={`/`}
// //             className=" bg-yellow-200 m-4 text-md rounded-md px-4 py-2 hover:underline"
// //           >
// //             Back to home..
// //           </Link>
// //           {showModal && (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// //               <div className="bg-black rounded-md p-4">
// //                 <p className="text-xl font-bold mb-2">Scanned data:</p>
// //                 <p>{data}</p>
// //                 <button
// //                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mt-4 hover:bg-gray-300"
// //                   onClick={handleCloseModal}
// //                 >
// //                   Close
// //                 </button>
// //                 <button
// //                   className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mx-4 mt-4 hover:bg-gray-300"
// //                   onClick={handleOK}
// //                 >
// //                   Ok
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </main>
// //     </>
// //   );
// // }






// 'use client'
// import React, { useState, useRef } from "react";
// import { QrReader } from "react-qr-reader";
// import {QrScanner} from '@yudiel/react-qr-scanner';



// export default function Scan() {
//   // const router = useRouter();
//   const [result, setResult] = useState('');
//   const qrRef = useRef(null);
//   const [isScannerActive, setIsScannerActive] = useState(true);


//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   const handleProceed = () => {
//     console.log("hello")
//     console.log(result)

//     setIsScannerActive(false);

//   };

  

//   return (
//     // <>
//     //   <div>
//     //     <h1>QR Code Scanner</h1>
      
//     //     {isScannerActive && (
//     //         <QrReader
//     //           ref={qrRef}
//     //           className="lg:h-[400px] lg:w-[400px] h-[300px] w-[300px]"
//     //           delay={300}
//     //           onResult={handleScan}
//     //           constraints={{ facingMode: "environment" }}
//     //           style={{ width: "40%", height: "40%" }}
              
//     //         />
//     //         )}










//     //     <p className="text-white">world</p>
//     //     <button onClick={handleProceed}>Proceed</button>
//     //   </div>
//     // </>



//     <>


//         <QrScanner
//               onDecode={(result) => console.log(result)}
//               onError={(error) => console.log(error?.message)}
//           />



//       </>









//   );
// }










// 'use client'
// import React, { useState } from 'react';
// import QrScanner from '@/components/QrScanner';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// const QRCodeScanner = ({username}) => {
//   const router = useRouter();
//     const [qrResult, setQRResult] = useState(null);
//     const [isCameraStopped, setIsCameraStopped] = useState(false);

//     const handleResult = (result) => {
//         // setQRResult(result);
//         setQRResult(`${username}: ${result}`);
//     };

//     const handleClosePopup = () => {
//         setQRResult(null);
//     };

//     const handleStopCamera = () => {
//         console.log("hello")
//         setIsCameraStopped(true);
//         console.log(isCameraStopped)
//         router.push('/');
//     };


//     useEffect(() => {
//       return () => {
//           // Cleanup when component unmounts
//           setIsCameraStopped(true); 
//       };
//   }, []);

//     return (
//         <div>
//             <QrScanner
//                 onResult={handleResult}
//                 stopDecoding={isCameraStopped}
//             />
//             {qrResult && (
//                 <Popup result={qrResult} onClose={handleClosePopup} />
//             )}
//             <button onClick={handleStopCamera}>Stop Camera</button>
//         </div>
//     );
// };

// const Popup = ({ result, onClose }) => {
//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <h2>QR Code Result</h2>
//                 <p>{result}</p>
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default QRCodeScanner;












// "use client"
// import React, { useState } from 'react'
// import QrScanner from 'qr-scanner';

import WebcamScanner from '@/components/QrScanner';
import Link from 'next/link'


const Scan = () => {
  
  return (
    <div>
      <WebcamScanner />
      <Link href="/dashboard">
        <button>Proceed</button>
      </Link>
    </div>
    
  )
}

export default Scan
