import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Helmet } from 'react-helmet';

const HashingComponent = () => {
  const [input, setInput] = useState('');
  const [hashedOutput, setHashedOutput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleHash = () => {
    // SHA-512 ile hash'leme
    const hash = CryptoJS.SHA512(input);

    // Base64 ile encode etme
    const base64Hash = CryptoJS.enc.Base64.stringify(hash);

    setHashedOutput(base64Hash);
  };

  return (
    <div>
      <Helmet>
        <title>Hash - Birebir Eğitimler</title>
      </Helmet>
      <h1>SHA-512 Hash ve Base64 Encode</h1>
      <input type="text" value={input} onChange={handleInputChange} placeholder="Hashlenecek veri" />
      <button onClick={handleHash}>Hash ve Encode</button>
      {hashedOutput && (
        <div>
          <h2>Hashed ve Encoded Çıktı:</h2>
          <p>{hashedOutput}</p>
        </div>
      )}
    </div>
  );
};

export default HashingComponent;
