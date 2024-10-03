import React from 'react';
import { QRCode } from 'react-qrcode-logo';

interface QRGeneratorProps {
    data: string;
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ data }) => {
    return (
        <div>
            <h3>Share Your Skills</h3>
            <QRCode value={data} size={200} />
        </div>
    );
};

export default QRGenerator;