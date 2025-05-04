import React, { useState }  from 'react';
import Layout from '@theme/Layout';




export default function DecodeJwt() {
    const [textEnabled, setTextEnabled] = useState('');
    const [textDisabled, setTextDisabled] = useState('');

    const handlerChangeTextAreaEnabled = (event) => {
        setTextEnabled(event.target.value)
    }

    const decode = (input) => {
        try {
            return JSON.parse(atob(input));
        } catch(err){
            console.error(`Erro ao tentar decodificar o dado: ${input}`);
        }

        return null;
    }

    const processResult = () => {

        const tokens = textEnabled.split('.')

        const header = decode(tokens[0]);
        const payload = decode(tokens[1]);

        const prettyFormat = JSON.stringify(
            {
                "header": header,
                "payload": payload
            }
            , null, 2);

        setTextDisabled(prettyFormat)
    }

    return (
        <Layout title="Decode Jwt" description="Decode jwt">
            <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
                flexDirection: 'column',
            }}>

            <label 
                style={{ 
                    padding: '20px 20px 20px 0px',
                    textAlign: 'left',
                    width: '50%',
                }}>
                Decoding:
            </label>

            <textarea 
                value={textEnabled}
                onChange={handlerChangeTextAreaEnabled}
                style={{ 
                    padding: '20px 20px 20px 0px',
                    textAlign: 'left',
                    width: '50%',
                    height: '30%',
                    padding: '5px',
                }}>
            </textarea>

            <button 
                onClick={processResult}
                style={{ 
                    padding: '5px',
                    textAlign: 'center',
                    width: '50%',
                    height: '10%',
                    marginTop: '10px'
                }}>
                Decoding
            </button>

            <label 
                style={{ 
                    padding: '20px 20px 20px 0px',
                    textAlign: 'left',
                    width: '50%',
                }}>
                Result:
            </label>

            <textarea 
                value={textDisabled}
                style={{ 
                    padding: '20px 20px 20px 0px',
                    textAlign: 'left',
                    width: '50%',
                    height: '30%',
                    padding: '5px',
                }}
                disabled>
            </textarea>
            </div>
        </Layout>
    );
}