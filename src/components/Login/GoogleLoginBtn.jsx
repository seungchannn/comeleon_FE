import React from 'react';
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import * as S from './GoogleLoginBtn.style';

const GoogleLoginBtn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const login = useGoogleLogin({
    onSuccess: credentialResponse => {
      console.log('로그인성공!', credentialResponse);

      const decodeding = jwt_decode(credentialResponse.credential);
      console.log(decodeding);
    },
  });

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        buttonText="signin with Google"
        type="standard"
        onSuccess={credentialResponse => {
          console.log('로그인성공!', credentialResponse);
          const decodeding = jwt_decode(credentialResponse.credential);
          console.log(decodeding);
        }}
        onFailure={err => {
          console.log('로그인실패', err);
        }}
      />
    </GoogleOAuthProvider>
  );
};
export default GoogleLoginBtn;

// function App() {
//   const login = useGoogleLogin({
//     onSuccess: codeResponse => console.log(codeResponse),
//   });
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* This is my button. Its just a regular HTML Button */}
//         <button onClick={() => login()}>Log In Using Google</button>
//       </header>
//     </div>
//   );
// }

// export default App;
